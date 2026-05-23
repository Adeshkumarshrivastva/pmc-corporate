import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log(' MongoDB connected successfully');
  } catch (error) {
    console.error(' MongoDB connection error:', error);
    process.exit(1);
  }
};

// Test Details Schema (for both Hidden Loss and Advanced Test)
const testDetailsSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  phoneNumber: { type: String, required: true, trim: true },
  companyName: { type: String, required: true, trim: true },
  testType: { type: String, enum: ['hidden-loss', 'advanced-test'], required: true },
  testResults: { type: Object, default: null },
  source: { type: String, default: 'corporate-website' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

testDetailsSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const TestDetails = mongoose.model('TestDetails', testDetailsSchema);

// Zoho CRM Integration
class ZohoAPI {
  constructor() {
    this.clientId = process.env.ZOHO_CLIENT_ID;
    this.clientSecret = process.env.ZOHO_CLIENT_SECRET;
    this.refreshToken = process.env.ZOHO_REFRESH_TOKEN;
  }

  async getAccessToken() {
    try {
      const formData = new URLSearchParams();
      formData.append('grant_type', 'refresh_token');
      formData.append('client_id', this.clientId);
      formData.append('client_secret', this.clientSecret);
      formData.append('refresh_token', this.refreshToken);

      const response = await fetch('https://accounts.zoho.in/oauth/v2/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });

      if (!response.ok) throw new Error('Failed to get access token');
      const data = await response.json();
      return data.access_token;
    } catch (error) {
      console.error(' Zoho access token error:', error.message);
      throw error;
    }
  }

  async createLead(leadData) {
    try {
      const accessToken = await this.getAccessToken();
      const response = await fetch('https://www.zohoapis.in/crm/v8/Leads', {
        method: 'POST',
        headers: {
          'Authorization': `Zoho-oauthtoken ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [{
            First_Name: leadData.firstName,
            Last_Name: leadData.lastName,
            Email: leadData.email,
            Phone: leadData.phone,
            Company: leadData.company,
            Lead_Source: leadData.leadSource || 'Corporate Website',
            Description: leadData.description,
          }],
        }),
      });

      const data = await response.json();
      if (data.data && data.data[0] && data.data[0].code === 'SUCCESS') {
        console.log(' Lead created in Zoho CRM:', data.data[0].details.id);
        return { success: true, data };
      } else {
        console.error(' Zoho CRM error:', data);
        return { success: false, error: data };
      }
    } catch (error) {
      console.error(' Zoho CRM error:', error.message);
      return { success: false, error: error.message };
    }
  }
}

const zohoAPI = new ZohoAPI();

// Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Corporate Test API is running',
    timestamp: new Date().toISOString()
  });
});

// Create test details
app.post('/api/test-details', async (req, res) => {
  try {
    const { name, email, phoneNumber, companyName, testType = 'hidden-loss' } = req.body;

    if (!name || !email || !phoneNumber || !companyName) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    const testDetails = new TestDetails({
      name,
      email,
      phoneNumber,
      companyName,
      testType,
      source: 'corporate-website'
    });

    await testDetails.save();

    console.log('Test details saved:', {
      id: testDetails._id,
      name: testDetails.name,
      email: testDetails.email,
      company: testDetails.companyName,
      testType: testDetails.testType
    });

    // Send to Zoho CRM if configured
    if (process.env.ZOHO_CLIENT_ID && process.env.ZOHO_CLIENT_SECRET && process.env.ZOHO_REFRESH_TOKEN) {
      const nameParts = name.split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(' ') || nameParts[0];

      await zohoAPI.createLead({
        firstName,
        lastName,
        email,
        phone: phoneNumber,
        company: companyName,
        leadSource: `Corporate Website - ${testType === 'hidden-loss' ? 'Hidden Loss Calculator' : 'Advanced Test'}`,
        description: `Test submission from corporate website. Company: ${companyName}, Test Type: ${testType}`
      });
    } else {
      console.log('  Zoho CRM not configured. Skipping Zoho integration.');
    }

    res.status(201).json({
      success: true,
      message: 'Details submitted successfully',
      data: {
        id: testDetails._id,
        name: testDetails.name,
        email: testDetails.email
      }
    });
  } catch (error) {
    console.error(' Error saving test details:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit details',
      error: error.message
    });
  }
});

// Book demo endpoint
app.post('/api/book-demo', async (req, res) => {
  try {
    const { fullName, companyName, designation, workEmail, mobileNumber, companySize } = req.body;

    if (!fullName || !companyName || !designation || !workEmail || !mobileNumber || !companySize) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Send to Zoho CRM if configured
    if (process.env.ZOHO_CLIENT_ID && process.env.ZOHO_CLIENT_SECRET && process.env.ZOHO_REFRESH_TOKEN) {
      const nameParts = fullName.split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(' ') || nameParts[0];

      await zohoAPI.createLead({
        firstName,
        lastName,
        email: workEmail,
        phone: mobileNumber,
        company: companyName,
        leadSource: 'Corporate Website - Demo Booking',
        description: `Demo booking request. Designation: ${designation}, Company Size: ${companySize}`
      });

      console.log(' Demo booking saved to Zoho CRM');
    } else {
      console.log(' Zoho CRM not configured. Demo booking logged only.');
    }

    console.log('Demo booking received:', {
      name: fullName,
      company: companyName,
      email: workEmail,
      phone: mobileNumber
    });

    res.status(201).json({
      success: true,
      message: 'Demo booking successful! Our team will contact you soon.'
    });
  } catch (error) {
    console.error(' Error booking demo:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to book demo',
      error: error.message
    });
  }
});

// Get all test submissions
app.get('/api/test-details', async (req, res) => {
  try {
    const testDetails = await TestDetails.find()
      .sort({ createdAt: -1 })
      .limit(100);

    res.json({
      success: true,
      count: testDetails.length,
      data: testDetails
    });
  } catch (error) {
    console.error(' Error fetching test details:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch test details',
      error: error.message
    });
  }
});

// Start server
const startServer = async () => {
  await connectDB();
  
  app.listen(PORT, () => {
    console.log(` Server is running on http://localhost:${PORT}`);
    console.log(` API endpoints:`);
    console.log(`   - GET  http://localhost:${PORT}/api/health`);
    console.log(`   - POST http://localhost:${PORT}/api/test-details`);
    console.log(`   - GET  http://localhost:${PORT}/api/test-details`);
    console.log(`\n Zoho CRM: ${process.env.ZOHO_CLIENT_ID ? 'Configured' : ' Not configured'}`);
  });
};

startServer();

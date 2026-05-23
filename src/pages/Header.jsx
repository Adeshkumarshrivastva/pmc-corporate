import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/pmcimage.png";

function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [appsOpen, setAppsOpen] = useState(false);
  const [poshOpen, setPoshOpen] = useState(false);
  const [advancedOpen, setAdvancedOpen] = useState(false);

  const poshRef = useRef();
  const serviceRef = useRef();
  const appRef = useRef();
  const advancedRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !poshRef.current?.contains(e.target) &&
        !serviceRef.current?.contains(e.target) &&
        !appRef.current?.contains(e.target) &&
        !advancedRef.current?.contains(e.target)
      ) {
        setPoshOpen(false);
        setServicesOpen(false);
        setAppsOpen(false);
        setAdvancedOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItemStyle = {
    color: "#e0eeee",
    fontSize: "15px",
    cursor: "pointer",
    padding: "8px 14px",
    whiteSpace: "nowrap",
    textDecoration: "none",
  };

  const dropdownStyle = {
    position: "absolute",
    top: "100%",
    left: "0",
    backgroundColor: "#2d5f5d",
    minWidth: "240px",
    borderRadius: "6px",
    marginTop: "8px",
    zIndex: 1000,
    overflow: "hidden",
  };

  const dropdownItemStyle = {
    padding: "12px 16px",
    color: "#ffffff",
    cursor: "pointer",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    textDecoration: "none",
    display: "block",
  };

  return (
    <header
      style={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        padding: "0 40px",
        height: "90px",
        backgroundColor: "#2d5f5d",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        boxSizing: "border-box",
      }}
    >
      {/* LOGO */}
      <Link to="/">
        <img src={logo} alt="logo" style={{ height: "75px" }} />
      </Link>

      {/* NAV */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "22px",
          margin: "0 auto",
        }}
      >
        <Link to="/" style={navItemStyle}>Home</Link>

        {/* POSH */}
        <div ref={poshRef} style={{ position: "relative" }}>
          <span style={navItemStyle} onClick={() => setPoshOpen(!poshOpen)}>
            POSH ▾
          </span>

          {poshOpen && (
            <div style={dropdownStyle}>
              <Link to="/posh-policy" style={dropdownItemStyle}>
                Posh Policy Creation & Review
              </Link>

              <Link to="/external" style={dropdownItemStyle}>
                External Committee Member Services
              </Link>

              <Link to="/training" style={dropdownItemStyle}>
                Posh Training
              </Link>

              <Link to="/posh-elearning" style={dropdownItemStyle}>
                Posh E-Learning Program
              </Link>

              <Link to="/posh-cloud" style={dropdownItemStyle}>
                Posh Compliance Cloud Platform
              </Link>

              <Link to="/posh-filing" style={dropdownItemStyle}>
                Posh Annual Filing
              </Link>
            </div>
          )}
        </div>

        {/* SERVICES */}
        <div ref={serviceRef} style={{ position: "relative" }}>
          <span style={navItemStyle} onClick={() => setServicesOpen(!servicesOpen)}>
            Our Services ▾
          </span>

          {servicesOpen && (
            <div style={dropdownStyle}>
              <Link to="/corporate-service" style={dropdownItemStyle}>
                Corporate Service
              </Link>

              <Link to="/school-service" style={dropdownItemStyle}>
                School Service
              </Link>

              <Link to="/university-service" style={dropdownItemStyle}>
                University Service
              </Link>

              <Link to="/coaching-service" style={dropdownItemStyle}>
                Coaching Service
              </Link>
            </div>
          )}
        </div>

        <Link to="/pmc-academy" style={navItemStyle}>
          PMC Academy
        </Link>

        <Link to="/pmc-franchise" style={navItemStyle}>
          PMC Franchise
        </Link>

        {/* APPS */}
        <div ref={appRef} style={{ position: "relative" }}>
          <span style={navItemStyle} onClick={() => setAppsOpen(!appsOpen)}>
            Our Apps ▾
          </span>

          {appsOpen && (
            <div style={dropdownStyle}>
              <Link to="/mitra" style={dropdownItemStyle}>Mitra</Link>
              <Link to="/sathi" style={dropdownItemStyle}>Sathi</Link>
              <Link to="/rakshak" style={dropdownItemStyle}>Rakshak</Link>
            </div>
          )}
        </div>

        <div ref={advancedRef} style={{ position: "relative" }}>
          <span style={navItemStyle} onClick={() => setAdvancedOpen(!advancedOpen)}>
            Advanced Test ▾
          </span>

          {advancedOpen && (
            <div style={dropdownStyle}>
              <Link to="/hidden-loss" style={dropdownItemStyle}>
                Loss Calculator
              </Link>
              <Link to="/advanced-test" style={dropdownItemStyle}>
                Advanced Test
              </Link>
              <Link to="/advanced-test/dashboard" style={dropdownItemStyle}>
                Dashboard
              </Link>
            </div>
          )}
        </div>

        <Link to="/contact" style={navItemStyle}>
          Contact Us
        </Link>
      </nav>
    </header>
  );
}

export default Header;
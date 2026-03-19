import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function Footer() {
  return (
    <footer aria-label="Footer section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="footer-logo">
              <Link to="/" title="Go to homepage" aria-label="Homepage">
                <img src={logo} alt="Amourely Logo" className="logo m-auto" />
              </Link>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              className="row"
              role="navigation"
              aria-label="Footer navigation links"
            >
              <div className="col-lg-4 col-md-4 col-6 mt-sm-0 mt-4">
                <h6 className="heading-6">Company</h6>
                <ul className="footer-menu">
                  <li className="menu-item">
                    <a
                      href="#"
                      title="Learn more about Amourely"
                      aria-label="About Us"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="#"
                      title="See open positions at Amourely"
                      aria-label="Careers"
                    >
                      Careers
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="#"
                      title="Latest news and press coverage"
                      aria-label="Press"
                    >
                      Press
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-4 col-6 mt-sm-0 mt-4">
                <h6 className="heading-6">Support</h6>
                <ul className="footer-menu">
                  <li className="menu-item">
                    <a
                      href="#"
                      title="Browse help articles"
                      aria-label="Help Center"
                    >
                      Help Center
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="#"
                      title="Important safety tips"
                      aria-label="Safety Tips"
                    >
                      Safety Tips
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="#"
                      title="Contact Amourely support"
                      aria-label="Contact Us"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-4 col-6 mt-sm-0 mt-4">
                <h6 className="heading-6">Legal</h6>
                <ul className="footer-menu">
                  <li className="menu-item">
                    <Link
                      to="/terms"
                      title="Read our terms and conditions"
                      aria-label="Terms and Conditions"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      to="/privacy-policy"
                      title="Review our privacy policy"
                      aria-label="Privacy Policy"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      to="/community-guidelines"
                      title="Understand community rules"
                      aria-label="Community Guidelines"
                    >
                      Community Guidelines
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-between align-items-center mt-5">
          <div className="copyright" aria-label="Copyright notice">
            © 2025 Amourely. All rights reserved.
          </div>
          <div
            className="social-links d-flex gap-4"
            aria-label="Social media links"
          >
            <a href="#" title="Visit our Instagram" aria-label="Instagram">
              Instagram
            </a>
            <a href="#" title="Follow us on Twitter" aria-label="Twitter">
              Twitter
            </a>
            <a href="#" title="Like us on Facebook" aria-label="Facebook">
              Facebook
            </a>
            <a href="#" title="Watch our YouTube channel" aria-label="YouTube">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

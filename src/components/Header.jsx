import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isLegalPage = location.pathname !== '/';

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const closeMenu = () => setMenuOpen(false);

  if (isLegalPage) {
    const legalLinks = [
      { label: 'Home', to: '/' },
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms & Conditions', to: '/terms' },
      { label: 'Community Guidelines', to: '/community-guidelines' },
    ];
    return (
      <header role="banner" aria-label="Primary site header">
        <nav className="nav-container" role="navigation" aria-label="Main navigation">
          <button
            className="menu-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <ul className={`nav-tabs ${menuOpen ? 'open' : ''}`}>
            {legalLinks.map(({ label, to }) => (
              <li
                key={to}
                className={`nav-item ${location.pathname === to ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }

  const landingNavItems = [
    { label: 'Home', id: 'home' },
    { label: 'How it Works', id: 'how-it-works' },
    { label: 'Features', id: 'features' },
    { label: 'Trust and Safety', id: 'trust-safety' },
    { label: 'Success Stories', id: 'success-stories' },
  ];

  return (
    <header role="banner" aria-label="Primary site header">
      <nav className="nav-container" role="navigation" aria-label="Main navigation">
        <button
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <ul className={`nav-tabs ${menuOpen ? 'open' : ''}`}>
          {landingNavItems.map(({ label, id }) => (
            <li
              key={id}
              className="nav-item"
              onClick={() => scrollToSection(id)}
              role="link"
              tabIndex={0}
              aria-label={`Go to ${label} section`}
              title={label}
            >
              {label}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

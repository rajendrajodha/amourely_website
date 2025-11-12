import React, { useState } from 'react';
 
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMenuOpen(false); // Close menu on navigation
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header role="banner" aria-label="Primary site header">
      <nav className="nav-container" role="navigation" aria-label="Main navigation">
        {/* Hamburger Menu for Mobile */}
        <button
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Navigation Tabs */}
        <ul className={`nav-tabs ${menuOpen ? 'open' : ''}`}>
          {[
            { label: 'Home', id: 'home' },
            { label: 'How it Works', id: 'how-it-works' },
            { label: 'Features', id: 'features' },
            { label: 'Trust and Safety', id: 'trust-safety' },
            { label: 'Success Stories', id: 'success-stories' },
          ].map(({ label, id }) => (
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

import React from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * Wrapper for legal/static pages (Privacy Policy, Terms, Community Guidelines).
 * Uses the same Header and Footer as the landing page for consistent theme.
 */
function LegalPageLayout({ title, children }) {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <main className="legal-page" role="main" aria-label={title}>
          <div className="container">
            <div className="legal-page-content">
              <h1 className="heading-2 legal-page-title">{title}</h1>
              {children}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default LegalPageLayout;

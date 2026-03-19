import React from 'react';
import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/LegalPageLayout';

function TermsAndConditions() {
  return (
    <LegalPageLayout title="Terms & Conditions">
      <p className="legal-updated">Last updated: March 2025</p>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">1. Acceptance of Terms</h2>
        <p>
          By accessing or using the Amourely application, website, or related services ("Services"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, you may not use our Services. We reserve the right to modify these Terms at any time; your continued use after changes constitutes acceptance of the updated Terms.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">2. Eligibility</h2>
        <p>
          You must be at least 18 years old to use Amourely. By using our Services, you represent and warrant that you meet this age requirement and have the legal capacity to enter into a binding agreement. We may require verification of your age or identity at any time.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">3. Account Registration and Security</h2>
        <p>
          You must create an account to use certain features. You agree to provide accurate, current, and complete information and to update it as needed. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">4. Use of the Services</h2>
        <p>You agree to use the Services only for lawful purposes and in accordance with these Terms and our Community Guidelines. You agree not to:</p>
        <ul className="legal-list">
          <li>Use the Services if you are under 18 or prohibited from using them under applicable law</li>
          <li>Impersonate any person or entity or misrepresent your identity or affiliation</li>
          <li>Harass, abuse, threaten, or harm other users</li>
          <li>Post false, misleading, or illegal content</li>
          <li>Use the Services for commercial purposes (e.g., spam, advertising) without our consent</li>
          <li>Attempt to gain unauthorized access to our systems, other accounts, or any data</li>
          <li>Use automated means (bots, scrapers) to access or collect data from the Services</li>
          <li>Circumvent any security or access controls</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">5. Content You Provide</h2>
        <p>
          You retain ownership of content you submit (e.g., photos, messages, profile information). By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, display, reproduce, and distribute that content in connection with operating and providing the Services. You represent that you have the right to grant this license and that your content does not violate any third-party rights or applicable law.
        </p>
        <p>
          We may remove or refuse to display any content that we believe violates these Terms, our Community Guidelines, or applicable law, without prior notice.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">6. Paid Features and Subscriptions</h2>
        <p>
          Some features may require payment. By purchasing a subscription or one-time feature, you agree to the applicable pricing and billing terms. Fees are generally non-refundable unless otherwise required by law or stated in our refund policy. We may change pricing with reasonable notice. Subscriptions may auto-renew unless cancelled in accordance with the platform (e.g., App Store, Google Play) or our app settings.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">7. Privacy</h2>
        <p>
          Your use of the Services is also governed by our <Link to="/privacy-policy" className="legal-link">Privacy Policy</Link>, which describes how we collect, use, and protect your personal information. By using the Services, you consent to the practices described in the Privacy Policy.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">8. Disclaimers</h2>
        <p>
          THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT GUARANTEE THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS. WE ARE NOT RESPONSIBLE FOR THE CONDUCT OF USERS OR FOR ANY OFF-LINE INTERACTIONS. YOU USE THE SERVICES AT YOUR OWN RISK.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">9. Limitation of Liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, AMOURELY AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF OR INABILITY TO USE THE SERVICES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US, IF ANY, IN THE TWELVE MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED U.S. DOLLARS, WHICHEVER IS GREATER.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">10. Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless Amourely and its affiliates and their respective officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising from your use of the Services, your content, or your violation of these Terms or any applicable law.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">11. Termination</h2>
        <p>
          We may suspend or terminate your account and access to the Services at any time, with or without notice, for any reason, including violation of these Terms or our Community Guidelines. You may delete your account at any time through the app or by contacting us. Upon termination, your right to use the Services ceases immediately. Provisions that by their nature should survive (e.g., disclaimers, limitation of liability, indemnification) will survive termination.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">12. Governing Law and Disputes</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Amourely operates, without regard to conflict of law principles. Any dispute arising from these Terms or the Services shall be resolved in the courts of that jurisdiction, unless otherwise required by mandatory law.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">13. Contact</h2>
        <p>
          For questions about these Terms and Conditions, please contact us at:
        </p>
        <p className="legal-contact">
          <strong>Amourely</strong><br />
          Email: amourely2025@gmail.com
        </p>
      </section>
    </LegalPageLayout>
  );
}

export default TermsAndConditions;

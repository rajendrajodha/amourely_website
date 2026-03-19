import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

function PrivacyPolicy() {
  return (
    <LegalPageLayout title="Privacy Policy">
      <p className="legal-updated">Last updated: March 2025</p>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">1. Introduction</h2>
        <p>
          Amourely ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our dating application and related services, including our website. Please read this policy carefully. By using Amourely, you consent to the practices described in this policy.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">2. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul className="legal-list">
          <li><strong>Account and profile information:</strong> Name, email address, date of birth, gender, profile photos, bio, preferences, and other details you provide when creating or editing your profile.</li>
          <li><strong>Location data:</strong> With your permission, we collect location information to show you potential matches nearby and to improve our services. You can control location access in your device settings.</li>
          <li><strong>Usage and device information:</strong> How you use the app (e.g., swipes, messages, features used), device type, operating system, unique device identifiers, and IP address.</li>
          <li><strong>Communications:</strong> Messages and other content you send through the app. We may retain these for safety, support, and legal purposes.</li>
          <li><strong>Payment information:</strong> If you use paid features, our payment processors collect billing details. We do not store full card numbers on our servers.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">3. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul className="legal-list">
          <li>Create and manage your account and profile</li>
          <li>Provide matching, discovery, and communication features</li>
          <li>Personalize your experience and show relevant content</li>
          <li>Process payments and prevent fraud</li>
          <li>Send you service-related notifications and, with your consent, marketing communications</li>
          <li>Improve our app, conduct analytics, and develop new features</li>
          <li>Enforce our Terms, Community Guidelines, and ensure safety</li>
          <li>Comply with applicable laws and respond to legal requests</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">4. Sharing of Information</h2>
        <p>
          We may share your information in the following circumstances:
        </p>
        <ul className="legal-list">
          <li><strong>With other users:</strong> Your profile (including photos and bio) is visible to other users as permitted by your settings. Your approximate location may be used for matching but we do not share your precise address.</li>
          <li><strong>Service providers:</strong> We work with trusted partners for hosting, analytics, payment processing, and customer support. They are contractually required to protect your data and use it only for the services they provide to us.</li>
          <li><strong>Legal and safety:</strong> We may disclose information if required by law, to protect our rights or the safety of users, or to prevent fraud or abuse.</li>
          <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction, subject to this Privacy Policy.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">5. Data Retention</h2>
        <p>
          We retain your information for as long as your account is active or as needed to provide you services. After account deletion, we may retain certain data for a limited period for legal, safety, and operational purposes (e.g., fraud prevention, dispute resolution). Aggregated or anonymized data may be retained longer for analytics.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">6. Your Rights and Choices</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul className="legal-list">
          <li>Access, correct, or delete your personal information</li>
          <li>Object to or restrict certain processing</li>
          <li>Data portability</li>
          <li>Withdraw consent where we rely on consent</li>
          <li>Lodge a complaint with a supervisory authority</li>
        </ul>
        <p>
          You can manage your account settings, privacy preferences, and profile visibility within the app. To exercise your rights or request assistance, contact us at the email address provided below.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">7. Security</h2>
        <p>
          We implement technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. No method of transmission over the internet or electronic storage is 100% secure; we encourage you to use a strong password and keep your login details confidential.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">8. Children's Privacy</h2>
        <p>
          Amourely is not intended for users under 18. We do not knowingly collect personal information from anyone under 18. If you believe we have collected such information, please contact us and we will take steps to delete it.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">9. International Transfers</h2>
        <p>
          Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable law.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page and updating the "Last updated" date. Continued use of Amourely after changes constitutes acceptance of the updated policy.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">11. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or our data practices, please contact us at:
        </p>
        <p className="legal-contact">
          <strong>Amourely</strong><br />
          Email: amourely2025@gmail.com
        </p>
      </section>
    </LegalPageLayout>
  );
}

export default PrivacyPolicy;

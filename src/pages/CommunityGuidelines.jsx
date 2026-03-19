import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

function CommunityGuidelines() {
  return (
    <LegalPageLayout title="Community Guidelines">
      <p className="legal-updated">Last updated: March 2025</p>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">Our Commitment</h2>
        <p>
          Amourely is a place for genuine connections, respect, and safety. These Community Guidelines ("Guidelines") outline what we expect from everyone who uses our app and website. By using Amourely, you agree to follow these Guidelines. Violations may result in content removal, account warning, suspension, or permanent ban.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">1. Be Authentic and Honest</h2>
        <ul className="legal-list">
          <li>Use accurate, recent photos of yourself. Do not use someone else's photos or heavily edited images that misrepresent your appearance.</li>
          <li>Provide truthful information in your profile (age, interests, intentions). Misrepresentation undermines trust and may result in account action.</li>
          <li>Do not create fake accounts, bots, or multiple accounts to abuse or manipulate the platform.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">2. Be Respectful</h2>
        <p>Treat others with respect. We do not tolerate:</p>
        <ul className="legal-list">
          <li>Harassment, bullying, stalking, or threatening behavior</li>
          <li>Hate speech, discrimination, or slurs based on race, ethnicity, religion, gender, sexual orientation, disability, or other protected characteristics</li>
          <li>Unwanted sexual advances, explicit content sent without consent, or pressure for intimate content</li>
          <li>Insults, trolling, or persistent negativity aimed at other users</li>
        </ul>
        <p>If someone is not interested or asks you to stop, respect their decision.</p>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">3. Keep It Safe</h2>
        <ul className="legal-list">
          <li>Do not share personal financial information (e.g., bank details, passwords) or send money to people you have only met on the app without taking proper precautions.</li>
          <li>Be cautious about sharing your exact location or contact details until you feel comfortable. Use in-app messaging until you are ready.</li>
          <li>Report suspicious behavior, scams, or abuse. We take safety reports seriously and act on them.</li>
          <li>Do not use the platform to promote violence, self-harm, or dangerous activities.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">4. Appropriate Content</h2>
        <p>Profile photos and content must be appropriate for a diverse audience:</p>
        <ul className="legal-list">
          <li>No nudity, sexually explicit content, or content that could be considered pornographic</li>
          <li>No graphic violence, gore, or content that glorifies harm</li>
          <li>No content that promotes illegal activities, including drug dealing or fraud</li>
          <li>No spam, unsolicited advertising, or repetitive promotional content</li>
        </ul>
        <p>We may remove content that does not meet these standards, even if it is not explicitly prohibited elsewhere.</p>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">5. No Exploitation or Harm</h2>
        <p>
          Amourely is for adults only (18+). We have zero tolerance for:
        </p>
        <ul className="legal-list">
          <li>Content or behavior that exploits, endangers, or targets minors</li>
          <li>Human trafficking, prostitution, or solicitation</li>
          <li>Non-consensual sharing of intimate images or information</li>
          <li>Impersonation of another person or entity for deception</li>
        </ul>
        <p>
          Such behavior will result in permanent ban and may be reported to law enforcement.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">6. Use of the Platform</h2>
        <ul className="legal-list">
          <li>Do not use the Services for commercial purposes (e.g., selling products, recruiting for MLM) unless explicitly permitted by Amourely.</li>
          <li>Do not attempt to circumvent safety features, age checks, or bans (e.g., using another account after a ban).</li>
          <li>Do not scrape data, use unauthorized automation, or overload our systems.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">7. Reporting and Enforcement</h2>
        <p>
          If you see something that violates these Guidelines, please report it through the in-app reporting option or contact us. We review reports and take action, which may include warning the user, removing content, or suspending or terminating accounts. We may also proactively monitor and enforce these Guidelines.
        </p>
        <p>
          If you believe your account was restricted in error, you may contact us to appeal. We will review and respond in accordance with our policies.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">8. Updates</h2>
        <p>
          We may update these Community Guidelines from time to time to reflect changes in our practices, the law, or our community. We will post the updated Guidelines on this page and update the "Last updated" date. Continued use of Amourely after changes constitutes acceptance of the updated Guidelines.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="heading-5 legal-heading">9. Contact</h2>
        <p>
          For questions about these Guidelines or to report a concern, contact us at:
        </p>
        <p className="legal-contact">
          <strong>Amourely</strong><br />
          Email: amourely2025@gmail.com
        </p>
      </section>
    </LegalPageLayout>
  );
}

export default CommunityGuidelines;

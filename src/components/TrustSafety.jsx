import React from 'react';
import couplesafety from '../images/couple-safety.png';

function TrustSafety() {
  return (
    <div className='container' aria-labelledby="trust-heading">
      <div className='row align-items-center'>
        
        {/* Text Content */}
        <div className='col-lg-6 col-md-6 pe-5'>
          <h2 id="trust-heading" className='heading-2'>
            Safe Space. Real People. Honest Intentions.
          </h2>

          <p className='pe-5 py-3'>
            We take your safety seriously. From selfie verification to report & block features, our platform is built for respectful and authentic dating.
          </p>

          <div className='safety-points mt-2'>
            <ul>
              <li>Real-time photo checks</li>
              <li>Report abuse anonymously</li>
              <li>24/7 moderation support</li>
              <li>Block and restrict tools</li>
            </ul>
          </div>
        </div>

        {/* Image Section */}
        <div className='col-lg-6 col-md-6 d-flex justify-content-end'>
          <img
            src={couplesafety}
            alt="Couple embracing while holding hands, symbolizing safety and trust"
            title="We prioritize your safety at every step"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default TrustSafety;

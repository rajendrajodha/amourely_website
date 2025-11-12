import React from 'react'

import howitworks from '../images/how-it-works.png';

function HowItWorks() {
  return (
   <div className='container' aria-label="How it works section">
  <div className='row align-items-center'>
    
    
    <div className='col-lg-6 col-md-6 pe-md-5 mb-4 mb-sm-0'>
      <div aria-labelledby="how-it-works-heading">
        <h2 id="how-it-works-heading" className='heading-2'>
          From Hello to Happen — Here's How
        </h2>

        <div className='listing mt-4 mt-xl-5'>
          <div className='mb-4'>
            <h3 className='heading-6'>Set Your Intentions</h3>
            <p>
              Tell us what you're looking for — serious relationship, casual, or just meaningful connections.
            </p>
          </div>
          <div className='mb-4'>
            <h3 className='heading-6'>Verified Profiles Only</h3>
            <p>
              No fakes, no bots. Real people verified through secure checks.
            </p>
          </div>
          <div className='mb-4'>
            <h3 className='heading-6'>Match & Connect</h3>
            <p>
              We help you discover profiles that actually matter to you. Conversations that flow. Dates that click.
            </p>
          </div>
        </div>
      </div>
    </div>

   
    <div className='col-lg-6 col-md-6 d-flex justify-content-end'>
      <img
        src={howitworks}
        alt="Romantic couple with lanterns on a beach at night"
        title="Real people. Real connections."
        loading="lazy"
      />
    </div>

  </div>
</div>

  )
}

export default HowItWorks
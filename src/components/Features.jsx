import React from 'react'

function Features() {
  return (
  
  <div className='container d-flex justify-content-end' aria-label="App Features Section">
    <div className='col-xxl-6 col-lg-6 d-lg-block d-none' aria-hidden="true"></div>

    <div className='col-xxl-6 col-lg-6 col-md-12 ps-sm-5'>
      <div className='content-sec dark-bg' aria-labelledby="features-heading">
        <h2 id="features-heading" className='heading-2'>
          Verified Vibes. <br /> Personal Touch.
        </h2>

        <div className='listing text-light  mt-4 mt-xl-5'>
          <div className='mb-4'>
            <h3 className='heading-6'>Instagram Verified VIPs</h3>
            <p aria-label="Instagram Verified VIPs description">
              Trust badges that show who's really real.
            </p>
          </div>

          <div className='mb-4'>
            <h3 className='heading-6'>Smart Match Algorithm</h3>
            <p aria-label="Smart Match Algorithm description">
              Matching based on interests, habits, and dating goals.
            </p>
          </div>

          <div className='mb-4'>
            <h3 className='heading-6'>Video Profiles</h3>
            <p aria-label="Video Profiles description">
              Go beyond selfies. Let personality shine through.
            </p>
          </div>

          <div className='mb-4'>
            <h3 className='heading-6'>Privacy First</h3>
            <p aria-label="Privacy First description">
              Total control over who sees your profile and how you appear.
            </p>
          </div>

          <div className='mb-4'>
            <h3 className='heading-6'>No Swipe Fatigue</h3>
            <p aria-label="No Swipe Fatigue description">
              Curated matches daily. Designed to avoid endless scrolling.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  )
}

export default Features
import React from 'react'

function GetTheApp() {
  return (
   <div className='container' aria-label="Get the App Section">
  <div className='gettheapp'>
    <div className='content-sec' aria-labelledby="get-the-app-heading">
      <h3 id="get-the-app-heading" className='heading-3'>
        Ready to Meet Someone Who Gets You?
      </h3>
      <h5 className='heading-5'>
        Thousands of genuine connections are happening right now.
      </h5>
    </div>

    <div className='button-sec'>
      <a
        href="#"
        className='btn btn-gettheapp'
        title="Download the Amourely app"
        aria-label="Download the Amourely app"
      >
        Get the App
      </a>
    </div>
  </div>
</div>
  )
}

export default GetTheApp
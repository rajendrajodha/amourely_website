import React from 'react';
import logo from '../images/logo.png';
import user1 from '../images/user1.png';
import user2 from '../images/user2.png';
import user3 from '../images/user3.png';
import user4 from '../images/user4.png';

import heroimg1 from '../images/hero-img-1.png';
import heroimg2 from '../images/hero-img-2.png';
import heroimg3 from '../images/hero-img-3.png';
import heroimg4 from '../images/hero-img-4.png';
import heroimg5 from '../images/hero-img-5.png';
import heroimg6 from '../images/hero-img-6.png';

function Home() {
  return (
    <div aria-label="Homepage section">
      <div className="container text-center">
        <div className="hero-content-sec" aria-labelledby="hero-heading">
          <div className="logo-sec mb-2 mt-1 mb-md-4 mt-md-2">
            <a href="#" title="Go to Amourely homepage" aria-label="Amourely logo">
              <img src={logo} alt="Amourely logo" className="logo m-auto" />
            </a>
          </div>

          <div className="my-3">
            <h1 id="hero-heading" className="heading-1">
              Meet Someone Who's Right for You.
            </h1>
            <p className="subheading mt-3 mx-auto">
              A dating app built for real connections — not just swipes. Discover people who share your values, lifestyle, and intentions.
            </p>

            <div
              className="button-sec d-flex gap-4 justify-content-center"
              role="group"
              aria-label="Call-to-action buttons"
            >
              <button className="btn btn-outline" aria-label="Learn how the app works">How it Works</button>
              <button className="btn btn-solid" aria-label="Download the app">Get the App</button>
            </div>

            <div className="user-stats row" aria-label="User statistics">
              <div className="avatars d-flex col-6" aria-label="Sample user avatars">
                <img src={user1} alt="User avatar 1" style={{ zIndex: 4 }} />
                <img src={user2} alt="User avatar 2" style={{ zIndex: 3, marginLeft: -20 }} />
                <img src={user3} alt="User avatar 3" style={{ zIndex: 2, marginLeft: -20 }} />
                <img src={user4} alt="User avatar 4" style={{ zIndex: 1, marginLeft: -20 }} />
              </div>
              <div className="user-count col-6">
                <h3 className="mb-0 fw-bold">200K+</h3>
                <p className="mb-0 text-muted">Active Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='thumb-imgs-sec' aria-label="Gallery of dating moments and couples">
        <img className='d-none d-sm-block' src={heroimg1} alt="Couple enjoying dinner together in a cozy restaurant" />
        <img src={heroimg2} alt="Romantic date with wine, holding hands at a cafe table" />
        <img src={heroimg3} alt="Happy couple sharing a laugh over drinks indoors" />
        <img src={heroimg4} alt="Couple enjoying a sunset view together at the lake" />
        <img src={heroimg5} alt="Loving couple embracing in nature and smiling" />
        <img className='d-none d-sm-block'  src={heroimg6} alt="Couple peacefully resting together in an intimate moment" />
      </div>
    </div>
  );
}

export default Home;

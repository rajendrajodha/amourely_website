 
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import TrustSafety from './components/TrustSafety';
import SuccessStories from './components/SuccessStories';
import Footer from './components/Footer';
import GetTheApp from './components/GetTheApp';
function App() {
  return (
    <div className="App">
      <div className='wrapper'>
       <Header />
          <section id="home"><Home /></section>
          <section className='pt-0' id="how-it-works"><HowItWorks /></section>
          <section  className='features' id="features"><Features /></section>
          <section id="trust-safety"><TrustSafety /></section>
          <section className='success-stories pt-0' id="success-stories"><SuccessStories /></section>
          <section className='p-0' id="gettheapp"><GetTheApp /></section>
       </div>
       <Footer />
    </div>
  );
}

export default App;

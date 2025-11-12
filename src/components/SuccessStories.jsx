import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';

import testimonialsBubbles from '../images/testimonials-bubbles.png';

const SuccessStories = () => {
  const testimonials = [
    {
      name: 'Aarav & Meera',
      quote: 'We met on Amourely and never looked back. It didn’t feel like just another match — it felt real from day one.',
    },
    {
      name: 'Riya & Kunal',
      quote: 'I was about to delete the app… and then I met Kunal. One match changed everything.',
    },
    {
      name: 'Anjali & Raj',
      quote: 'Amourely felt different from the rest. We connected over chai, and the rest is history!',
    },
    {
      name: 'Neha & Arjun',
      quote: 'The easiest swipe I’ve ever made. We instantly clicked — and now we’re planning our future together.',
    },
    {
      name: 'Simran & Dev',
      quote: 'Amourely gave us more than a date — it gave us a real connection, laughter, and a lifetime bond.',
    },
    {
      name: 'Ishita & Sameer',
      quote: 'I never believed in dating apps until I met Sameer. We were meant to be, and Amourely made it happen.',
    },
  ];

  return (
     
      <div className='container'>
        <h2 className='heading-2'>
          They Found Each Other. You Could Be Next.
        </h2>

        <div className='slider-sec' role="region" aria-label="Success stories slider">
          <Swiper
            modules={[Pagination, Navigation, Autoplay, EffectFade]}
            slidesPerView={1}
            loop
            autoplay={{ delay: 5000 }}
            effect="fade"
            simulateTouch={false}
            fadeEffect={{ crossFade: true }}
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <blockquote className='review' aria-label={`Testimonial from ${t.name}`}>
                  “{t.quote}”
                  <footer className='writer'>— {t.name}</footer>
                </blockquote>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
 
  );
};

export default SuccessStories;

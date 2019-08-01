import React, { useEffect } from 'react';
import CustomCard from './CustomCard';

import '../Styles/CustomCarousel.scss';

export default function CustomCarousel() {
  useEffect(() => {
    showSlides();
  });

  var slideIndex = 0;

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }

  return (
    <div>
      <div className='slideshow-container'>
        <div className='mySlides fade'>
          <CustomCard />
        </div>
        <div className='mySlides fade'>
          <CustomCard />
        </div>
        <div className='mySlides fade'>
          <CustomCard />
        </div>
      </div>
      <div className='the-dots'>
        <span className='dot' />
        <span className='dot' />
        <span className='dot' />
      </div>
    </div>
  );
}

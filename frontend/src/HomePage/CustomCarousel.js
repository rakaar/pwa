import React, { useEffect } from 'react';
import CustomCard from './CustomCard';

import '../Styles/CustomCarousel.scss';

export default function CustomCarousel(props) {
  var slideIndex = 0;

  useEffect(() => {
    showSlides();
  });

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');
    for (i = 0; i < slides.length; i++) {
      if (slides[i] != undefined) slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    if (slides[slideIndex - 1] != undefined)
      slides[slideIndex - 1].style.display = 'block';
    if (slides[slideIndex - 1] != undefined)
      dots[slideIndex - 1].className += ' active';
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }

  return (
    <div>
      <div class='slideshow-container'>
        {props.carouselArts.map(item => {
          return (
            <div className='mySlides fade'>
              <CustomCard
                title={item.title}
                body={item.body}
                post_id={item.post_id}
                imgLinks={item.imgLinks}
              />
            </div>
          );
        })}
        {/* <div class='mySlides fade'>
          <CustomCard  />
        </div>

        <div class='mySlides fade'>
          <CustomCard />
        </div>

        <div class='mySlides fade'>
          <CustomCard />
        </div> */}
      </div>
      <br />
      <div className='the-dots'>
        <span class='dot' />
        <span class='dot' />
        <span class='dot' />
      </div>
    </div>
  );
}

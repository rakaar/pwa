import React from 'react';

export default function Carousel() {
  return (
    <div>
      <h1>carousel</h1>
      <div class='carousel carousel-slider'>
        <a class='carousel-item' href='#one!'>
          <img src='https://lorempixel.com/800/400/food/1' />
        </a>
        <a class='carousel-item' href='#two!'>
          <img src='https://lorempixel.com/800/400/food/2' />
        </a>
        <a class='carousel-item' href='#three!'>
          <img src='https://lorempixel.com/800/400/food/3' />
        </a>
        <a class='carousel-item' href='#four!'>
          <img src='https://lorempixel.com/800/400/food/4' />
        </a>
      </div>
    </div>
  );
}

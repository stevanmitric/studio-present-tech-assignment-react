import React from 'react';
import Image from '../assets/images/image 14.jpg';

const Slider = () => {
  return (
    <div>
      <div className='slider'>
        <div className='slides'>
          <img src={Image} alt='Image 1' />
          <img src={Image} alt='Image 2' />
          <img src={Image} alt='Image 3' />
        </div>
      </div>
    </div>
  );
};

export default Slider;

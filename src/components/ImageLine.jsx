import React from 'react';
import Image1 from '../assets/images/Group 658@2x.png';
import Image2 from '../assets/images/Group 659@2x.png';
import Image3 from '../assets/images/Group 660@2x.png';
import Image4 from '../assets/images/Group 661@2x.png';

const ImageLine = () => {
  return (
    <section className='image-row'>
      <img src={Image1} alt='' />
      <img src={Image2} alt='' />
      <img src={Image3} alt='' />
      <img src={Image4} alt='' />
    </section>
  );
};

export default ImageLine;

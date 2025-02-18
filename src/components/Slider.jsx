import { useState } from 'react';
import Image from '../assets/images/image 14.jpg';
import arrowLeft from '../assets/icons/arrow-left.svg';
import arrowRight from '../assets/icons/arrow-right.svg';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const images = [
    '../assets/images/image 14.jpg',
    '../assets/images/image 14.jpg',
    '../assets/images/image 14.jpg',
    '../assets/images/image 14.jpg',
  ];

  return (
    <div>
      <div className='slider'>
        <div className='slides'>
          <div className='slides-content'>
            <div className='slides-content-text'>
              <h2>Heiko Brath Metzgermeister</h2>
              <p>
                Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et.
                Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per
                ne, nam Aperol Spritz probatus pertinax.
              </p>
            </div>
          </div>
          <img src={Image} alt='Image 1' />
          {/* <img src={Image} alt='Image 2' />
          <img src={Image} alt='Image 3' /> */}
        </div>
        <div className='pagination'>
          <img src={arrowLeft} alt='' />
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
          <img src={arrowRight} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Slider;

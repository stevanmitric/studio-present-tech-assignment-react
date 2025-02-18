import React from 'react';
import CoffeeImage from '../assets/icons/grillkurs_icon.svg';
import prevIcon from '../assets/icons/prev-arrow.svg';
import nextIcon from '../assets/icons/next-arrow.svg';
import starsIcon from '../assets/icons/stars.svg';

const TestimonialSlider = () => {
  return (
    <>
      <section className='testimonial-slider'>
        <div className='testimonial-slide active'>
          <div className='testimonial-content'>
            <img src={CoffeeImage} alt='Icon' />
            <div className='stars'>
              <img src={starsIcon} alt='Stars' />
            </div>
            <p>
              Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod
              tempor Stuttgart ut labore et dolore magna.
            </p>
            <h4>Halling Tobias</h4>
            <span>Koch</span>
            <div className='quote'>„</div>
          </div>
        </div>

        <div className='testimonial-slide'>
          <div className='testimonial-content'>
            <p>Sprechen Sie deutsch aliquip ex ea commodo consequat.</p>
            <h4>Maria Karstofen</h4>
          </div>
        </div>

        <div className='testimonial-slide'>
          <div className='testimonial-content'>
            <p>Achtung fur aliam induction campacthauch HugoClub Mate mea.</p>
            <h4>Rene Wernstein</h4>
          </div>
        </div>

        <div className='testimonial-controls'>
          <button className='prev'>
            <img src={prevIcon} alt='Previous' />
          </button>
          <button className='next'>
            <img src={nextIcon} alt='Next' />
          </button>
        </div>
      </section>

      <button className='all-reports'>Alle Berichte</button>
    </>
  );
};

export default TestimonialSlider;

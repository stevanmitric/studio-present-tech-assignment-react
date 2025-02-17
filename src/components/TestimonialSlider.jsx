import React from 'react';
import CoffeeImage from '../assets/icons/grillkurs_icon.svg';
import prevIcon from '../assets/icons/prev-arrow.svg';
import nextIcon from '../assets/icons/next-arrow.svg';
import starsIcon from '../assets/icons/stars.svg';

const TestimonialSlider = () => {
  return (
    <>
      <section class='testimonial-slider'>
        {/* <button class='prev'>
          <img src={prevIcon} alt='Previous' />
        </button> */}
        <div class='testimonial-slide active'>
          <div class='testimonial-content'>
            <img src={CoffeeImage} alt='Icon' />
            <div class='stars'>
              <img src={starsIcon} alt='Stars' />
            </div>
            <p>
              Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod
              tempor Stuttgart ut labore et dolore magna. Luftballons Ut
              Turnbeutel nostrud exercitation ullamco.
            </p>
            <h4>Halling Tobias</h4>
            <span>Koch</span>
            <div class='quote'>„</div>
          </div>
        </div>
        {/* <button class='next'>
          <img src={nextIcon} alt='Next' />
        </button> */}

        <div class='testimonial-slide'>
          <div class='testimonial-content'>
            <p>
              Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener
              Schnitzel aute irure dolor in Guten Tag mollit am Stuttgart.
            </p>
            <h4>Maria Karstofen</h4>
          </div>
        </div>

        <div class='testimonial-slide'>
          <div class='testimonial-content'>
            <p>
              Achtung fur aliam induction campacthauch HugoClub Mate mea meliore
              denique nominavi id. Reise euismod assentior.
            </p>
            <h4>Rene Wernstein</h4>
          </div>
        </div>
      </section>

      <button class='all-reports'>Alle Berichte</button>
    </>
  );
};

export default TestimonialSlider;

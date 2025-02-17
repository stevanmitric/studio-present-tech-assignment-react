import React from 'react';
import AwardImage1 from '../assets/icons/nagrada1.svg';
import AwardImage2 from '../assets/icons/nagrada1.svg';
import AwardImage3 from '../assets/icons/nagrada1.svg';
import AwardImage4 from '../assets/icons/nagrada1.svg';

const Awards = () => {
  return (
    <section class='awards'>
      <div class='awards-container'>
        <h2>Auszeichnungen</h2>
        <div class='award'>
          <img src={AwardImage1} alt='Dry-aged meat left' />
          <p>Tollit argumentum genau Saepe lobortis</p>
        </div>
        <div class='award'>
          <img src={AwardImage2} alt='Dry-aged meat left' />
          <p>Schneewittchen denique</p>
        </div>
        <div class='award'>
          <img src={AwardImage3} alt='Dry-aged meat left' />
          <p>Grimms Märchen expetenda</p>
        </div>
        <div class='award'>
          <img src={AwardImage4} alt='Dry-aged meat left' />
          <p>Mettwurst mei ullum gloriatur.</p>
        </div>
      </div>
    </section>
  );
};

export default Awards;

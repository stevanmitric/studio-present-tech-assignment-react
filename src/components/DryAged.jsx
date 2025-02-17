import React from 'react';
import DryAgedMain from '../assets/images/dry-aged-1.jpg';
import DryAgedLeft from '../assets/images/dry-aged-left.jpg';
import DryAgedMiddle from '../assets/images/dry-aged-middle.jpg';
import DryAgedRight from '../assets/images/dry-aged-right.jpg';

const DryAged = () => {
  return (
    <div className='dry-aged'>
      <div className='dry-aged-text'>
        <h2>Dry Aged</h2>
        <span>Alte Wutz, Dry Aged</span>
        <p>
          Halt amet, consectetur Handtasche elit, sed do eiusmod tempor
          Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim
          veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen
          Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute
          irure dolor in reprehenderit Guten Tag mollit anim Stuttgart. id
          latine indoctum complectitur HugoClub Mate mea meliore denique
          nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior.
        </p>
        <div className='dry-aged-button-group'>
          <button>Dry aged</button>
          <button>Alte Wurtz</button>
        </div>
      </div>
      <div className='image-1'>
        <img src={DryAgedMain} alt='Image 1' className='main-image' />
        <div className='image-group'>
          <img src={DryAgedLeft} alt='Dry-aged meat left' />
          <img src={DryAgedMiddle} alt='Dry-aged meat middle' />
          <img src={DryAgedRight} alt='Dry-aged meat right' />
        </div>
      </div>
    </div>
  );
};

export default DryAged;

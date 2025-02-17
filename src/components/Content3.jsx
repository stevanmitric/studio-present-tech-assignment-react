import React from 'react';
import DryAged from '../assets/images/dry-aged.png';

const Content3 = () => {
  return (
    <section class='content-3'>
      <div class='content-3-container'>
        <h2>Fleischversand</h2>
        <button class='content-3-button'>Jetzt bestellen</button>
      </div>
      <img src={DryAged} alt='' />
    </section>
  );
};

export default Content3;

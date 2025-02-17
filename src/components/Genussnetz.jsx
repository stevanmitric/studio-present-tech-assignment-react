import React from 'react';
import GenussnetzLogo from '../assets/images/genussnetz logo 1.png';

const Genussnetz = () => {
  return (
    <section class='genussnetz'>
      <div class='genussnetz-logo'>
        <img src={GenussnetzLogo} alt='Genussnetz Logo' />
      </div>
      <div class='genussnetz-text-content'>
        <h2>Metzgerei Brath ist Mitglied im Genussnetzwerk</h2>
        <button>Gehen zu site</button>
      </div>
    </section>
  );
};

export default Genussnetz;

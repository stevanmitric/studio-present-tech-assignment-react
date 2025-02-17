import React from 'react';
import Victoria from '../assets/images/victoria-shes.jpg';
const Content2 = () => {
  return (
    <section className='content-2'>
      <div className='content-left'>
        <div className='text-2'>
          <h2>Buchen Sie den Grillkurs jetzt</h2>
          <p>
            <span className='bullet-span'>professioneller Lehrer</span>
            <span className='bullet-span'>ausgezeichneter Metzger</span>
            <span className='bullet-span'>1 Tag</span>
            <span className='bullet-span'>
              lernen Sie die Kunst des Grillens
            </span>
          </p>

          <button className='section-2-button'>Grillkurs</button>
        </div>
      </div>
      <div className='image-2'>
        <img src={Victoria} alt='Dry-aged meat left' />
      </div>
    </section>
  );
};

export default Content2;

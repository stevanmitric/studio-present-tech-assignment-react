import React from 'react';
import Logo from '../assets/icons/divider-logo.svg';
const Divider = () => {
  return (
    <section className='divider'>
      <div className='line'></div>
      <img src={Logo} alt='Icon' className='divider-icon' />
      <div className='line'></div>
    </section>
  );
};

export default Divider;

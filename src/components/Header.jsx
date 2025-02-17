import React, { useState } from 'react';
import Logo from '../assets/icons/logo.svg';
import Clock from '../assets/icons/clock.svg';
import pdfLogo from '../assets/icons/pdf.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className='header-top'>
        <div className='header-content'>
          <a href='#'>
            <img src={Logo} alt='Logo' className='logo' />
          </a>
          <a href='#' className='download-mobile'>
            <img src={pdfLogo} alt='Download' />
            download
          </a>
          {/* Hamburger Button */}
          <button className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>

          {/* Navigation Menu */}
          <nav className={menuOpen ? 'nav-menu open' : 'nav-menu'}>
            <a href='#'>Die Metzgerei</a>
            <a href='#'>Dry Aged</a>
            <a href='#'>Fleischversand</a>
            <a href='#'>Events/Kurse</a>
            <a href='#'>Partyservice</a>
            <a href='#'>Tagesessen</a>
            <a href='#'>Impressum</a>
            <a href='#'>Kontakt</a>
            <a href='#' className='download-desktop'>
              <img src={pdfLogo} alt='Download' />
              download
            </a>
          </nav>
        </div>
      </div>

      <div className='header-bottom'>
        <div className='header-content'>
          <img src={Clock} alt='Clock' />
          <p>
            Opentime: Di. - Fr.: 07:00-13:00 und 15:00-18:30. Sa.: 07:30 - 12:30
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;

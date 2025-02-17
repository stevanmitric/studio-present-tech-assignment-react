import React from 'react';
import Logo from '../assets/icons/logo.svg';
import twitterLogo from '../assets/icons/twitter.svg';
import instagramLogo from '../assets/icons/instagram.svg';
import facebookLogo from '../assets/icons/facebook.svg';
import youtubeLogo from '../assets/icons/youtube.svg';

const Footer = () => {
  return (
    <footer>
      <div class='footer-top'>
        <div class='footer-content'>
          <div class='footer-info'>
            <p>
              {/* <svg>...</svg> */}
              Klauprechtstraße 25, 7ruhe, Germany
            </p>
            <p>
              {/* <svg>...</svg> */}
              +49 721 358060
            </p>
            <p>
              {/* <svg>...</svg> */}
              info@partyservice-brath.de
            </p>
          </div>
          <img src={Logo} alt='Footer Logo' class='footer-logo' />
          <nav class='social-networks' aria-label='Social Media'>
            <p>Besuchen Sie uns auf:</p>
            <div>
              <a href='#' aria-label='Twitter'>
                <img src={twitterLogo} alt='Twitter' />
              </a>
              <a href='#' aria-label='Facebook'>
                <img src={facebookLogo} alt='Facebook' />
              </a>
              <a href='#' aria-label='Instagram'>
                <img src={instagramLogo} alt='Instagram' />
              </a>
              <a href='#' aria-label='YouTube'>
                <img src={youtubeLogo} alt='YouTube' />
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div class='footer-bottom'>
        <div class='footer-content'>
          <p>© 2020 by Metzgerei Heiko Brath GmbH, Deutschland</p>
          <p>
            Code and design by <span>StudioPresent</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

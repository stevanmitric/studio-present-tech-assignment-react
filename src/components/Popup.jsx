import { useState, useEffect } from 'react';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  console.log('testtttt');

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true);
        setTimeout(() => {
          setShowPopup(true);
          document.body.style.overflow = 'hidden'; // Disable scrolling
        }, 2000); // Show popup 3 seconds after scrolling starts
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  const closePopup = () => {
    setShowPopup(false);
    document.body.style.overflow = 'auto'; // Enable scrolling
  };

  return (
    showPopup && (
      <div className='popup-overlay'>
        <div className='popup'>
          <button className='popup-close' onClick={closePopup}>
            &times;
          </button>
          <h2>Subscribe to Our Newsletter</h2>
          <p>Stay updated with our latest news and offers.</p>
          <input type='email' placeholder='Enter your email' />
          <button className='subscribe-btn'>Subscribe</button>
        </div>
      </div>
    )
  );
};

export default Popup;

import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';

import LandingPageFooter from '../LandingPageFooter';
import LandingPageCarousel from '../LandingPageCarousel';
import LandingPageAbout from '../LandingPageAbout';

import styles from './LandingPage.module.scss';

import { useConfigStore } from '#src/stores/ConfigStore';
const LandingPageComponent: React.FC = () => {
  const { config } = useConfigStore(({ config }) => ({ config }));
  const { siteName } = config;
  const [isOpen, setIsOpen] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  timeoutRef.current = window.setTimeout(() => {
    setIsOpen(false);
  }, 10000);
  const closePopup = () => {
    setIsOpen(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLDivElement && event.target.id === 'popup-container') {
      closePopup();
    }
  };
  return (
    <div className={styles.LandingPage}>
      <Helmet>
        <title>{siteName}</title>
        <meta property="og:title" content={siteName} />
        <meta name="twitter:title" content={siteName} />
      </Helmet>
      {isOpen && (
        <div id="popup-container" className={styles.popupContainer} onClick={handleOutsideClick}>
          <div className={styles.popupContent} id="popup-content">
            <button onClick={closePopup}>Close</button>
            <p>
              Due to scheduled video provider maintenance our Sunday evening games will not air at the following websites instead of gameinframe.com: Brooklyn
              City FC vs Dutch Lions: Eleven, NY Braveheart vs NJ Alliance: Youtube. Head to our{' '}
              <a href="https://www.instagram.com/gameinframe/">Instagram@gameinframe </a>
              to get direct game links.
            </p>
          </div>
        </div>
      )}
      <LandingPageCarousel />
      <LandingPageAbout />
      <LandingPageFooter />
    </div>
  );
};
export default LandingPageComponent;

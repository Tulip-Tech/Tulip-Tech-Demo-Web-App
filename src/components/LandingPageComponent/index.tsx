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
  // const [isOpen, setIsOpen] = useState(true);
  // const timeoutRef = useRef<number | null>(null);

  // const closePopup = () => {
  //   setIsOpen(false);
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }
  // };

  // const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
  //   if (event.target instanceof HTMLDivElement && event.target.id === 'popup-container') {
  //     closePopup();
  //   }
  // };
  return (
    <div className={styles.LandingPage}>
      <Helmet>
        <title>{siteName}</title>
        <meta property="og:title" content={siteName} />
        <meta name="twitter:title" content={siteName} />
      </Helmet>
      {/* {isOpen && (
        <div id="popup-container" className={styles.popupContainer} onClick={handleOutsideClick}>
          <div className={styles.popupContent} id="popup-content">
            <button className={styles.close} onClick={closePopup}>
              Close X
            </button>
            <p>
              Due to scheduled maintenance for gameinframe.com's video provider our Sunday evening games will not air on gameinframe.com, instead they will air
              on the following destinations: Brooklyn City FC vs Dutch Lions: Eleven, NY Braveheart vs NJ Alliance: Youtube. Head to our Instagram{' '}
              <a href="https://www.instagram.com/gameinframe/">@gameinframe</a> to get direct game links."
            </p>
          </div>
        </div>
      )} */}
      <LandingPageCarousel />
      <LandingPageAbout />
      <LandingPageFooter />
    </div>
  );
};
export default LandingPageComponent;

import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Link from '../Link/Link';

import styles from './LandingPageHeader.module.scss';

const LandingPageHeader: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img alt="logo" src="/images/landingPageHeaderLogo.png" className={styles.gameInFrameLogo}></img>
        </Link>
      </div>
        <div className={styles.headerButtonsSection}>
            <Link to="/book-livestream" className={styles.link}>
                BOOK LIVESTREAM
            </Link>
            <a className={styles.link} href="https://gameinframe.mfs.gg/QwEb7Oh" >
                BOOK PLAYER HIGHLIGHTS
            </a>
            <a className={styles.link} href="https://shop.gameinframe.com/">
                SHOP
            </a>
        </div>
        {/* <div>
      <button className={styles.loginbtn}>Log In</button>
    </div> */}
    </div>
  );
};
export default LandingPageHeader;

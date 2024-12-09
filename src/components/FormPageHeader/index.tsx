import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Link from '../Link/Link';

import styles from './FormHeader.module.scss';

import useBreakpoint, { Breakpoint } from '#src/hooks/useBreakpoint';

const FormPageHeader: React.FC = () => {
  const breakpoint = useBreakpoint();

  const isDesktop = breakpoint > Breakpoint.md;
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
        <Link to="/book-player-highlights" className={styles.link}>
          BOOK PLAYER HIGHLIGHTS
        </Link>

        {/* <a className={styles.link} href="https://shop.gameinframe.com/">
          SHOP
        </a> */}
        {isDesktop && (
          <div style={{ position: 'relative' }}>
            <a
              href="https://saltathletic.com/"
              target="_blank"
              rel="noreferrer"
              style={{
                marginBottom: '-35px',
                paddingLeft: '35px',
                position: 'absolute',
                right: '-240px',
                top: '0',
              }}
            >
              <img className={styles.logo} width={100} height={100} alt="logo" src={'/images/Salt_Logo-18.png'} style={{ marginTop: '-15px' }} />
            </a>
          </div>
        )}
      </div>
      {/* <div>
      <button className={styles.loginbtn}>Log In</button>
    </div> */}
    </div>
  );
};
export default FormPageHeader;

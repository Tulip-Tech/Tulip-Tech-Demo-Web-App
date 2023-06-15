import React from 'react';

import Link from '../Link/Link';

import styles from './LandingPageFooter.module.scss';

const LandingPageFooter: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerBody}>
        <div className={styles.policyAndShop}>
          <div>ABOUT</div>
          <a className={styles.link} href="https://shop.gameinframe.com/">
            SHOP
          </a>
          <a className={styles.link} href="https://player.gameinframe.com/privacy-policy">
            PRIVACY POLICY
          </a>
          <a className={styles.link} href="https://player.gameinframe.com/terms">
            TERMS OF USE
          </a>
        </div>
        <div className={styles.footerDetails}>
          <img src="/favicon.ico" width={150}></img>
          <div>
            Your go-to online platform for top-notch Northeast American grassroots soccer. Catch every game and every goal as it happens, right from the comfort
            of your own device.
          </div>
        </div>

        <div className={styles.followUs}>
          Follow Us
          <div className={styles.socials}>
            <a href="https://www.facebook.com/watch/gameinframe/" target="_blank" rel="noopener noreferrer">
              <img src="/images/facebook.png" height={50}></img>
            </a>
            <a href="https://www.instagram.com/gameinframe/" target="_blank" rel="noopener noreferrer">
              {' '}
              <img src="/images/instagram.png" height={50}></img>
            </a>

            <a href="https://www.youtube.com/channel/UCPWjUHzx2BL28wdUVWpUt4w" target="_blank" rel="noopener noreferrer">
              {' '}
              <img src="/images/youtube.png" height={50}></img>
            </a>
          </div>
        </div>
      </div>
      <div>@2023 All rights reserved</div>
    </div>
  );
};
export default LandingPageFooter;

import React from 'react';
import { Helmet } from 'react-helmet';

import LandingPageFooter from '../LandingPageFooter';
import LandingPageCarousel from '../LandingPageCarousel';
import LandingPageAbout from '../LandingPageAbout';

import styles from './LandingPage.module.scss';

import { useConfigStore } from '#src/stores/ConfigStore';
const LandingPageComponent: React.FC = () => {
  const { config } = useConfigStore(({ config }) => ({ config }));
  const { siteName } = config;
  return (
    <div className={styles.LandingPage}>
      <Helmet>
        <title>{siteName}</title>
        <meta property="og:title" content={siteName} />
        <meta name="twitter:title" content={siteName} />
      </Helmet>
      <LandingPageCarousel />
      <LandingPageAbout />
      <LandingPageFooter />
    </div>
  );
};
export default LandingPageComponent;

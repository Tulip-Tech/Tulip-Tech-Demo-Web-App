import React, { useRef } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useInView } from 'framer-motion';

import Button from '../Button/Button';
import LandingPageHeader from '../LandingPageHeader';

import styles from './LandingPageCarousel.module.scss';

const LandingPageCarousel: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div>
      <LandingPageHeader />
      <div className={styles.featuredBg}>
        <section className={styles.carouselItemDescription} ref={ref}>
          <span
            style={{
              transform: isInView ? 'none' : 'translatey(200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
          >
            <div className={styles.carouselItemHeading}>The Home Of Grassroots Soccer</div>
          </span>
          <span
            style={{
              transform: isInView ? 'none' : 'translatey(200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
          >
            <div className={styles.carouselItemDetails}>
              Livestreams, player highlight reels, podcasts and more. You bring the Game, we’ll put it In Frame.{' '}
              <a href="https://player.gameinframe.com" className={styles.watchNowButton}>
                Watch Now
              </a>
            </div>
          </span>
        </section>
      </div>
    </div>
  );
};
export default LandingPageCarousel;

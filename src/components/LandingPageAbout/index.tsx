import React, { useRef } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useInView } from 'framer-motion';

import Button from '../Button/Button';

import styles from './LandingPageAbout.module.scss';

const LandingPageAbout: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div>
      <div className={styles.about}>
        <div>
          <img src="./images/About.png" className={styles.aboutUsImage}></img>
        </div>
        <section className={styles.aboutUsDetails} ref={ref}>
          <span
            style={{
              transform: isInView ? 'none' : 'translatey(400px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
          >
            <div className={styles.heading}>About us</div>
            <div>
              <div className={styles.aboutUsHeading}>Get Your Northeast American Soccer Fix with Game in Frame</div>
            </div>
            <div>Discover why Game in Frame is the ultimate destination for grassroots soccer fans:</div>
            <ul className={styles.listItems}>
              <li>Experience Premier League-style livestreams on Game in Frame. </li>
              <li>Relive special moments years later with our permanent livestreams. </li>
              <li>Compete for the coveted Goal of the Month and Save of the Month awards. </li>
              <li>Elevate your team’s exposure with our exclusive talk shows and podcasts. </li>
            </ul>
            <a href="https://player.gameinframe.com/p/l94jFS5v" className={styles.watchNowButton}>
              WATCH NOW
            </a>
          </span>
        </section>
      </div>
      <div>
        <div className={styles.videoContainer}>
          {/* <Carousel showArrows={true} className={styles.carousel} showThumbs={false} showStatus={false} infiniteLoop={true}>
            <div>
              <img src="images/header.png" />
            </div>
            <div>
              <img src="images/header.png" />
            </div>
            <div>
              <img src="images/header.png" />
            </div>
            <div>
              <img src="images/header.png" />
            </div>
            <div>
              <img src="images/header.png" />
            </div>
          </Carousel> */}
          <div className={styles.videoPlayer}>
            <iframe
              src="https://content.gameinframe.com/players/gGRIm8JO-e60R1ukp.html"
              width="100%"
              height="100%"
              title="Monthly Review Show"
              className={styles.videoIframe}
            ></iframe>
          </div>
        </div>
      </div>
      {/* <div className={styles.highlights}>
        <div>
          <div className={styles.heading}>OUR HIGHLIGHTS FEATURES</div>
          <div className={styles.highlightsdetails}>
            <img src="images/playerprofile.png" height={30}></img>
            <div>
              <div className={styles.highlightsheading}>Player Profiles</div>
              <div className={styles.highlightstext}>
                A section dedicated to profiles of football players, including biographical information, stats, and highlights.
              </div>
            </div>
          </div>
          <div className={styles.highlightsdetails}>
            <img src="images/video.png" height={30}></img>
            <div>
              <div className={styles.highlightsheading}>Video Highlights</div>
              <div className={styles.highlightstext}>
                A library of video highlights from recent games and seasons, allowing fans to relive the most exciting moments in football.
              </div>
            </div>
          </div>
          <div className={styles.highlightsdetails}>
            <img src="images/football.png" height={30}></img>
            <div>
              <div className={styles.highlightsheading}>Fantasy Football</div>
              <div className={styles.highlightstext}>
                A feature that allows fans to create their own fantasy football teams and compete against other fans for prizes and bragging rights.
              </div>
            </div>
          </div>
          <div className={styles.highlightsdetails}>
            <img src="images/merchandise.png" height={30}></img>
            <div>
              <div className={styles.highlightsheading}>Merchandise Store</div>
              <div className={styles.highlightstext}>
                A section of the website where fans can purchase official football team merchandise, such as jerseys, hats, and other apparel.
              </div>
            </div>
          </div>
          <div className={styles.highlightsdetails}>
            <img src="images/podcasts.png" height={30}></img>
            <div>
              <div className={styles.highlightsheading}>Podcasts and Webinars</div>
              <div className={styles.highlightstext}>
                A feature that allows fans to listen to podcasts or attend webinars hosted by football experts and analysts, providing in-depth analysis of the
                latest news and trends in football.
              </div>
            </div>
          </div>
        </div>

        <img src="images/player.png" width={'100%'}></img>
      </div> */}
    </div>
  );
};
export default LandingPageAbout;

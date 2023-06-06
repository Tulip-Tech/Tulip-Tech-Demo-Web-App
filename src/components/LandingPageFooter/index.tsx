import React from 'react';

import Link from '../Link/Link';

import styles from './LandingPageFooter.module.scss';

const LandingPageFooter: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerBody}>
        <div className={styles.footerDetails}>
          <img src="/favicon.ico" width={150}></img>
          <div>
            Your go-to online platform for top-notch Northeast American grassroots soccer. Catch every game and every goal as it happens, right from the comfort
            of your own device.
          </div>
        </div>
        <div className={styles.policyAndShop}>
          <div>ABOUT</div>
          <a className={styles.link} href="https://shop.gameinframe.com/">
            SHOP
          </a>

          <Link to="/privacy-policy" className={styles.Footerlink}>
            PRIVACY POLICY
          </Link>
          <Link to="/terms">TERMS OF USE</Link>
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
    // <div className={styles.body1}>
    //   <div className={styles.footer}>
    //     <div className={styles.footercontent}>
    //       <div className={styles.getintouch}>Get in touch</div>
    //       <div className={styles.footerform}>
    //         <div className={styles.formFormat}>
    //           <input placeholder="Enter Your Name" className={styles.input}></input>
    //           <input placeholder="Enter Your Email" className={styles.input}></input>
    //           <input placeholder="Subject(Optional)" className={styles.input}></input>
    //         </div>
    //         <div className={styles.formFormat}>
    //           <input placeholder="Here Goes Your Message" className={styles.input}></input>
    //         </div>
    //         <button className={styles.sendbtn}>send message</button>
    //       </div>
    //       <div className={styles.wordpress}>
    //         <div className={styles.info}>
    //           <div className={styles.mobilewordpress}>Information</div>

    //           <div className={styles.infodiv}>
    //             <div className={styles.infoelement}>
    //               <img src="images\address.png" height={30} width={35}></img>7030 Fifth LaneCorpus Christi, TX 78412, United Kingdom.
    //             </div>
    //             <div className={styles.infoelement}>
    //               <img src="images\mail.png"></img>info@fieldffolloe.com
    //             </div>
    //           </div>
    //         </div>
    //         <div className={styles.LinkDiv}>
    //           <div>
    //             <div>Links</div>
    //             <div className={styles.LinkDiv}>
    //               <Link to="/Home" className={styles.FooterLinks}>
    //                 Home
    //               </Link>
    //               <Link to="/Abouts" className={styles.FooterLinks}>
    //                 About us
    //               </Link>
    //               <Link to="/" className={styles.FooterLinks}>
    //                 Services
    //               </Link>

    //               <Link to="/blog" className={styles.FooterLinks}>
    //                 Blog
    //               </Link>
    //               <Link to="/features" className={styles.FooterLinks}>
    //                 Features
    //               </Link>
    //             </div>
    //           </div>
    //         </div>
    //         <div className={styles.LinkDiv}>
    //           <div>
    //             <div> Legal</div>

    //             <div className={styles.LinkDiv}>
    //               <Link to="/privacy-policy" className={styles.FooterLinks}>
    //                 Privacy Policy
    //               </Link>
    //               <Link to="/terms" className={styles.FooterLinks}>
    //                 Terms & Condition
    //               </Link>
    //               <Link to="/faqs" className={styles.FooterLinks}>
    //                 FAQs
    //               </Link>
    //             </div>
    //           </div>
    //         </div>
    //         <div className={styles.LinkDiv}>
    //           <div>Ad Section</div>
    //           <div>
    //             <div className={styles.ads}>
    //               <img src="\images\ads.png"></img>
    //               <div className={styles.adsprofile}>
    //                 <div>Player Profiles</div>
    //                 <div className={styles.adstext}>
    //                   A section dedicated to profiles of football players, including biographical information, stats, and highlights.
    //                 </div>
    //               </div>
    //             </div>
    //             <div className={styles.ads}>
    //               <img src="images\ads.png"></img>
    //               <div className={styles.adsprofile}>
    //                 <div>Player Profiles</div>
    //                 <div>
    //                   <div className={styles.adstext}>
    //                     A section dedicated to profiles of football players, including biographical information, stats, and highlights.
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className={styles.ads}>
    //               <img src="\images\ads.png"></img>
    //               <div className={styles.adsprofile}>
    //                 <div>Player Profiles</div>
    //                 <div>
    //                   <div className={styles.adstext}>
    //                     A section dedicated to profiles of football players, including biographical information, stats, and highlights.
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={styles.rights}>
    //       <div>
    //         <h2>
    //           <i>FIELD FOLLOW</i>
    //         </h2>
    //         <div>@2016 AI.</div>
    //         <div>All Right Reserved</div>
    //       </div>
    //       <div className={styles.socialsdiv}>
    //         <div className={styles.socials}>
    //           <img src="\images\facebook.png" width={32}></img>
    //           <h3>
    //             Facebook <div className={styles.count}>12546</div>
    //           </h3>
    //         </div>
    //         <div className={styles.socials}>
    //           <img src="\images\instagram.png"></img>
    //           <h3>
    //             Instagram
    //             <div className={styles.count}>12546</div>
    //           </h3>
    //         </div>
    //         <div className={styles.socials}>
    //           <img src="\images\twitter.png"></img>
    //           <h3>
    //             Twitter <div className={styles.count}>12546</div>
    //           </h3>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
export default LandingPageFooter;

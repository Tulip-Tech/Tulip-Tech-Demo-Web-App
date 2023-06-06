import React from 'react';

import styles from './Privacy.module.scss';

const PrivacyText: React.FC = () => {
  return (
    <div className={styles.privacy}>
      <h2>GAME IN FRAME</h2>
      <h2>PRIVACY POLICY</h2>
      <div>
        Thank you for visiting{' '}
        <a className={styles.privacyLink} href="http://gameinframe.com/" target="_blank" rel="noreferrer">
          GameinFrame.com
        </a>{' '}
        (the “Site”). GameinFrame.com is a software platform operated by KBO Visions L.L.C. dba Game in Frame (“Game in Frame”, “we”, “our”, or “us”). We ask
        that you carefully review our privacy policy, which is designed to inform our users about the information we collect, and how and why we use that
        information. We collect and use information through our Site in the ways disclosed in this statement, which applies solely to information collected at
        GameinFrame.com. We encourage you to review this policy from time to time, as it may change as we expand and update the services and features we offer.
        Your use of GameinFrame.com at any time shall constitute your agreement to the then-current version of this policy posted at that time.
      </div>
      <h2>Collection and Use of Personal Information</h2>
      We do not collect or use personal information at this time. Should that change we will update our Privacy Policy. We encourage you to check the Site
      periodically for such changes.
      <h2>Collection of Non-Personal Information</h2>
      <h3>Cookies</h3>
      As with many websites, the Site may use standard technology called “cookies,” which are small data files that are transferred to your computer when you
      allow your browser to accept cookies. Cookies automatically identify your Web browser to the Site whenever you visit the Site, and make using the Site
      easier for you by saving your purchases and preferences. By tracking how and when you use the Site, cookies help us determine which areas are popular and
      which are not. Many improvements and updates to the Site are based on data obtained from cookies. Accepting cookies allows you, among other things, to
      personalize your experience on the Site. If you do not want information collected through the use of cookies, you generally can opt out of providing this
      information by turning the cookies off in your browser; however, some areas of the Site may not provide you with a personalized experience if you have
      disabled the use of cookies.
      <h2>IP Addresses, Click-stream Data, and Web Beacons </h2>
      We may log IP addresses, or the location of your computer on the Internet, for systems administration and troubleshooting purposes. We may collect IP
      addresses and/or click-stream data for purposes of system administration and to report aggregate information to our sponsors. An IP address is a number
      that is automatically assigned to your computer whenever you access the Internet. Our computers identify your computer by its IP address. When you request
      Web pages from the Site, our computers log your IP address. Click-stream data is information collected by our computers when you request Web pages from
      the Site. Click-stream data may include such information as the page served, the time, the source of the request, the type of browser making the request,
      the preceding page view and other such non-personal information. When analyzed, this data helps us analyze how visitors arrive at the Site, what type of
      content is most popular, and what type of visitors in the aggregate are interested in particular kinds of content and advertising. The Site may contain
      electronic images known as Web beacons (sometimes called single-pixel gifs) that allow us to count users who have visited those pages. Web beacons are not
      used to access your personally identifiable information at Game in Frame; they are a technique used to compile aggregated statistics about our Site usage.
      Web beacons collect only a limited set of information including a cookie number, time and date of a page view, and a description of the page on which the
      Web beacon resides.
      <h3>Transaction Information</h3>
      If you purchase any of our products offered on our Site, we will ask you to complete an order form that will request certain information from you,
      including financial information such as a credit card number and expiration date and general contact, billing and shipping information. We will use this
      information to complete the transaction that you have requested.
      <h2>Links To Other Websites</h2>
      You should be aware that when you are on the Site you could be directed to other sites beyond our control. For example, if you &quot;click&quot; on a
      link, the &quot;click&quot; may take you off the Site onto a different website. This includes links from sponsors and partners that may use the
      Site&apos;s logo as part of a co-branding agreement. These other websites may send their own cookies to you, independently collect data or solicit
      personal information and may or may not have their own published privacy policies. If you visit a website that is linked to our Site, you should consult
      that site&apos;s privacy policy before providing any personal information. <h2>Children`&ldquo;`s Privacy Policy </h2>
      Game in Frame is a general audience site. Although all ages of visitors may visit and navigate our site, we do not currently collect any personal
      information from children. If in the future, the Site collects personally identifiable information from children, it will do so in compliance with the
      children&apos;s Online Privacy Protection Act of 1998 (15 U.S.C. 6501 et seq.). <h2>Notification Of Changes And Acceptance Of The Privacy Policy</h2> By
      using this Site, you signify your agreement to the terms of this privacy policy. Changes and updates to this privacy policy will be made from time-to-time
      and you should check the Site for such changes. Your continued use of the Site shall constitute your acceptance of such revised privacy policy.{' '}
      <h2>Contact Us</h2>
      If you have any questions or suggestions about our Privacy Policy, please contact us at{' '}
      <a className={styles.privacyLink} href="kbovisions@gmail.com.">
        kbovisions@gmail.com.
      </a>{' '}
    </div>
  );
};
export default PrivacyText;

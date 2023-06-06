import React from 'react';

import FormPageHeader from '../FormPageHeader';

import styles from './ThankYouComponent.module.scss';

const ThankYouComponent: React.FC = () => {
  return (
    <div>
      <FormPageHeader />
      <div className={styles.thankYouPage}>
        <h1>Thank you!</h1>
        <p>Your form has been submitted successfully.</p>
      </div>
    </div>
  );
};

export default ThankYouComponent;

import classNames from 'classnames';
import React from 'react';

import styles from './Spinner.module.scss';

type Props = {
  size?: 'small' | 'medium';
  className?: string;
};

const Spinner = ({ size = 'medium', className = '' }: Props): JSX.Element => {
  return (
    <div className={classNames(styles.buffer, className, { [styles.small]: size === 'small' })}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default Spinner;

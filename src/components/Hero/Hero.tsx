import React from 'react';

import styles from './Hero.module.scss';

import Image from '#components/Image/Image';
import type { ImageData } from '#types/playlist';

type Props = {
  title: string;
  description: string;
  image?: ImageData;
};

const Hero = ({ title, description, image }: Props) => {
  return (
    <div className={styles.hero}>
      <Image className={styles.image} image={image} width={1280} alt="" />
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Hero;

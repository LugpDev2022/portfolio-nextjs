import Image from 'next/image';

import skillsetStyles from './skillset.module.css';

import { bannerLogos } from './logos';

const Banner = () => (
  <div className={skillsetStyles.marquee}>
    <div className={skillsetStyles.marqueeContent}>
      {bannerLogos.map(({ src, alt }) => (
        <Image src={src} alt={alt} key={alt} className={skillsetStyles.image} />
      ))}
    </div>
  </div>
);

export default Banner;

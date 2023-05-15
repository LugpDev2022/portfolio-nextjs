import Image from 'next/image';
import Subtitle from '../Subtitle';
import Banner from './Banner';

import { languageLogos } from './logos';

import skillsetStyles from './skillset.module.css';

import javascriptLogo from '../../images/logos/js.png';

const SkillsetSection = () => (
  <>
    <section className='flex flex-col items-center gap-16 overflow-hidden bg-[#0F2434] pb-12 pt-10'>
      <Subtitle>Programming/Markup Languages</Subtitle>
      <div className='relative'>
        <div className={skillsetStyles.logosContainer}>
          {languageLogos.map(({ alt, className, src }) => (
            <Image
              key={alt}
              src={src}
              alt={alt}
              className={`${className} ${skillsetStyles.logo}`}
            />
          ))}
        </div>
        <Image
          src={javascriptLogo}
          alt='javascript'
          className={skillsetStyles.jsLogo}
        />
      </div>
    </section>
    <section className='overflow-hidden bg-[#255880] py-10'>
      <Subtitle>Frameworks/Libraries</Subtitle>
      <Banner />
    </section>
  </>
);

export default SkillsetSection;

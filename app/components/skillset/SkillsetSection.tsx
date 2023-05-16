import Image from 'next/image';
import Subtitle from '../Subtitle';

import { bannerLogos, languageLogos } from './logos';

import skillsetStyles from './skillset.module.css';

import javascriptLogo from '../../images/logos/js.png';
import SectionContainer from '../SectionContainer';

const SkillsetSection = () => (
  <>
    <SectionContainer
      section='programmingLanguages'
      disableDefaultStyles
      className='flex flex-col items-center gap-16 overflow-hidden bg-[#0F2434] pb-12 pt-10'
    >
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
    </SectionContainer>
    <SectionContainer
      section='frameworks'
      className='overflow-hidden bg-[#255880]'
    >
      <Subtitle>Frameworks/Libraries</Subtitle>
      {
        <div className='mt-7 flex flex-wrap justify-evenly gap-6 sm:justify-between'>
          {bannerLogos.map(({ src, alt }) => (
            <div
              key={alt}
              className='flex basis-1/6 items-center sm:basis-[60px] md:basis-[70px]'
            >
              <Image src={src} alt={alt} />
            </div>
          ))}
        </div>
      }
    </SectionContainer>
    <SectionContainer section='tools' className='bg-[#0F2434]'>
      <Subtitle>Other Tools</Subtitle>
    </SectionContainer>
  </>
);

export default SkillsetSection;

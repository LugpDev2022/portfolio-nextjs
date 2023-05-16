import Image from 'next/image';
import Subtitle from '../Subtitle';

import { languageLogos } from './logos';

import skillsetStyles from './skillset.module.css';

import javascriptLogo from '../../images/logos/js.png';
import SectionContainer from '../SectionContainer';
import ShowLogos from './ShowLogos';

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
      <ShowLogos />
    </SectionContainer>
    <SectionContainer section='tools' className='bg-[#0F2434]'>
      <Subtitle>Other Tools</Subtitle>
    </SectionContainer>
  </>
);

export default SkillsetSection;

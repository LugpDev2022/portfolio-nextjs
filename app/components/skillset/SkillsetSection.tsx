import Image from 'next/image';
import SectionContainer from '../SectionContainer';
import Subtitle from '../Subtitle';

import markdownLogo from '../../images/logos/md.png';
import htmlLogo from '../../images/logos/html.png';
import cssLogo from '../../images/logos/css.png';
import typescriptLogo from '../../images/logos/ts.png';
import sassLogo from '../../images/logos/sass.png';
import javascriptLogo from '../../images/logos/js.png';

import skillsetStyles from './skillset.module.css';

const SkillsetSection = () => {
  return (
    <div className='flex flex-col items-center gap-20 overflow-hidden bg-[#0F2434] py-10'>
      <Subtitle>Programming/Markup Languages</Subtitle>
      <div className='relative'>
        <div className={skillsetStyles.logosContainer}>
          <Image
            src={markdownLogo}
            alt='markdown'
            className={skillsetStyles.markdownLogo}
          />
          <Image
            src={htmlLogo}
            alt='html'
            className={skillsetStyles.htmlLogo}
          />
          <Image
            src={typescriptLogo}
            alt='typescript'
            className={skillsetStyles.typescriptLogo}
          />
          <Image
            src={sassLogo}
            alt='sass'
            className={skillsetStyles.sassLogo}
          />
          <Image src={cssLogo} alt='css' className={skillsetStyles.cssLogo} />
        </div>
        <Image
          src={javascriptLogo}
          alt='javascript'
          className={skillsetStyles.jsLogo}
        />
      </div>
    </div>
  );
};

export default SkillsetSection;

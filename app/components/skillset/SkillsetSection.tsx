import Image from 'next/image';
import Subtitle from '../Subtitle';

import skillsetStyles from './skillset.module.css';

import cssLogo from '../../images/logos/css.png';
import htmlLogo from '../../images/logos/html.png';
import javascriptLogo from '../../images/logos/js.png';
import markdownLogo from '../../images/logos/md.png';
import sassLogo from '../../images/logos/sass.png';
import typescriptLogo from '../../images/logos/ts.png';

const SkillsetSection = () => (
  <div className='flex flex-col items-center gap-20 overflow-hidden bg-[#0F2434] py-10'>
    <Subtitle>Programming/Markup Languages</Subtitle>
    <div className='relative'>
      <div className={skillsetStyles.logosContainer}>
        <Image
          src={markdownLogo}
          alt='markdown'
          className={`${skillsetStyles.markdownLogo} ${skillsetStyles.logo}`}
        />
        <Image
          src={htmlLogo}
          alt='html'
          className={`${skillsetStyles.htmlLogo} ${skillsetStyles.logo}`}
        />
        <Image
          src={typescriptLogo}
          alt='typescript'
          className={`${skillsetStyles.typescriptLogo} ${skillsetStyles.logo}`}
        />
        <Image
          src={sassLogo}
          alt='sass'
          className={`${skillsetStyles.sassLogo} ${skillsetStyles.logo}`}
        />
        <Image
          src={cssLogo}
          alt='css'
          className={`${skillsetStyles.cssLogo} ${skillsetStyles.logo}`}
        />
      </div>
      <Image
        src={javascriptLogo}
        alt='javascript'
        className={skillsetStyles.jsLogo}
      />
    </div>
  </div>
);

export default SkillsetSection;

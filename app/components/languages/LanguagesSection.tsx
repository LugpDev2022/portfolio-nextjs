import LanguageBar from './LanguageBar';
import Subtitle from '@/app/components/Subtitle';
import SectionContainer from '../SectionContainer';
import { languagesArray } from './languagesArray';

const LanguagesSection = () => (
  <SectionContainer className='bg-[#0F2434]' section='languages'>
    <Subtitle>Languages</Subtitle>
    <div className='mx-auto mt-6 max-w-xl'>
      {languagesArray.map(({ language, percentage }) => (
        <LanguageBar
          key={language}
          language={language}
          percentage={percentage}
        />
      ))}
    </div>
  </SectionContainer>
);

export default LanguagesSection;

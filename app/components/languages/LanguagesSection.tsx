import LanguageBar from './LanguageBar';
import Subtitle from '@/app/components/Subtitle';
import SectionContainer from '../SectionContainer';

type LanguageObject = {
  language: string;
  percentage: number;
};

const languagesArray: LanguageObject[] = [
  { language: 'Spanish', percentage: 100 },
  { language: 'English', percentage: 75 },
  { language: 'French', percentage: 17 },
];

const LanguagesSection = () => (
  <SectionContainer className='bg-[#0F2434]'>
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

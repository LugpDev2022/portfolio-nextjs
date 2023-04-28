import LanguageBar from '@/app/components/LanguageBar';
import Subtitle from '@/app/components/Subtitle';

type LanguageObject = {
  language: string;
  percentage: number;
};

const languagesArray: LanguageObject[] = [
  { language: 'Spanish', percentage: 100 },
  { language: 'English', percentage: 75 },
  { language: 'French', percentage: 17 },
];

const Languages = () => (
  <div className='sm:py-15 bg-[#0F2434] px-10 py-10'>
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
  </div>
);

export default Languages;

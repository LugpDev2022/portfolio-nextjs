import { useMemo } from 'react';
import { getLanguageLevel } from '../helpers/getLanguageLevel';

interface Props {
  language: string;
  percentage: number;
}

const LanguageBar: React.FC<Props> = ({ language, percentage }) => {
  const level = useMemo(() => getLanguageLevel(percentage), [percentage]);

  return (
    <div className='my-4 block w-full text-white sm:my-6 sm:flex'>
      <span className='me-5 block basis-[80px] text-left text-lg font-semibold tracking-wide sm:text-right'>
        {language}
      </span>

      <div className='h-[25px] w-full sm:flex sm:w-10/12'>
        <div
          className='me-2 h-[25px] bg-[#255880]'
          style={{ width: `${percentage}%` }}
        ></div>
        <span className='hidden text-lg sm:inline'>{level}</span>
      </div>
    </div>
  );
};

export default LanguageBar;

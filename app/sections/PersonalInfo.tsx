import Image from 'next/image';
import photo from '../assets/profile.jpg';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiFiverr } from 'react-icons/si';
import SectionContainer from '../components/SectionContainer';

//TODO: Find better logos
const PersonalInfo = () => {
  return (
    <SectionContainer className='flex flex-col gap-10 bg-[#255880] sm:grid sm:grid-cols-2'>
      <div className='flex justify-center sm:justify-end'>
        <Image
          src={photo}
          alt='Photo'
          className='rounded-lg'
          width={350}
          height={350}
          priority
        />
      </div>

      <div className='flex flex-col justify-evenly text-center text-white sm:text-left'>
        <div>
          <h1 className='text-3xl font-bold'>
            Luis Alberto <br /> Cervantes García
          </h1>
          <h2 className='mt-3 text-2xl font-semibold'>Frontend Developer</h2>
        </div>
        <div className='mt-8 flex justify-center gap-10 sm:justify-start'>
          <a href='https://github.com/LugpDev2022' target='_blank'>
            <AiFillGithub className='contactIcon' />
          </a>
          <a href='https://www.linkedin.com/in/luiscerv/' target='_blank'>
            <AiFillLinkedin className='contactIcon' />
          </a>
          <a href='' target='_blank'>
            <SiFiverr className='contactIcon' />
          </a>
        </div>
      </div>
    </SectionContainer>
  );
};

export default PersonalInfo;

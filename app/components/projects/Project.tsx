'use client';

import Image, { StaticImageData } from 'next/image';

interface Props {
  name: string;
  image: StaticImageData;
  description: string;
}

const Project: React.FC<Props> = ({ name, image, description }) => {
  return (
    <div
      className='basis-full sm:basis-[45%]'
      onMouseEnter={() => console.log('mouse enter')}
    >
      <Image src={image} alt='Project Image' className='rounded-lg' />
    </div>
  );
};

export default Project;

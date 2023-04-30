'use client';

import Image, { StaticImageData } from 'next/image';
import projectStyles from './project.module.css';

interface Props {
  name: string;
  image: StaticImageData;
  description: string;
  link: string;
}

//TODO: Add an animation
const Project: React.FC<Props> = ({ name, image, description, link }) => {
  return (
    <a href={link} className={projectStyles.projectContainer}>
      <Image src={image} alt='Project Image' className='rounded-lg' />

      <div className={projectStyles.projectDescription}>
        <span className='text-lg font-semibold uppercase tracking-wide md:text-xl'>
          {name}
        </span>
        <p className='hidden text-lg md:block'>{description}</p>
      </div>
    </a>
  );
};

export default Project;

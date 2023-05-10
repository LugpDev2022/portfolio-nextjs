'use client';

import Image from 'next/image';
import projectStyles from './project.module.css';
import { ProjectType } from './projectsArray';
import { useState } from 'react';
import ProjectModal from './ProjectModal';

const Project = ({ name, image, description, link }: ProjectType) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <article
        className={projectStyles.projectContainer}
        onClick={() => setShowModal(true)}
      >
        <Image src={image} alt='Project Image' className='rounded-lg' />

        <div className={projectStyles.projectDescription}>
          <span className='text-lg font-semibold uppercase tracking-wide md:text-xl'>
            {name}
          </span>
          <p className='hidden text-lg md:block'>{description}</p>
        </div>
      </article>

      {showModal && (
        <ProjectModal
          title={name}
          closeFunction={() => setShowModal(false)}
          image={image}
        />
      )}
    </>
  );
};

export default Project;

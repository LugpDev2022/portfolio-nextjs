'use client';

import { useState } from 'react';
import Image from 'next/image';
import projectStyles from './project.module.css';
import { ProjectType } from './projectsArray';
import ProjectModal from './ProjectModal';

const Project = ({
  name,
  image,
  description,
  techStack,
  links,
}: ProjectType) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [closingModal, setClosingModal] = useState<boolean>(false);

  const handleClose = () => {
    setClosingModal(true);
    setTimeout(() => {
      setClosingModal(false);
      setShowModal(false);
    }, 150);
  };

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
          <p className='hidden text-center text-lg md:block'>{description}</p>
        </div>
      </article>

      {showModal && (
        <ProjectModal
          title={name}
          closeFunction={handleClose}
          image={image}
          closing={closingModal}
          techStack={techStack}
          url={links.url}
          githubLink={links.githubLink}
        />
      )}
    </>
  );
};

export default Project;

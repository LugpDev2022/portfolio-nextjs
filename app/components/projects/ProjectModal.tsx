import { useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import projectStyles from './project.module.css';
import { AiOutlineClose } from 'react-icons/ai';

interface Props {
  title: string;
  closeFunction: () => void;
  image: StaticImageData;
  // techStack: string[];
}

const ProjectModal: React.FC<Props> = ({
  title,
  closeFunction,
  image,
  // techStack,
}) => {
  useEffect(() => {
    const handler = ({ key }: KeyboardEvent) => {
      if (key !== 'Escape') return;
      closeFunction();
    };

    window.addEventListener('keydown', handler);

    return () => window.removeEventListener('keydown', handler);
  }, [closeFunction]);

  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div className={projectStyles.modalBackground}>
      <div className={projectStyles.modalContent}>
        <div className='flex items-center justify-between bg-[#017acc]'>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <AiOutlineClose
            onClick={closeFunction}
            size={27}
            className='hover:cursor-pointer'
          />
        </div>

        <Image
          src={image}
          alt='Project Screenshot'
          className='my-3 rounded-lg'
        />
        <h4 className='text-xl font-medium'>Tech Stack</h4>
        <ul>
          <li>xd</li>
          <li>xd</li>
          <li>xd</li>
          <li>xd</li>
          <li>xd</li>
          <li>xd</li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectModal;

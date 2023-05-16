import Image, { StaticImageData } from 'next/image';
import projectStyles from './project.module.css';
import { AiOutlineClose, AiOutlineLink, AiFillGithub } from 'react-icons/ai';
import { useModalEffects } from './useModalEffects';

interface Props {
  title: string;
  closeFunction: () => void;
  image: StaticImageData;
  techStack: string[];
  closing?: boolean;
  url: string;
  githubLink?: string;
}

const ProjectModal: React.FC<Props> = ({
  title,
  closeFunction,
  image,
  techStack,
  closing = false,
  url,
  githubLink,
}) => {
  useModalEffects(closeFunction);

  return (
    <div className={projectStyles.modalBackground}>
      <div
        className={`${projectStyles.modalContent} ${
          closing ? projectStyles.hideModal : ''
        }`}
      >
        <div className='absolute flex w-full items-center justify-between bg-[#255880] px-4 py-2'>
          <h3 className='text-2xl font-semibold'>{title}</h3>

          <AiOutlineClose
            onClick={closeFunction}
            size={27}
            className='hover:cursor-pointer'
          />
        </div>

        <div className='h-full overflow-y-scroll px-5 pb-4 pt-[48px]'>
          <Image
            src={image}
            alt='Project Screenshot'
            className='mb-3 rounded-sm'
          />

          <h4 className='mb-1 text-xl font-medium'>Tech Stack</h4>
          <ul className='grid grid-cols-2'>
            {techStack.map((technology) => (
              <li
                key={technology}
                className='list-inside list-disc text-lg font-medium'
              >
                {technology}
              </li>
            ))}
          </ul>

          <h4 className='mb-1 mt-4 text-xl font-medium'>Links</h4>
          <div className='flex gap-5'>
            {githubLink && (
              <a href={githubLink} target='_blank'>
                <AiFillGithub
                  size={32}
                  className='duration-300 hover:text-[#0f2434]'
                />
              </a>
            )}
            <a href={url} target='_blank'>
              <AiOutlineLink
                size={32}
                className='duration-300 hover:text-[#0f2434]'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

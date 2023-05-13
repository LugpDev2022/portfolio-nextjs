import Image, { StaticImageData } from 'next/image';
import projectStyles from './project.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import { useModalEffects } from './useModalEffects';

interface Props {
  title: string;
  closeFunction: () => void;
  image: StaticImageData;
  techStack: string[];
  closing?: boolean;
}

const ProjectModal: React.FC<Props> = ({
  title,
  closeFunction,
  image,
  techStack,
  closing = false,
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
          <h4 className='text-xl font-medium'>Tech Stack</h4>
          <ul>
            {techStack.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

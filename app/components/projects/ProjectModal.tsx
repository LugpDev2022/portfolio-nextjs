import Image, { StaticImageData } from 'next/image';
import projectStyles from './project.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import { useModalEffects } from './useModalEffects';

interface Props {
  title: string;
  closeFunction: () => void;
  image: StaticImageData;
  // techStack: string[];
  closing?: boolean;
}

const ProjectModal: React.FC<Props> = ({
  title,
  closeFunction,
  image,
  // techStack,
  closing = false,
}) => {
  useModalEffects(closeFunction);

  return (
    <div className={projectStyles.modalBackground}>
      <div
        className={
          projectStyles.modalContent +
          ' ' +
          (closing ? projectStyles.hideModal : '')
        }
      >
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

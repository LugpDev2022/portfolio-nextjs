import Image, { StaticImageData } from 'next/image';
import { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface Props {
  title: string;
  closeFunction: () => void;
  image: StaticImageData;
}

//TODO: Disable scrolling
const ProjectModal: React.FC<Props> = ({ title, closeFunction, image }) => {
  useEffect(() => {
    const handler = ({ key }: { key: string }) => {
      if (key !== 'Escape') return;
      closeFunction();
    };

    window.addEventListener('keydown', handler);

    return () => window.removeEventListener('keydown', handler);
  }, [closeFunction]);

  return (
    <div
      className='
        fixed
        top-0 
        z-50 
        flex 
        h-full 
        w-full 
        flex-col 
        justify-center 
        bg-black/70 
        px-7
        backdrop-opacity-10
      '
    >
      <div className='mx-auto max-h-[75vh] w-full max-w-[700px] overflow-y-scroll rounded-md bg-[#017acc] px-5 py-2 text-white'>
        <div className='flex justify-between'>
          <h3 className='text-2xl'>{title}</h3>
          <AiOutlineClose
            onClick={closeFunction}
            size={30}
            className='hover:cursor-pointer'
          />
        </div>

        <Image src={image} alt='Project Screenshot' className='rounded-lg' />
        <div>
          <h4>Tech Stack</h4>
          <ul>
            <li>xd</li>
            <li>xd</li>
            <li>xd</li>
            <li>xd</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

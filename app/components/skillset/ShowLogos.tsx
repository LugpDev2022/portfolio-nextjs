import Image from 'next/image';
import { bannerLogos } from './logos';

//TODO: Improve mobile desing
const ShowLogos = () => {
  return (
    <>
      {
        <div className='mt-7 flex flex-wrap justify-evenly gap-6 sm:justify-between'>
          {bannerLogos.map(({ src, alt }) => (
            <div
              key={alt}
              className='flex basis-[50px] items-center sm:basis-[60px] md:basis-[70px]'
            >
              <Image src={src} alt={alt} />
            </div>
          ))}
        </div>
      }
    </>
  );
};

export default ShowLogos;

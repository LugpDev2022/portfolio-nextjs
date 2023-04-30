import SectionContainer from '../components/SectionContainer';
import Subtitle from '../components/Subtitle';
import timeAppImage from '../assets/timeApp.png';
import Image, { StaticImageData } from 'next/image';
import Project from '../components/Project';

type Project = {
  name: string;
  image: StaticImageData;
  description: string;
};

const projectsArray: Project[] = [
  {
    name: 'xd1',
    image: timeAppImage,
    description: 'Project example',
  },
  {
    name: 'xd2',
    image: timeAppImage,
    description: 'Project example',
  },
  {
    name: 'xd3',
    image: timeAppImage,
    description: 'Project example',
  },
  {
    name: 'xd4',
    image: timeAppImage,
    description: 'Project example',
  },
  {
    name: 'xd5',
    image: timeAppImage,
    description: 'Project example',
  },
  {
    name: 'xd6',
    image: timeAppImage,
    description: 'Project example',
  },
];

const Projects = () => {
  return (
    <SectionContainer className='bg-[#255880]'>
      <Subtitle>Projects</Subtitle>
      <div className='mt-10 flex flex-wrap justify-evenly gap-7'>
        {projectsArray.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projects;

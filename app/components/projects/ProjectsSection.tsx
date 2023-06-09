import SectionContainer from '../SectionContainer';
import Subtitle from '../Subtitle';
import Project from './Project';
import { projectsArray } from './projectsArray';

const ProjectsSection = () => (
  <SectionContainer className='bg-[#255880]' section='projects'>
    <Subtitle>Projects</Subtitle>
    <div className='mt-10 flex flex-wrap justify-evenly gap-7'>
      {projectsArray.map((project) => (
        <Project key={project.name} {...project} />
      ))}
    </div>
  </SectionContainer>
);

export default ProjectsSection;

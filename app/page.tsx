import LanguagesSection from './components/languages/LanguagesSection';
import Navbar from './components/navbar/Navbar';
import PersonalInfoSection from './components/PersonalInfoSection';
import ProjectsSection from './components/projects/ProjectsSection';

const page = () => (
  <>
    <Navbar />
    <div className='mt-[60px]'>
      <PersonalInfoSection />
      <LanguagesSection />
      <ProjectsSection />
    </div>
  </>
);

export default page;

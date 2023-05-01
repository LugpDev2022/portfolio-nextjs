import LanguagesSection from './components/languages/LanguagesSection';
import Navbar from './components/navbar/Navbar';
import PersonalInfoSection from './components/PersonalInfoSection';
import ProjectsSection from './components/projects/ProjectsSection';
import SkillsetSection from './components/skillset/SkillsetSection';

const page = () => (
  <>
    <Navbar />
    <div className='mt-[60px]'>
      <PersonalInfoSection />
      <LanguagesSection />
      <ProjectsSection />
      <SkillsetSection />
    </div>
  </>
);

export default page;

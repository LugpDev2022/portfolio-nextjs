import Languages from './sections/Languages';
import Navbar from './components/navbar/Navbar';
import PersonalInfo from './sections/PersonalInfo';
import Projects from './sections/Projects';

const page = () => (
  <>
    <Navbar />
    <div className='mt-[60px]'>
      <PersonalInfo />
      <Languages />
      <Projects />
    </div>
  </>
);

export default page;

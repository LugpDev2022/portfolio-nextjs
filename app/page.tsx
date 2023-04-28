import Languages from './sections.tsx/languages/Languages';
import Navbar from './components/navbar/Navbar';
import PersonalInfo from './sections.tsx/personalInfo/PersonalInfo';

const page = () => (
  <>
    <Navbar />
    <div className='mt-[60px]'>
      <PersonalInfo />
      <Languages />
    </div>
  </>
);

export default page;

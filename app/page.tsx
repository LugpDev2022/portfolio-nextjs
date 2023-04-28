import Languages from './sections/Languages';
import Navbar from './components/navbar/Navbar';
import PersonalInfo from './sections/PersonalInfo';

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

import Navbar from './components/navbar/Navbar';
import PersonalInfo from './components/personalInfo/PersonalInfo';

const page = () => (
  <>
    <Navbar />
    <div className='mt-[60px]'>
      <PersonalInfo />
    </div>
  </>
);

export default page;

import navbarStyles from './navbar.module.css';

interface Props {
  show: boolean;
}

const DesktopDropdown: React.FC<Props> = ({ show }) => {
  return (
    <div
      className={`absolute top-16 hidden ${show ? 'sm:block' : 'sm:hidden'}`}
    >
      <div className={navbarStyles.tri}></div>
      <ul className='rounded-lg bg-[#0B1822] p-3 text-base'>
        <li className='mt-[5px] duration-200 hover:text-[#4185b9]'>
          <a href='#'>Languages</a>
        </li>
        <li className='mt-[5px] duration-200 hover:text-[#4185b9]'>
          <a href='#'>Frameworks</a>
        </li>
        <li className='mt-[5px] duration-200 hover:text-[#4185b9]'>
          <a href='#'>Other tools</a>
        </li>
      </ul>
    </div>
  );
};

export default DesktopDropdown;

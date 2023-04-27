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
        <li className='mt-[5px]'>
          <a href='#'>Languages</a>
        </li>
        <li className='mt-[5px]'>
          <a href='#'>Frameworks</a>
        </li>
        <li className='mt-[5px]'>
          <a href='#'>Other tools</a>
        </li>
      </ul>
    </div>
  );
};

export default DesktopDropdown;

import navbarStyles from './navbar.module.css';

interface Props {
  show: boolean;
  programmingLanguagesSectionPosition: number;
  frameworksSectionPosition: number;
  toolsSectionPosition: number;
}

interface LinkProps {
  children: React.ReactNode;
  navigateTo: number;
}

const Link: React.FC<LinkProps> = ({ children, navigateTo }) => (
  <li className='mt-[5px]'>
    <span
      className='duration-200 hover:cursor-pointer hover:text-[#4185b9]'
      onClick={() => scrollTo(0, navigateTo - 30)}
    >
      {children}
    </span>
  </li>
);

const DesktopDropdown: React.FC<Props> = ({
  show,
  programmingLanguagesSectionPosition,
  frameworksSectionPosition,
  toolsSectionPosition,
}) => (
  <div className={`absolute top-16 hidden ${show ? 'sm:block' : 'sm:hidden'}`}>
    <div className={navbarStyles.tri}></div>
    <ul className='rounded-lg bg-[#0B1822] p-3 text-base'>
      <Link navigateTo={programmingLanguagesSectionPosition}>Languages</Link>
      <Link navigateTo={frameworksSectionPosition}>Frameworks</Link>
      <Link navigateTo={toolsSectionPosition}>Other Tools</Link>
    </ul>
  </div>
);

export default DesktopDropdown;

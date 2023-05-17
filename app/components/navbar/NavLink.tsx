import navbarStyles from './navbar.module.css';

interface NavlinkProps {
  children: React.ReactNode;
  navigateTo: number;
  active?: boolean;
}

const NavLink: React.FC<NavlinkProps> = ({ children, navigateTo, active }) => (
  <li
    className={`${navbarStyles.navLink} ${
      active ? navbarStyles.activeLink : ''
    }`}
    onClick={() => scrollTo(0, navigateTo - 30)}
  >
    {children}
  </li>
);

export default NavLink;

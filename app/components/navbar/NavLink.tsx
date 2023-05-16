interface NavlinkProps {
  children: React.ReactNode;
  navigateTo: number;
  active?: boolean;
}

const NavLink: React.FC<NavlinkProps> = ({ children, navigateTo, active }) => (
  <li
    className={`flex items-center duration-200 hover:cursor-pointer hover:text-[#4185b9] ${
      active ? 'underline' : ''
    }`}
    onClick={() => scrollTo(0, navigateTo - 30)}
  >
    {children}
  </li>
);

export default NavLink;

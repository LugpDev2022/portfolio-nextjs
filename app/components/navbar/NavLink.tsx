interface NavlinkProps {
  children: React.ReactNode;
  href: string;
  active?: boolean;
}

const NavLink: React.FC<NavlinkProps> = ({ children, href, active }) => (
  <li
    className={`flex items-center duration-200 hover:text-[#4185b9] ${
      active ? 'underline' : ''
    }`}
  >
    <a href={href}>{children}</a>
  </li>
);

export default NavLink;

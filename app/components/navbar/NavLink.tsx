interface NavlinkProps {
  children: React.ReactNode;
  href: string;
}

const NavLink: React.FC<NavlinkProps> = ({ children, href }) => (
  <li className='flex items-center duration-200 hover:text-[#4185b9]'>
    <a href={href}>{children}</a>
  </li>
);

export default NavLink;

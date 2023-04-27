'use client';

// import { useState } from 'react';
import navbarStyles from './navbar.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  // const [dropdownActive, setDropdownActive] = useState<boolean>(false);

  return (
    <nav className='flex justify-between bg-[#0B1822] px-8 py-3 text-white'>
      <GiHamburgerMenu
        size={32}
        className='block hover:cursor-pointer sm:hidden'
      />

      <ul className='hidden flex-row flex-wrap gap-7 text-xl font-semibold tracking-wide sm:flex'>
        <li>Languages</li>
        <li>Projects</li>
        <li>Skillset</li>
      </ul>
      <span className={navbarStyles.navbarBrand}>
        &lt;LC /&gt; {/*<LC />*/}
      </span>
    </nav>
  );
};

export default Navbar;

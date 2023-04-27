'use client';

import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import navbarStyles from './navbar.module.css';
import DesktopDropdown from './DesktopDropdown';

const Navbar = () => {
  const [showMobileNavbar, setshowMobileNavbar] = useState<boolean>(false);
  const handleMenuClick = () => setshowMobileNavbar(!showMobileNavbar);

  return (
    <nav className='justify-between bg-[#0B1822] px-8 py-3 text-white sm:flex'>
      <div className='order-2 flex justify-between'>
        <GiHamburgerMenu
          size={38}
          className='block hover:cursor-pointer sm:hidden'
          onClick={handleMenuClick}
        />

        <a href='#' className={navbarStyles.navbarBrand}>
          {/*<LC />*/}
          &lt;LC /&gt;
        </a>
      </div>

      <hr
        className={`my-3 ${showMobileNavbar ? 'block' : 'hidden'}  sm:hidden`}
      />

      <ul
        className={`
          order-1 
          ${showMobileNavbar ? 'flex' : 'hidden'} 
          flex-col
          flex-wrap 
          gap-2 
          text-xl 
          font-semibold
          tracking-wide
          sm:flex
          sm:flex-row
          sm:gap-7
        `}
      >
        <li className='flex items-center'>
          <a href='#'>Languages</a>
        </li>
        <li className='flex items-center'>
          <a href='#'>Projects</a>
        </li>
        <li className='flex items-center'>
          <button>Skillset</button>
          <DesktopDropdown show />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

'use client';

import { useState } from 'react';
import navbarStyles from './navbar.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [showMobileNavbar, setshowMobileNavbar] = useState<boolean>(false);

  const handleMenuClick = () => {
    setshowMobileNavbar(!showMobileNavbar);
  };

  return (
    <nav className='justify-between bg-[#0B1822] px-8 py-3 text-white sm:flex'>
      <div className='order-2 flex justify-between'>
        <GiHamburgerMenu
          size={32}
          className='block hover:cursor-pointer sm:hidden'
          onClick={handleMenuClick}
        />

        <span className={navbarStyles.navbarBrand}>
          {/*<LC />*/}
          &lt;LC /&gt;
        </span>
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
          <a href='#'>Skillset</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

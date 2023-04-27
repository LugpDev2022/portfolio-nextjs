'use client';

import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import navbarStyles from './navbar.module.css';
import { IoMdArrowDropdown } from 'react-icons/io';
import DesktopDropdown from './DesktopDropdown';
import MobileDropdown from './MobileDropdown';

//TODO: Animate the dropdown icon
const Navbar = () => {
  const [showMobileNavbar, setshowMobileNavbar] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const handleMenuClick = () => setshowMobileNavbar(!showMobileNavbar);

  useEffect(() => {
    window.addEventListener('click', ({ target }: { target: any }) => {
      if (target.id === 'skillsetDropdownButton') return;

      setShowDropdown(() => false);
    });
  }, []);

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
        <li className='flex flex-col justify-center'>
          <span
            id='skillsetDropdownButton'
            className='flex items-center hover:cursor-pointer'
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Skillset
            <IoMdArrowDropdown
              size={28}
              className={showDropdown === true ? 'rotate-180' : 'rotate-0'}
            />
          </span>

          {/* Just shown on desktop view */}
          <DesktopDropdown show={showDropdown} />
          {/* Just shown on mobile view */}
          <MobileDropdown show={showDropdown} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

'use client';

import { GiHamburgerMenu } from 'react-icons/gi';
import navbarStyles from './navbar.module.css';
import { IoMdArrowDropdown } from 'react-icons/io';
import DesktopDropdown from './DesktopDropdown';
import MobileDropdown from './MobileDropdown';
import { useNavbar } from './useNavbar';

import NavLink from './NavLink';
import { useContext } from 'react';
import { PositionsContext } from '../context/PositionsContext';

//TODO: Animate the dropdown icon in a better way
//TODO: Animate the dropdown when it appears
//TODO: Add hover effects

const Navbar = () => {
  const {
    showDropdown,
    toggleShowDropdown,
    showMobileNavbar,
    handleMenuClick,
    activeLink,
  } = useNavbar();
  const { positions } = useContext<any>(PositionsContext);

  return (
    <nav className='fixed top-0 z-10 w-full justify-between bg-[#0B1822] px-8 py-3 text-white sm:flex'>
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
        <NavLink href='#languages' active={activeLink === 'languages'}>
          Languages
        </NavLink>
        <NavLink href='#projects' active={activeLink === 'projects'}>
          Projects
        </NavLink>

        <li className='flex flex-col justify-center'>
          <span
            id='skillsetDropdownButton'
            className={`flex items-center duration-200 hover:cursor-pointer hover:text-[#4185b9] ${
              activeLink === 'skillset' ? 'underline' : ''
            }`}
            onClick={toggleShowDropdown}
          >
            Skillset
            <IoMdArrowDropdown
              size={28}
              className={showDropdown ? 'rotate-180' : 'rotate-0'}
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

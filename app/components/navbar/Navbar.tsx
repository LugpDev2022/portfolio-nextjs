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

//TODO: Animate the dropdown when it appears
//TODO: Improve dropdown mobile design

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
    <nav className='fixed top-0 z-10 w-full justify-between bg-[#0B1822] px-8 py-3 text-white sm:flex sm:h-[62px]'>
      <div className='order-2 flex justify-between'>
        <GiHamburgerMenu
          size={38}
          className='block hover:cursor-pointer sm:hidden'
          onClick={handleMenuClick}
        />

        <span
          onClick={() => scrollTo(0, 0)}
          className={navbarStyles.navbarBrand}
        >
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
        <NavLink
          navigateTo={positions.languagesSectionPosition}
          active={activeLink === 'languages'}
        >
          Languages
        </NavLink>
        <NavLink
          navigateTo={positions.projectsSectionPosition}
          active={activeLink === 'projects'}
        >
          Projects
        </NavLink>

        <li>
          <span
            id='skillsetDropdownButton'
            className={`inline-flex ${navbarStyles.navLink} ${
              activeLink === 'skillset' ? navbarStyles.activeLink : ''
            }`}
            onClick={toggleShowDropdown}
          >
            Skillset
            <IoMdArrowDropdown
              size={28}
              className={`float-right transition duration-150 ${
                showDropdown ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </span>

          {/* Just shown on desktop view */}
          <DesktopDropdown show={showDropdown} {...positions} />
          {/* Just shown on mobile view */}
          <MobileDropdown show={showDropdown} {...positions} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

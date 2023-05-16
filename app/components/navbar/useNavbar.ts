import { useContext, useEffect, useState } from 'react';
import { PositionsContext } from '../context/PositionsContext';
import { getActiveLink } from './getActiveLink';

export const useNavbar = () => {
  const { positions } = useContext<any>(PositionsContext);

  const [showMobileNavbar, setshowMobileNavbar] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const [activeLink, setActiveLink] = useState<string>('info');

  const handleMenuClick = () => setshowMobileNavbar(!showMobileNavbar);
  const toggleShowDropdown = () => setShowDropdown(!showDropdown);

  useEffect(() => {
    const handler = ({ target }: { target: any }) => {
      if (target.id === 'skillsetDropdownButton') return;

      setShowDropdown(() => false);
    };

    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  }, []);

  useEffect(() => {
    const handler = () => setShowDropdown(() => false);

    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const activeLink = getActiveLink({ ...positions });
      setActiveLink(activeLink);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [positions]);

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return {
    showDropdown,
    toggleShowDropdown,
    showMobileNavbar,
    handleMenuClick,
    activeLink,
  };
};

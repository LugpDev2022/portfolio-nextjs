import { useEffect, useState } from 'react';

export const useNavbar = () => {
  const [showMobileNavbar, setshowMobileNavbar] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleMenuClick = () => setshowMobileNavbar(!showMobileNavbar);
  const toggleShowDropdown = () => setShowDropdown(!showDropdown);

  useEffect(() => {
    window.addEventListener('click', ({ target }: { target: any }) => {
      if (target.id === 'skillsetDropdownButton') return;

      setShowDropdown(() => false);
    });

    window.addEventListener('scroll', () => {
      setShowDropdown(() => false);
    });
  }, []);

  return {
    showDropdown,
    toggleShowDropdown,
    showMobileNavbar,
    handleMenuClick,
  };
};

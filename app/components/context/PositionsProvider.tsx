'use client';

import { useEffect, useState } from 'react';
import { PositionsContext } from './PositionsContext';
import { getSectionsPosition } from './getSectionsPositions';

interface Props {
  children: React.ReactNode;
}

type SectionsPosition = {
  languagesSectionPosition: number | undefined;
  projectsSectionPosition: number | undefined;
  skillsetSectionPosition: number | undefined;
};

const PositionsProvider: React.FC<Props> = ({ children }) => {
  const [positions, setPositions] = useState<SectionsPosition>({
    languagesSectionPosition: undefined,
    projectsSectionPosition: undefined,
    skillsetSectionPosition: undefined,
  });

  useEffect(() => {
    window.addEventListener('resize', () => {
      const positions = getSectionsPosition();
      setPositions(positions);
    });
  }, []);

  useEffect(() => {
    const positions = getSectionsPosition();
    setPositions(positions);
  }, []);

  return (
    <PositionsContext.Provider
      value={{
        ...positions,
      }}
    >
      {children}
    </PositionsContext.Provider>
  );
};

export default PositionsProvider;

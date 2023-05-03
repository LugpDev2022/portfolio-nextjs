'use client';

import { useEffect, useState } from 'react';
import { PositionsContext } from './PositionsContext';
import { getSectionsPosition } from './getSectionsPositions';

interface Props {
  children: React.ReactNode;
}

type Positions = {
  languagesSectionPosition: number | undefined;
  projectsSectionPosition: number | undefined;
  skillsetSectionPosition: number | undefined;
};

const PositionsProvider: React.FC<Props> = ({ children }) => {
  const [positions, setPositions] = useState<Positions>({
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
    window.addEventListener('load', () => {
      const positions = getSectionsPosition();
      setPositions(positions);
    });
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

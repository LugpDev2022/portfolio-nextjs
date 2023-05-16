'use client';

import { useContext, useEffect, useRef } from 'react';
import { PositionsContext } from './context/PositionsContext';
import { Section } from './context/types';

interface Props {
  section: Section;
  children: React.ReactNode;
  className?: string;
  disableDefaultStyles?: boolean;
}

const SectionContainer: React.FC<Props> = ({
  children,
  className = '',
  section,
  disableDefaultStyles = false,
}) => {
  const { setSectionRef } = useContext<any>(PositionsContext);
  const ref = useRef(null);

  useEffect(() => {
    setSectionRef(section, ref);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className={
        disableDefaultStyles
          ? className
          : `sm:py-15 px-7 py-10 lg:px-10 ${className}`
      }
      ref={ref}
    >
      {children}
    </section>
  );
};

export default SectionContainer;

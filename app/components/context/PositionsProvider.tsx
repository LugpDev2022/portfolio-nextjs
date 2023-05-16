'use client';

import { useEffect, useReducer } from 'react';
import { PositionsContext } from './PositionsContext';
import { getSectionPosition } from './getSectionPosition';
import { positionsReducer } from './positionsReducer';
import { Section, State } from './types';

interface Props {
  children: React.ReactNode;
}

const initialState: State = {
  positions: {
    languagesSectionPosition: undefined,
    projectsSectionPosition: undefined,
    programmingLanguagesSectionPosition: undefined,
    frameworksSectionPosition: undefined,
    toolsSectionPosition: undefined,
  },
  refs: {
    languagesRef: undefined,
    projectsRef: undefined,
    programmingLanguagesRef: undefined,
    frameworksRef: undefined,
    toolsRef: undefined,
  },
};

const PositionsProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(positionsReducer, initialState);

  const setSectionRef = (section: Section, ref: any) => {
    dispatch({ type: 'UPDATE REFERENCE', payload: { section, ref } });
    dispatch({
      type: 'UPDATE POSITION',
      payload: { section, distanceToTop: getSectionPosition(ref) },
    });
  };

  useEffect(() => {
    const handler = () => {
      for (const ref in state.refs) {
        const section = ref.substring(0, ref.length - 3);

        dispatch({
          type: 'UPDATE POSITION',
          payload: {
            section,
            distanceToTop: getSectionPosition(state.refs[ref]),
          },
        });
      }
    };

    window.addEventListener('resize', handler);

    return () => window.removeEventListener('resize', handler);
  }, [state.refs]);

  return (
    <PositionsContext.Provider
      value={{
        ...state,
        setSectionRef,
      }}
    >
      {children}
    </PositionsContext.Provider>
  );
};

export default PositionsProvider;

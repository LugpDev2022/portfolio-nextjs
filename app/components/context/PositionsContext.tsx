import { createContext } from 'react';

type ContextValues = {
  languagesSectionPosition: number | undefined;
  projectsSectionPosition: number | undefined;
  skillsetSectionPosition: number | undefined;
};

export const PositionsContext = createContext<ContextValues>({
  languagesSectionPosition: undefined,
  projectsSectionPosition: undefined,
  skillsetSectionPosition: undefined,
});

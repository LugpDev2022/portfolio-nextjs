type SectionPosition = undefined | number;
type SectionRef = undefined;

export interface State {
  positions: {
    languagesSectionPosition: SectionPosition;
    projectsSectionPosition: SectionPosition;
    skillsetSectionPosition: SectionPosition;
    programmingLanguagesPosition: SectionPosition;
    frameworksPosition: SectionPosition;
    toolsPosition: SectionPosition;
  };
  refs: {
    languagesRef: SectionRef;
    projectsRef: SectionRef;
    programmingLanguagesRef: SectionRef;
    frameworksRef: SectionRef;
    toolsRef: SectionRef;
  };
}

export type ContextValues = {
  positions: {
    languagesSectionPosition: SectionPosition;
    projectsSectionPosition: SectionPosition;
    skillsetSectionPosition: SectionPosition;
    programmingLanguagesPosition: SectionPosition;
    frameworksPosition: SectionPosition;
    toolsPosition: SectionPosition;
  };
  refs: {
    languagesRef: SectionRef;
    projectsRef: SectionRef;
    programmingLanguagesRef: SectionRef;
    frameworksRef: SectionRef;
    toolsRef: SectionRef;
  };
  setSectionRef: () => void;
};

export type Section =
  | 'personalInfo'
  | 'languages'
  | 'projects'
  | 'skillsetS'
  | 'programmingLanguages'
  | 'frameworks'
  | 'tools';

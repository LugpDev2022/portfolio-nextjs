type Positions = {
  languagesSectionPosition: number;
  projectsSectionPosition: number;
  skillsetSectionPosition: number;
};

export const getActiveLink = ({
  languagesSectionPosition,
  projectsSectionPosition,
  skillsetSectionPosition,
}: Positions): string => {
  const actualPosition = window.scrollY;

  if (actualPosition >= skillsetSectionPosition) return 'skillset';

  if (actualPosition >= projectsSectionPosition) return 'projects';

  if (actualPosition >= languagesSectionPosition) return 'languages';

  return 'info';
};

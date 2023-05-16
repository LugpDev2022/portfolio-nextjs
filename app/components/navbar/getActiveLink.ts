type Positions = {
  languagesSectionPosition: number;
  projectsSectionPosition: number;
  programmingLanguagesPosition: number;
};

export const getActiveLink = ({
  languagesSectionPosition,
  projectsSectionPosition,
  programmingLanguagesPosition,
}: Positions): string => {
  const actualPosition = window.scrollY;

  if (actualPosition >= programmingLanguagesPosition) return 'skillset';

  if (actualPosition >= projectsSectionPosition) return 'projects';

  if (actualPosition >= languagesSectionPosition) return 'languages';

  return 'info';
};

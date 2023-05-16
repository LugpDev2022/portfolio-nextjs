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

  if (actualPosition >= programmingLanguagesPosition - 30) return 'skillset';

  if (actualPosition >= projectsSectionPosition - 30) return 'projects';

  if (actualPosition >= languagesSectionPosition - 30) return 'languages';

  return 'info';
};

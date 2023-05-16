type Positions = {
  languagesSectionPosition: number;
  projectsSectionPosition: number;
  programmingLanguagesSectionPosition: number;
};

export const getActiveLink = ({
  languagesSectionPosition,
  projectsSectionPosition,
  programmingLanguagesSectionPosition,
}: Positions): string => {
  const actualPosition = window.scrollY;

  if (actualPosition >= programmingLanguagesSectionPosition - 30)
    return 'skillset';

  if (actualPosition >= projectsSectionPosition - 30) return 'projects';

  if (actualPosition >= languagesSectionPosition - 30) return 'languages';

  return 'info';
};

export const languageLevels = Object.freeze({
  error: 'Your percentage must be lower or equal to 100',
  beginner: 'Beginner',
  medium: 'Medium',
  advanced: 'Advanced',
  native: 'Native',
});

export const getLanguageLevel = (percentage: number): string => {
  if (percentage > 100) throw new Error(languageLevels.error);

  if (percentage === 100) return languageLevels.native;
  if (percentage > 60) return languageLevels.advanced;
  if (percentage > 25) return languageLevels.medium;
  return languageLevels.beginner;
};

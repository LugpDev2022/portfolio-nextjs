type Level =
  | 'Beginner'
  | 'Medium'
  | 'Advanced'
  | 'Native'
  | 'Error: Your percentage is bigger than 100';

export const getLanguageLevel = (percentage: number): Level => {
  if (percentage > 100) return 'Error: Your percentage is bigger than 100';

  if (percentage < 25) return 'Beginner';

  if (percentage < 60) return 'Medium';

  if (percentage < 100) return 'Advanced';

  return 'Native';
};

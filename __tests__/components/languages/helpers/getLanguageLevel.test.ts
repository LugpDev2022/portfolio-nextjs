import {
  getLanguageLevel,
  languageLevels,
} from '@/app/components/languages/helpers/getLanguageLevel';

describe('tests on getLanguageLevel', () => {
  test('should throw an error', () => {
    expect(() => getLanguageLevel(129)).toThrowError(languageLevels.error);
  });

  test('should return beginner level', () => {
    const level = getLanguageLevel(5);
    expect(level).toBe(languageLevels.beginner);
  });

  test('should return medium level', () => {
    const level = getLanguageLevel(54);
    expect(level).toBe(languageLevels.medium);
  });

  test('should return advanced level', () => {
    const level = getLanguageLevel(72);
    expect(level).toBe(languageLevels.advanced);
  });

  test('should return native level', () => {
    const level = getLanguageLevel(100);
    expect(level).toBe(languageLevels.native);
  });
});

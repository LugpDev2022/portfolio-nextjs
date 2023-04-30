import LanguageBar from '@/app/components/languages/LanguageBar';
import { render, screen } from '@testing-library/react';

//TODO: Test if the language bar has the given percentage size

describe('tests on <LanguageBar />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should match snapshot', () => {
    const { container } = render(
      <LanguageBar language='Japanese' percentage={10} />
    );

    expect(container).toMatchSnapshot();
  });

  test('should render the language name', () => {
    const language = 'Japanese';
    render(<LanguageBar language={language} percentage={10} />);

    expect(screen.getByText(language)).toBeTruthy;
  });

  test('should render the language level', () => {
    render(<LanguageBar language='Japanese' percentage={10} />);

    expect(screen.getByText('Beginner')).toBeTruthy();
  });
});

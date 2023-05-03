import LanguagesSection from '@/app/components/languages/LanguagesSection';
import { render, screen } from '@testing-library/react';

describe('Tests on <LanguageSection />', () => {
  test('should match snapshot', () => {
    const { container } = render(<LanguagesSection />);

    expect(container).toMatchSnapshot();
  });

  test('should render the subtitle', () => {
    render(<LanguagesSection />);

    expect(screen.getByText('Languages')).toBeTruthy();
  });
});

import skillsetStyles from './skillset.module.css';

import bootstrapLogo from '../../images/logos/bootstrap.png';
import tailwindLogo from '../../images/logos/tailwind.png';
import nextLogo from '../../images/logos/nextjs.png';
import astroLogo from '../../images/logos/astrojs.png';
import jestLogo from '../../images/logos/jest.png';
import reduxLogo from '../../images/logos/redux.png';
import reactLogo from '../../images/logos/react.png';
import cssLogo from '../../images/logos/css.png';
import htmlLogo from '../../images/logos/html.png';
import markdownLogo from '../../images/logos/md.png';
import sassLogo from '../../images/logos/sass.png';
import typescriptLogo from '../../images/logos/ts.png';

export const bannerLogos = [
  {
    src: bootstrapLogo,
    alt: 'bootstrap',
  },
  {
    src: tailwindLogo,
    alt: 'tailwindcss',
  },

  {
    src: astroLogo,
    alt: 'astro',
  },
  {
    src: reactLogo,
    alt: 'react',
  },
  {
    src: nextLogo,
    alt: 'nextjs',
  },
  {
    src: reduxLogo,
    alt: 'redux',
  },
  {
    src: jestLogo,
    alt: 'jest',
  },
];

export const languageLogos = [
  { src: cssLogo, alt: 'css', className: skillsetStyles.cssLogo },
  { src: htmlLogo, alt: 'html', className: skillsetStyles.htmlLogo },
  {
    src: markdownLogo,
    alt: 'markdown',
    className: skillsetStyles.markdownLogo,
  },
  { src: sassLogo, alt: 'sass', className: skillsetStyles.sassLogo },
  {
    src: typescriptLogo,
    alt: 'typescript',
    className: skillsetStyles.typescriptLogo,
  },
];

import { StaticImageData } from 'next/image';
import timeAppImage from '../../images/timeApp.png';

export type ProjectType = {
  name: string;
  image: StaticImageData;
  description: string;
  link: string;
  techStack: string[];
};

export const projectsArray: ProjectType[] = [
  {
    name: 'xd1',
    image: timeAppImage,
    description: 'Project example',
    link: '/',
    techStack: [''],
  },
  {
    name: 'xd2',
    image: timeAppImage,
    description: 'Project example',
    link: '/',
    techStack: [''],
  },
  {
    name: 'xd3',
    image: timeAppImage,
    description: 'Project example',
    link: '/',
    techStack: [''],
  },
  {
    name: 'xd4',
    image: timeAppImage,
    description: 'Project example',
    link: '/',
    techStack: [''],
  },
  {
    name: 'xd5',
    image: timeAppImage,
    description: 'Project example',
    link: '/',
    techStack: [''],
  },
  {
    name: 'xd6',
    image: timeAppImage,
    description: 'Project example',
    link: '/',
    techStack: [''],
  },
];

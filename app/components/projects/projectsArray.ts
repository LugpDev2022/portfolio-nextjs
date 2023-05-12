//TODO: Optimize the images
//TODO: Write all the descriptions

import { StaticImageData } from 'next/image';
import timeAppImage from '../../images/projects/timeApp.png';
import adviceAppImage from '../../images/projects/adviceApp.png';
import todoAppImage from '../../images/projects/todoApp.png';

export type ProjectType = {
  name: string;
  image: StaticImageData;
  description: string;
  links: {
    url: string;
    githubLink: string;
  };
  techStack: string[];
};

export const projectsArray: ProjectType[] = [
  {
    name: 'Time App',
    image: timeAppImage,
    description:
      'Small app for basic time tasks like watch the hour and create timers.',
    techStack: ['React', 'Redux', 'Jest', 'Bootstrap'],
    links: {
      url: 'https://time-app-lugpdev2022.netlify.app/',
      githubLink: 'https://github.com/LugpDev2022/time-app',
    },
  },
  {
    name: 'Advice App',
    image: adviceAppImage,
    description: '',
    techStack: ['React', 'Bootstrap', 'Sass'],
    links: {
      url: 'https://advice-generator-lugpdev2022.netlify.app/',
      githubLink: 'https://github.com/LugpDev2022/advice-generator',
    },
  },
  {
    name: 'Todo App',
    image: todoAppImage,
    description: '',
    techStack: ['React', 'Bootstrap', 'Jest'],
    links: {
      url: 'https://lugp-todo-app.netlify.app/',
      githubLink: 'https://github.com/LugpDev2022/todo-app',
    },
  },
];

import {
  frontend,
  backend,
  ux,
  prototyping,
  bootstrap,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  jquery,
  notion,
  prestashop,
  sass,
  wordpress,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  booki,
  brain,
  openclassrooms,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'tech',
    title: 'Tech',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'experiences',
    title: 'Experiences',
  },
  {
    id: 'footer',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'Sass',
    icon: sass,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Jquery',
    icon: jquery,
  },
  {
    name: 'Prestashop',
    icon: prestashop,
  },
  {
    name: 'WordPress',
    icon: wordpress,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'Notion',
    icon: notion,
  },
];


const experiences = [
  {
    title: 'Self-study',
    company_name: 'HTML CSS JS',
    icon: brain,
    iconBg: '#333333',
    date: '2014',
  },
  {
    title: 'eCommerce Website Creation',
    company_name: 'Prestashop',
    icon: prestashop,
    iconBg: '#333333',
    date: '2015',
  },
  {
    title: 'Web Developer Certification',
    company_name: 'Openclassrooms',
    icon: openclassrooms,
    iconBg: '#333333',
    date: '2018',
  },
  {
    title: 'Front-end Developer Certification',
    company_name: 'Openclassrooms',
    icon: openclassrooms,
    iconBg: '#333333',
    date: '2024-2025',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Booki',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/BadBadBean/Booki',
    demo: 'https://badbadbean.github.io/Booki/',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };

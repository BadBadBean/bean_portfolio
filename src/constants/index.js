import {
  design,
  magnifyingGlass,
  gear,
  bulb,
  bootstrap,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  notion,
  prestashop,
  sass,
  wordpress,
  booki,
  ohmyfood,
  diploma,
  book,
  computer,
  nina,
  calculAge,
  pomodoro,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'Services',
  },
  {
    id: 'tech',
    title: 'Tech',
  },
  {
    id: 'projects',
    title: 'Projets',
  },
  {
    id: 'experience',
    title: 'Experiences',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Développement Frontend',
    icon: design,
    description: 'Création d’interfaces modernes, responsives et performantes',
    rank: "Compagnon",
  },
  {
    title: 'Développement Backend',
    icon: gear,
    description: 'Mise en place d’APIs sécurisées et de bases de données efficaces',
    rank: "Novice",
  },
  {
    title: 'SEO',
    icon: magnifyingGlass,
    level: "1",
    description: 'Optimisation du contenu et de la structure de vos sites',
    rank: "Apprentie",
  },
  {
    title: 'UI/UX Design',
    icon: bulb,
    level: "1",
    description: 'Conception d’interfaces intuitives et esthétiques',
    rank: "Novice",
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
    title: 'Apprentissage autodidacte',
    company_name: 'HTML CSS JS',
    icon: book,
    iconBg: '#0F1226',
    date: '2014',
  },
  {
    title: 'Création site e-commerce',
    company_name: 'Prestashop',
    icon: computer,
    iconBg: '#0F1226',
    date: '2015',
  },
  {
    title: 'Formation développeur web',
    company_name: 'Openclassrooms',
    icon: diploma,
    iconBg: '#0F1226',
    date: '2018',
  },
  {
    title: 'Formation Intégrateur web',
    company_name: 'Openclassrooms',
    icon: diploma,
    iconBg: '#0F1226',
    date: '2024-2025',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Booki',
    description: 'Création de la page d\'accueil d\'une agence de voyage',
    tags: [
      {
        name: 'html',
      },
      {
        name: 'css',
      },
    ],
    image: booki,
    repo: 'https://github.com/BadBadBean/Booki',
    demo: 'https://badbadbean.github.io/Booki/',
  },
  {
    id: 'project-2',
    name: 'Ohmyfood',
    description:
      'Intégration de la maquette du site en mobile first avec implémentation d\'animations css',
    tags: [
      {
        name: 'html',
      },
      {
        name: 'animations css',
      },
      {
        name: 'sass',
      },

    ],
    image: ohmyfood,
    repo: 'https://github.com/BadBadBean/Ohmyfood',
    demo: 'https://badbadbean.github.io/Ohmyfood/',
  },
  {
    id: 'project-3',
    name: 'Nina Carducci',
    description: 'Optimisation du référencement du site grâce à une amélioration de sa performance et de son accessibilité.',
    tags: [
      {
        name: 'SEO',
      },
    ],
    image: nina,
    repo: 'https://github.com/BadBadBean/nina_carducci',
    demo: 'https://badbadbean.github.io/nina_carducci/',
  },
  {
    id: 'project-4',
    name: 'Calculateur d\'âge',
    description: 'Création d\'une application permettant aux utilisateurs de calculer facilement leur âge ',
    tags: [
      {
        name: 'react',
      },
      {
        name: 'sass',
      },
    ],
    image: calculAge,
    repo: 'https://github.com/BadBadBean/age-calculator',
    demo: 'https://badbadbean.github.io/age-calculator/',
  },
  {
    id: 'project-5',
    name: 'Pomodoro',
    description:
      'Création d\'un pomodoro permettant aux utilisateurs de définir leur temps de travail et leur temps de pause',
    tags: [
      {
        name: 'react',
      },
    ],
    image: pomodoro,
    repo: 'https://github.com/BadBadBean/pomodoro',
    demo: 'https://badbadbean.github.io/pomodoro/',
  },
];

export { services, technologies, experiences, projects };

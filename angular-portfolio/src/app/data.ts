import { Education } from './education';
import { Links } from './links';
import { Proficiencies } from './proficiency';
import { Project } from './projects';
import { Skills } from './skills';
import { AnimationOptions } from 'ngx-lottie';

// Full Name
export const FullName: string = 'Leong Kai Joon';

// Name (What you want people to address you as)
export const Name: string = 'Kai Joon';

// Relevant Links
export const RelevantLinks: Links[] = [
  {
    title: `GitHub`,
    link: `https://github.com/darwin098`,
    fontAwesomeClass: `fa fa-github`,
    bgColor: '#222222',
  },
  {
    title: `LinkedIn`,
    link: `https://www.linkedin.com/in/kai-joon-leong-baa646148/`,
    fontAwesomeClass: `fa fa-linkedin`,
    bgColor: '#1DA1F2',
  },
];

// Self-introduction
export const SelfIntro: string =
  "I'm a passionate Full Stack web developer having some experience of web applications with Javascript, HTML, CSS and some interest in Blockchain development, mainly in Ethereum (Solidity) and mobile applications with React Native.";

export const SelfIntroAnim: AnimationOptions = {
  path: '/assets/lottie/coding.json',
};

// Short intro
export const ShortIntro: string =
  'An aspiring full stack developer who wants to explore every tech stack and upcoming technologies.';

// Skills
export const skills: Skills[] = [
  {
    title: `full stack development`,
    technologies: [
      { name: `HTML 5`, icon: `vscode-icons:file-type-html` },
      { name: `CSS 3`, icon: `vscode-icons:file-type-css` },
      { name: `JavaScript`, icon: `logos:javascript` },
      { name: `NPM`, icon: `logos:npm-icon` },
    ],
    sellingPoints: [
      `⚡ Building responsive Full stack web applications with Vanilla JavaScript`,
    ],
    skillAnim: {
      path: '/assets/lottie/skills/fullstack.json',
    },
  },
  {
    title: `cloud infra-architecture`,
    technologies: [
      { name: `AWS`, icon: `logos:aws` },
      { name: `Heroku`, icon: `logos:heroku-icon` },
      { name: `PostgreSQL`, icon: `logos:postgresql` },
    ],
    sellingPoints: [
      `⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases`,
      `⚡ Building servers with SQL (PostgreSQL, MySQL, MicrosoftSQL)`,
    ],
    skillAnim: {
      path: '/assets/lottie/skills/cloudinfra.json',
    },
  },
  {
    title: `blockchain`,
    technologies: [
      { name: `Ethereum`, icon: `logos:ethereum` },
      { name: `Solidity`, icon: `logos:solidity` },
      { name: `Metamask`, icon: `logos:metamask-icon` },
      { name: `Ganache`, icon: `logos:ganache-icon` },
    ],
    sellingPoints: [
      `⚡ Experience in developing simple Smart Contract using Solidity & Ethereum`,
    ],
    skillAnim: {
      path: '/assets/lottie/skills/ethereum.json',
    },
  },
];

// Proficiency aspects and values
export const proficiency: Proficiencies[] = [
  { title: `Frontend/design`, percentage: 75 },
  { title: `Backend`, percentage: 80 },
  { title: `programming`, percentage: 70 },
];

export const ProficiencyAnim: AnimationOptions = {
  path: '/assets/lottie/build.json',
};

// Education history
export const education: Education[] = [
  {
    location: `Singapore Polytechnic`,
    purpose: `Pursuing Diploma in Information Technology`,
    startDate: `JUNE 2021`,
    endDate: `PRESENT DATE`,
    moreInfo: [`Expected to finish education by June 2024`],
  },
];

// Project history
export const Projects: Project[] = [
  {
    title: `Water Vapor`,
    description: `A 4-man project of a store template that can be reused for any e-commerce businesses.`,
    projects: [
      {
        link: `https://github.com/darwin098/ades-ay2223s1-react-2b24-team-5`,
        linkTitle: `GitHub`,
      },
      {
        link: `https://ades-team-5-react.netlify.app/`,
        linkTitle: `DEMO`,
      },
    ],
  },
  {
    title: `Asteroid Destroyer`,
    description: `An augmented reality game made using Unity3D`,
    projects: [
      {
        link: `https://drive.google.com/file/d/150NG31p5Ue8472zM-3ih8G53t47hV2zp/view`,
        linkTitle: `DEMO`,
      },
    ],
  },
];

import {
  Css as SiCss3,
  Git as SiGit,
  Html5 as SiHtml5,
  Javascript as SiJavascript,
  Mongodb as SiMongodb,
  Nodedotjs as SiNodedotjs,
  React as SiReact,
  Sqlite as SiSqlite,
  Tailwindcss as SiTailwindcss,
} from 'simple-icons-astro';

export const skills = [
  { name: 'HTML', color: '#E34F26', Icon: SiHtml5 },
  { name: 'CSS', color: '#1572B6', Icon: SiCss3 },
  { name: 'JavaScript', color: '#F7DF1E', Icon: SiJavascript },
  // { name: 'TypeScript', color: '#3178C6', Icon: SiTypescript },
  { name: 'React', color: '#61DAFB', Icon: SiReact },
  { name: 'Tailwind', color: '#06B6D4', Icon: SiTailwindcss },
  { name: 'Node.js', color: '#339933', Icon: SiNodedotjs },
  { name: 'MongoDB', color: '#47A248', Icon: SiMongodb },
  { name: 'SQLite', color: '#007ACC', Icon: SiSqlite },
  { name: 'Git', color: '#F05032', Icon: SiGit },
] as const;

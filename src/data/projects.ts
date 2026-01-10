// Optional: import images for projects
import randomStringGenerator from '#/assets/images/random-string-generator.png';

export const projects = [
  {
    year: '2024',
    title: 'Project Title',
    desc: 'Brief description of the project and technologies used.',
    tags: ['React', 'TypeScript', 'Node.js'],
    color: 'from-primary/20 to-secondary/20',
    url: '#project-1', // Optional: Live URL
    github: 'https://github.com/username/repo', // Optional: Source code
    image: randomStringGenerator,
  },
  {
    year: '2024',
    title: 'Another Project',
    desc: "Description of another amazing project you've built.",
    tags: ['Astro', 'MDX'],
    color: 'from-secondary/20 to-success/20',
    url: '/example-app',
  },
] as const;

export const certifications = [
  {
    title: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Dec 2024',
    url: '/#aws',
    type: 'embed',
  },
  {
    title: 'Google Cloud Professional',
    issuer: 'Google Cloud',
    date: 'Jul 2023',
    url: '/#google',
    type: 'embed',
  },
] as const;

export type Certification = (typeof certifications)[number];

// Profile and social links data
export const profile = {
  name: 'Venkatesh Subramanian',
  email: 'example@mail.co',
  location: 'Chennai, India',
  tagline: 'Developer crafting digital experiences with code and creativity.',
  about:
    "I'm a developer passionate about creating clean, functional, and beautiful digital experiences. With expertise in modern web technologies, I build products that matter.",
} as const;

export const socials = [
  { platform: 'github', url: 'https://github.com' },
  { platform: 'twitter', url: 'https://twitter.com' },
  { platform: 'linkedin', url: 'https://linkedin.com' },
] as const;

// Centralized site configuration for SEO and structured data
import { profile, socials } from './profile';

export const siteConfig = {
  name: profile.name,
  title: `${profile.name} | Portfolio`,
  description: profile.tagline,
  url: 'https://cht-coder.github.io',
  ogImage: '/og-image.png',
  locale: 'en_US',
  author: {
    name: profile.name,
    email: profile.email,
    jobTitle: 'Software Developer',
  },
  // Social links for sameAs in Person schema
  sameAs: socials.map((s) => s.url),
} as const;

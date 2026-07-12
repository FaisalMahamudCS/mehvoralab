export type TeamMember = {
  id: string
  name: string
  role: string
  title: string
  subtitle?: string
  bio: string
  image: string
  social?: {
    linkedin?: string
    github?: string
  }
  featured?: boolean
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'mehvira',
    name: 'Mehvira',
    role: 'Co-Founder & Director',
    title: 'CO-FOUNDER',
    subtitle: 'Director · Web Development',
    bio: 'Co-founder of Mehvora Labs, leading our web development team with creativity, strategy, and a passion for building impactful digital experiences.',
    image: '/team/mehu.png',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    featured: true,
  },
  {
    id: 'faisal',
    name: 'Faisal Mahamud',
    role: 'Founder',
    title: 'FOUNDER',
    subtitle: 'Full-Stack & AI Engineering',
    bio: 'Founder of Mehvora Labs and Senior Full-Stack / AI Engineer with 4+ years building scalable SaaS platforms, AI solutions, and cloud-native systems for startups and enterprises worldwide.',
    image: '/team/faisal.png',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    featured: true,
  },
]

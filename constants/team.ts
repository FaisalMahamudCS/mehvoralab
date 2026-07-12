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
    portfolio?: string
    email?: string
  }
  featured?: boolean
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'mehvora',
    name: 'Naeema Jannat Meherunnessa',
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
    role: 'Founder & Lead Engineer',
    title: 'FOUNDER',
    subtitle: 'AI Engineer · Full-Stack · LLM · RAG · AI Agents · AWS',
    bio: 'Applied AI Engineer and founder of Mehvora Labs with 4.5+ years building production-grade AI systems, LLM agents, RAG pipelines, and cloud-native platforms. Experienced across LangChain, LangGraph, NestJS, Python, PostgreSQL, Docker, and AWS — delivering solutions from architecture to deployment.',
    image: '/team/faisal.png',
    social: {
      email: 'faisal.mahamud.cs@gmail.com',
      portfolio: 'https://faisalmahamud.netlify.app/',
      linkedin: 'https://www.linkedin.com/in/faisalmahamud',
      github: 'https://github.com/FaisalMahamudCS',
    },
    featured: true,
  },
]

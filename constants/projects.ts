export type Project = {
  slug: string
  title: string
  description: string
  impact: string[]
  metrics: { label: string; value: string }[]
  tech: string[]
  industry: string
  image: string
  featured?: boolean
  video?: string
  liveUrl?: string
}

export const PROJECTS: Project[] = [
  {
    slug: 'enterprise-ai-assistant',
    title: 'Enterprise AI Business Assistant',
    description:
      'Enterprise AI platform for finance, operations, and executive decision-making — with CFO analytics agents, KPI monitoring, RAG over business knowledge, and natural-language reporting.',
    impact: [
      'AI agents for CFO workflows, forecasting, and operational insights',
      'RAG pipelines integrating vector databases and enterprise knowledge',
      'Workflow orchestration with LangChain and LangGraph',
      'Reduced manual reporting through natural-language data interaction',
    ],
    metrics: [
      { label: 'Daily API Volume', value: '100K+' },
      { label: 'Deploy Time', value: '-30%' },
      { label: 'Agent Workflows', value: '10+' },
    ],
    tech: ['LangChain', 'LangGraph', 'NestJS', 'PostgreSQL', 'Python', 'AWS', 'Docker'],
    industry: 'Enterprise AI',
    image: '/portfolio/enterprise-ai-assistant.jpg',
    featured: true,
  },
  {
    slug: 'ai-recruitment-automation',
    title: 'AI Recruitment Automation',
    description:
      'Autonomous multi-agent recruitment pipeline with zero manual intervention between sourcing and outreach — chained agents for sourcing, scoring, and intent classification.',
    impact: [
      'Chained AI agents (Sourcing → Scoring → Intent) via LangChain function calling',
      'Self-healing BullMQ queue with meta-validation for automatic failure recovery',
      'LLM candidate scoring 0–100 against JD with 24h Redis caching',
      'Intent classifier auto-routes replies to schedule calls or archive',
    ],
    metrics: [
      { label: 'Task Success', value: '98%+' },
      { label: 'Prior Success', value: '~65%' },
      { label: 'Agents', value: '3 chained' },
    ],
    tech: ['Node.js', 'BullMQ', 'Redis', 'MongoDB', 'LangChain', 'Groq', 'Serper API'],
    industry: 'HR Tech',
    image: '/portfolio/ai-recruitment-automation.jpg',
    featured: true,
  },
  {
    slug: 'agrigate-marketplace',
    title: 'Agrigate Multi-Vendor E-Commerce',
    description:
      'Next-generation agricultural marketplace with AI-driven recommendations, real-time price data, vendor-buyer chat, and an Agrigate AI agent for agriculture insights.',
    impact: [
      'AI-powered vendor-buyer matching and marketplace intelligence',
      'Secure multi-vendor payment flows and admin analytics',
      'Real-time agricultural data and chatbot integration',
      'Scalable NestJS APIs serving 100K+ requests/day',
    ],
    metrics: [
      { label: 'Vendors', value: '500+' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'API Latency', value: '<200ms' },
    ],
    tech: ['Next.js', 'NestJS', 'PostgreSQL', 'MongoDB', 'LangChain', 'FastAPI', 'AWS'],
    industry: 'Agriculture',
    image: '/portfolio/agrigate-marketplace.jpg',
    featured: true,
  },
  {
    slug: 'agrigate-network-website',
    title: 'Agrigate Network Website',
    description:
      'Digital marketplace website with AI-powered insights, educational hub, smart supply chain features, and real-time auctions — built with interactive animations and CMS-driven content.',
    impact: [
      'AI-powered market insights and educational content hub',
      'Strapi CMS for dynamic content management',
      'Automated CI/CD for seamless releases',
      'Real-time auction and supply chain features',
    ],
    metrics: [
      { label: 'Page Load', value: '<2s' },
      { label: 'CMS Modules', value: '15+' },
      { label: 'Deployments', value: 'Automated' },
    ],
    tech: ['Next.js', 'LangChain', 'Strapi', 'AWS S3', 'CI/CD', 'Tailwind CSS'],
    industry: 'Agriculture',
    image: '/portfolio/agrigate-network-website.jpg',
    video: '/portfolio/videos/agrigate-website.mp4',
  },
  {
    slug: 'poultry-ai-monitoring',
    title: 'AI Smart Farming & Poultry Monitoring',
    description:
      'AI-powered smart farming platform using IoT, computer vision, and edge AI for real-time poultry monitoring — with disease detection, mortality forecasting, and environmental alerts.',
    impact: [
      'YOLO-based computer vision for real-time poultry monitoring',
      'Predictive models for disease detection and mortality forecasting',
      'Environmental monitoring (temperature, humidity, NH₃)',
      'Automated alerts and real-time operational dashboards',
    ],
    metrics: [
      { label: 'Accuracy', value: '94%' },
      { label: 'Edge Devices', value: '50+' },
      { label: 'Data Points', value: '1M+/day' },
    ],
    tech: ['Python', 'FastAPI', 'OpenCV', 'YOLO', 'PostgreSQL', 'AWS', 'Docker'],
    industry: 'Agriculture',
    image: '/portfolio/poultry-ai-monitoring.jpg',
    featured: true,
  },
  {
    slug: 'twin-flow-ai',
    title: 'Twin Flow — Cardiac Rhythm Platform',
    description:
      'HIPAA-compliant healthcare platform with AI-driven cardiac rhythm analysis, real-time alerts, MIS dashboards, and remote patient health monitoring for providers and logistics teams.',
    impact: [
      'MIS dashboards for Super Admin, Doctor, Technician, and Logistics',
      'AI/ML cardiac rhythm analysis with real-time alerts',
      '20% workflow efficiency improvement across care teams',
      'Multi-tenant backend with optimized PostgreSQL performance (+60%)',
    ],
    metrics: [
      { label: 'Efficiency Gain', value: '+20%' },
      { label: 'Query Performance', value: '+60%' },
      { label: 'Compliance', value: 'HIPAA' },
    ],
    tech: ['React.js', 'Node.js', 'PostgreSQL', 'Python', 'Docker', 'AWS', 'Socket.IO'],
    industry: 'Healthcare',
    image: '/portfolio/twin-flow-ai.jpg',
  },
  {
    slug: 'muslim-bangla',
    title: 'Muslim Bangla',
    description:
      'Large-scale Islamic content and community platform for Bengali-speaking users — Quran, Hadith, prayer times, and millions of active users worldwide.',
    impact: [
      'Cross-platform Islamic content delivery at scale',
      'Quran audio recitations and Qibla direction',
      'Prayer notification system for millions of users',
      'Secure multi-tenant backend architecture',
    ],
    metrics: [
      { label: 'Active Users', value: '1M+' },
      { label: 'Platforms', value: 'Web + App' },
      { label: 'Availability', value: '99.9%' },
    ],
    tech: ['Node.js', 'Next.js', 'PostgreSQL', 'MySQL', 'AWS', 'Docker'],
    industry: 'Education',
    image: '/portfolio/muslim-bangla.jpg',
  },
  {
    slug: 'melbourne-limolink',
    title: 'Melbourne Limolink',
    description:
      'Premium chauffeur service platform with real-time booking, fleet management, and role-based dashboards for admins, drivers, and customers.',
    impact: [
      'Real-time booking and dispatch system',
      'Payment and map API integration',
      'Multi-role admin dashboards',
      'Built for TopOfStack alongside EasyTrax platforms',
    ],
    metrics: [
      { label: 'Bookings', value: '10K+' },
      { label: 'Fleet Size', value: '50+' },
      { label: 'Response Time', value: '<3s' },
    ],
    tech: ['Next.js', 'Node.js', 'MongoDB', 'PayPal', 'Strapi', 'AWS'],
    industry: 'Travel',
    image: '/portfolio/melbourne-limolink.jpg',
  },
  {
    slug: 'ducorp-trading',
    title: 'Ducorp Trading Website',
    description:
      'High-performance corporate website for a UAE-based trading company with server-side rendering, global CDN delivery, and AWS load balancing with auto-scaling.',
    impact: [
      'Next.js SSR for SEO and performance',
      'Global CDN delivery via CloudFront',
      'AWS ALB with auto-scaling architecture',
      'GSAP and Framer Motion interactive animations',
    ],
    metrics: [
      { label: 'Page Load', value: '<1.5s' },
      { label: 'Lighthouse', value: '95+' },
      { label: 'Regions', value: 'Global' },
    ],
    tech: ['Next.js', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'AWS EC2', 'CloudFront', 'Nginx'],
    industry: 'Business',
    image: '/portfolio/ducorp-trading.jpg',
    video: '/portfolio/videos/ducorp.mp4',
  },
  {
    slug: 'agrigate-erp',
    title: 'Agrigate ERP',
    description:
      'Comprehensive ERP for agriculture business with AI-assisted inventory forecasting, requisition management, and role-based dashboards.',
    impact: [
      '25% reduction in stock-outs via AI forecasting',
      '80% cloud cost reduction through optimization',
      'Inventory, stock, and requisition modules',
      'Django REST + React admin dashboards',
    ],
    metrics: [
      { label: 'Stock-out Reduction', value: '25%' },
      { label: 'Cost Savings', value: '80%' },
      { label: 'Modules', value: '12+' },
    ],
    tech: ['Django', 'React', 'PostgreSQL', 'AWS', 'Docker', 'CI/CD'],
    industry: 'Agriculture',
    image: '/portfolio/agrigate-erp.jpg',
  },
  {
    slug: 'permisgo',
    title: 'Permisgo Driving School',
    description:
      'Driving school platform with dynamic scheduling, student/instructor portals, and secure payment integration.',
    impact: [
      'Role-specific student and instructor portals',
      'Progress tracking and scheduling',
      'Secure payment processing',
      'Prisma + PostgreSQL optimized data layer',
    ],
    metrics: [
      { label: 'Students', value: '2K+' },
      { label: 'Instructors', value: '50+' },
      { label: 'Uptime', value: '99.5%' },
    ],
    tech: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'Strapi', 'AWS'],
    industry: 'Education',
    image: '/portfolio/permisgo.jpg',
  },
]

export const PORTFOLIO_SHOWREEL = '/portfolio/videos/portfolio-showreel.mp4'
export const PORTFOLIO_SHOWREEL_POSTER = '/portfolio/enterprise-ai-assistant.jpg'

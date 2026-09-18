export type PageRoute =
  | 'home'
  | 'team'
  | 'case-study'
  | 'digital-marketing-approach'
  | 'reviews'
  | 'portfolio'
  | 'digital-marketing-blogs'
  | 'book-a-consultation';

export interface ServicePillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  deliverables: string[];
  metricLabel: string;
  metricValue: string;
  visualType: 'brand' | 'experience' | 'growth' | 'technology';
}

export interface GrowthStage {
  step: string;
  name: string;
  headline: string;
  challenge: string;
  transformation: string;
  deliverables: string[];
  metric: string;
  iconName: string;
  visualTheme: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  category: 'Healthcare' | 'EdTech' | 'B2B' | 'Consumer' | 'Enterprise';
  challenge: string;
  solution: string;
  impactHighlight: string;
  impactSecondary: string;
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  imageUrl: string;
  featuredQuote?: string;
  clientPerson?: string;
  resultsDetailed?: string[];
  scopeDuration?: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  detail: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  industry: string;
  imageUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  credentials: string;
  experience: string;
  bio: string;
  specialties: string[];
  imageUrl: string;
  linkedinUrl?: string;
  quote?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  position: string;
  company: string;
  industry: string;
  rating: number;
  date: string;
  source: 'Google Reviews' | 'Clutch' | 'GoodFirms' | 'Direct Client';
  reviewText: string;
  impactMetric?: string;
  avatarUrl: string;
  verified: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: 'Lead Generation' | 'Branding' | 'Technology' | 'SEO & Content';
  industry: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  metricHighlight: string;
  imageUrl: string;
  liveUrl?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: 'SEO & AI' | 'Performance Marketing' | 'Healthcare' | 'Automation' | 'Analytics';
  readTime: string;
  publishDate: string;
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  imageUrl: string;
  content: string[];
  tags: string[];
}


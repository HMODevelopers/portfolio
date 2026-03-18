export interface NavItem {
  id: string;
  label: string;
}

export interface HeroMetric {
  value: string;
  label: string;
}

export interface HighlightItem {
  title: string;
  description: string;
}

export interface TechCategory {
  title: string;
  description: string;
  items: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  type: string;
  summary: string;
  responsibilities: string[];
  impact: string[];
}

export interface ProjectItem {
  name: string;
  role: string;
  timeline: string;
  description: string;
  problem: string;
  impact: string;
  technologies: string[];
  highlights: string[];
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

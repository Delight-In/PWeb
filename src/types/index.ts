export type AreaOfInterest = 
  | 'Resource Intelligence'
  | 'IT Services & Digital Transformation'
  | 'Energy Advisory'
  | 'TRIAXIS Consortium Partnership'
  | 'Full Enterprise Suite';

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  areaOfInterest: AreaOfInterest;
  message: string;
}

export interface DemoRequestData {
  name: string;
  email: string;
  company: string;
  phone: string;
  preferredDate?: string;
  resourcePillars: string[];
}

export interface InsightArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  category: 'Resource Intelligence' | 'IT Services' | 'Energy Efficiency' | 'OT Security';
  readTime: string;
  date: string;
  author: string;
  tags: string[];
}

export interface IndustrySector {
  id: string;
  title: string;
  badge: string;
  heroSnippet: string;
  challenges: string[];
  solutions: string[];
  keyMetrics: { label: string; value: string; desc: string }[];
  caseSnippet: string;
}

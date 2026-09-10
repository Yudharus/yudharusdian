export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: 'mobile' | 'web';
  type: string;
  year: string;
  description: string;
  longDescription?: string;
  image: string;
  video?: string;
  metrics?: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

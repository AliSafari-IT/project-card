export interface TechStackItem {
  name: string;
  color?: any ;
  icon?: any;
}

export interface ProjectLink {
  type: 'demo' | 'repo' | 'documentation' | 'custom';
  url: string;
  label?: string;
}

export type Theme = 'light' | 'dark' | 'auto';

export interface ProjectImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface ProjectCardProps {
  title: string;
  image?: string | ProjectImage;
  description: string;
  techStacks?: TechStackItem[];
  links: ProjectLink[];
  currentTheme?: Theme;
  className?: string;
  onCardClick?: () => void;
  showTechStackIcons?: boolean;
  maxDescriptionLength?: number;
  imageAlt?: string;
  isLoading?: boolean;
  featured?: boolean;
  lastUpdated?: string;
  status?: 'active' | 'draft' | 'archived' | 'completed' | 'in-progress' | 'coming-soon';
}
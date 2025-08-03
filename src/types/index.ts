import { ReactNode } from "react";

export interface TechStackItem {
  name: string;
  color?: string;
  icon?: string | ReactNode;
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

export interface ProjectTag {
  name: string;
  onClick?: () => void;
  navigateTo?: string;
}

export interface ProjectCardProps {
  // Core properties
  title: string;
  image?: string | ProjectImage;
  description: string;
  techStacks?: TechStackItem[];
  links: ProjectLink[];
  thumbnailUrl?: string;
  repositoryUrl?: string;
  liveUrl?: string;
  
  // Theming and appearance
  currentTheme?: Theme;
  className?: string;
  showTechStackIcons?: boolean;
  maxDescriptionLength?: number;
  imageAlt?: string;
  featured?: boolean;
  
  // Behavior
  onCardClick?: () => void;
  isLoading?: boolean;
  
  // Status and metadata
  status?: 'active' | 'draft' | 'archived' | 'completed' | 'in-progress' | 'coming-soon' | 'planning';
  lastUpdated?: string;
  
  // Additional properties from your DB model
  priority?: string;
  progress?: number;
  tags?: ProjectTag[];
  startDate?: string;
  endDate?: string;
  dueDate?: string;
  budget?: number;
  isPublic?: boolean;
  
  // Database specific
  id?: string;
  userId?: string;
  createdAt?: string;
  updatedAt?: string;
}
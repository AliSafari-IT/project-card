import { ProjectCardProps, ProjectLink } from '../types';

/**
 * Maps a project from the database to the format expected by ProjectCard component
 */
export function mapProject(project: ProjectCardProps): ProjectCardProps {
  // Build links array from available URLs
  const links: ProjectLink[] = [];
  
  if (project.liveUrl) {
    links.push({
      type: 'demo',
      url: project.liveUrl,
      label: 'Live Demo'
    });
  }
  
  if (project.repositoryUrl) {
    links.push({
      type: 'repo',
      url: project.repositoryUrl,
      label: 'Repository'
    });
  }

  // Map status from DB to component status
  const statusMap: Record<string, ProjectCardProps['status']> = {
    'Planning': 'planning',
    'Active': 'active',
    'In Progress': 'in-progress',
    'Completed': 'completed',
    'Archived': 'archived',
    'Draft': 'draft'
  };

  return {
    // Core properties
    id: project.id,
    title: project.title,
    description: project.description || '',
    image: project.thumbnailUrl ? {
      src: project.thumbnailUrl,
      alt: project.title
    } : undefined,
    techStacks: project.techStacks || [],
    links,
    // Status and metadata
    status: statusMap[project.status as string] || 'active',
    featured: project.featured,
    lastUpdated: project.updatedAt,
    
    // Additional properties from DB
    priority: project.priority,
    progress: project.progress,
    tags: project.tags,
    startDate: project.startDate,
    endDate: project.endDate,
    dueDate: project.dueDate,
    budget: project.budget,
    isPublic: project.isPublic,
    userId: project.userId,
    createdAt: project.createdAt,
    updatedAt: project.updatedAt
  };
}

/**
 * Maps multiple projects from database to ProjectCard format
 */
export function mapProjects(projects: ProjectCardProps[]): ProjectCardProps[] {
  return projects.map(mapProject);
}

/**
 * Filters projects by visibility (public/private)
 */
export function filterPublicProjects(projects: ProjectCardProps[]): ProjectCardProps[] {
  return projects.filter(project => project.isPublic);
}

/**
 * Sorts projects by featured status and creation date
 */
export function sortProjects(projects: ProjectCardProps[]): ProjectCardProps[] {
  return projects.sort((a, b) => {
    // Featured projects first
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    
    // Then by creation date (newest first)
    if (a.createdAt && b.createdAt) {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    
    return 0;
  });
} 
import React, { useState, useEffect } from 'react';
import { 
  ProjectCard, 

  ProjectCardProps, 

  filterPublicProjects, 
  sortProjects 
} from '@asafarim/project-card';

// Example API call function
async function fetchProjects(): Promise<ProjectCardProps[]> {
  try {
    const response = await fetch('/api/projects');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to load projects:', error);
    return exampleApiResponse;
  }
}

// Example component using database data
export function ProjectsPage() {
  const [projects, setProjects] = useState<ProjectCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await fetchProjects();
        
        // Filter public projects and sort them
        const publicProjects = filterPublicProjects(data);
        const sortedProjects = sortProjects(publicProjects);
        
        setProjects(sortedProjects);
      } catch (error) {
        console.error('Failed to load projects:', error);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  const handleCardClick = (projectId: string) => {
    console.log('Clicked project:', projectId);
    // Navigate to project details or open modal
  };

  if (loading) {
    return <div>Loading projects...</div>;
  }

  // Map database projects to ProjectCard format
  const projectCards = projects;

  return (
    <div className={`projects-page ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <div className="theme-toggle">
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </div>

      <div className="projects-grid">
        {projectCards.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
            currentTheme={theme}
            showTechStackIcons={true}
            maxDescriptionLength={150}
            onCardClick={() => handleCardClick(project.id!)}
          />
        ))}
      </div>
    </div>
  );
}

// Example of how your API response might look
const exampleApiResponse: ProjectCardProps[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, shopping cart, and payment integration.",
    status: "active",
    priority: "high",
    progress: 75,
    tags: [
      { name: "react" },
      { name: "node.js" },
      { name: "mongodb" }
    ],
    image: {
      src: "https://picsum.photos/400/200?random=1",
      alt: "E-commerce Platform"
    },
    links: [
      { type: "demo", url: "https://ecommerce-demo.com", label: "Live Demo" },
      { type: "repo", url: "https://github.com/user/ecommerce", label: "E-commerce Repository" }
    ],
    isPublic: true,
    isFeatured: true,
    userId: "user-123",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-20T15:30:00Z",
    techStacks: [
      { name: "React", color: "#61dafb", icon: "⚛️" },
      { name: "Node.js", color: "#339933", icon: "🟢" },
      { name: "MongoDB", color: "#47A248", icon: "🍃" }
    ]
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    status: "in-progress",
    priority: "medium",
    progress: 45,
    tags: [
      { name: "react" },
      { name: "firebase" },
      { name: "material-ui" }
    ],
    image: {
      src: "https://picsum.photos/400/200?random=2",
      alt: "Task Management App"
    },
    links: [
      { type: "demo", url: "https://task-app-demo.com", label: "Live Demo" },
      { type: "repo", url: "https://github.com/user/task-app", label: "Task App Repository" }
    ],
    isPublic: true,
    isFeatured: false,
    userId: "user-123",
    createdAt: "2024-01-10T09:00:00Z",
    updatedAt: "2024-01-18T12:00:00Z",
    techStacks: [
      { name: "React", color: "#61dafb", icon: "⚛️" },
      { name: "Firebase", color: "#FFCA28", icon: "🔥" },
      { name: "Material-UI", color: "#0081CB", icon: "🎨" }
    ]
  }
]; 
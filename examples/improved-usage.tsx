import React, { useState } from 'react';
import { ProjectCard, ProjectCardProps } from '@asafarim/project-card';

// Example of using the improved ProjectCard with database properties
export function ImprovedProjectCardExample() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const sampleProject: ProjectCardProps = {
    id: "1",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, shopping cart, and payment integration using React and Node.js.",
    image: {
      src: "https://picsum.photos/400/200?random=1",
      alt: "E-commerce Platform"
    },
    techStacks: [
      { name: "React", color: "#61dafb", icon: "⚛️" },
      { name: "Node.js", color: "#339933", icon: "🟢" },
      { name: "MongoDB", color: "#47A248", icon: "🍃" }
    ],
    links: [
      { type: "demo", url: "https://ecommerce-demo.com", label: "Live Demo" },
      { type: "repo", url: "https://github.com/user/ecommerce" }
    ],
    status: "active",
    featured: true,
    priority: "High",
    progress: 75,
    tags: ["React", "Node.js", "MongoDB", "E-commerce"],
    startDate: "2024-01-15",
    dueDate: "2024-03-15",
    budget: 5000,
    isPublic: true,
    lastUpdated: "2024-01-20"
  };

  const handleCardClick = () => {
    console.log('Project clicked:', sampleProject.id);
  };

  return (
    <div className={`example-container ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <div className="theme-toggle">
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </div>

      <div className="project-card-demo">
        <h2>Improved ProjectCard with Database Properties</h2>
        <p>This example shows the enhanced ProjectCard with progress bar, tags, metadata, and more.</p>
        
        <ProjectCard
          {...sampleProject}
          currentTheme={theme}
          showTechStackIcons={true}
          maxDescriptionLength={150}
          onCardClick={handleCardClick}
        />
      </div>
    </div>
  );
}

// Example with multiple projects showing different statuses
export function MultipleProjectsExample() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const projects: ProjectCardProps[] = [
    {
      id: "1",
      title: "Active Project",
      description: "This is an active project with high priority and good progress.",
      status: "active",
      priority: "High",
      progress: 75,
      tags: ["React", "TypeScript"],
      featured: true,
      techStacks: [
        { name: "React", color: "#61dafb", icon: "⚛️" },
        { name: "TypeScript", color: "#3178c6", icon: "📘" }
      ],
      links: [
        { type: "demo", url: "https://demo.com" },
        { type: "repo", url: "https://github.com/user/repo" }
      ]
    },
    {
      id: "2",
      title: "In Progress Project",
      description: "This project is currently in progress with medium priority.",
      status: "in-progress",
      priority: "Medium",
      progress: 45,
      tags: ["Vue.js", "Firebase"],
      techStacks: [
        { name: "Vue.js", color: "#42b883", icon: "💚" },
        { name: "Firebase", color: "#FFCA28", icon: "🔥" }
      ],
      links: [
        { type: "repo", url: "https://github.com/user/vue-project" }
      ]
    },
    {
      id: "3",
      title: "Planning Project",
      description: "This project is in the planning phase with low priority.",
      status: "planning",
      priority: "Low",
      progress: 10,
      tags: ["Planning", "Research"],
      techStacks: [
        { name: "Next.js", color: "#000000", icon: "▲" }
      ],
      links: []
    }
  ];

  return (
    <div className={`example-container ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <div className="theme-toggle">
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
            currentTheme={theme}
            showTechStackIcons={true}
            maxDescriptionLength={120}
            onCardClick={() => console.log('Clicked:', project.id)}
          />
        ))}
      </div>
    </div>
  );
} 
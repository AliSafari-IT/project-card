import React, { useState } from 'react';
import { ProjectCard, ProjectCardProps } from '@asafarim/project-card';

// Example of using the improved ProjectCard with database properties
export function ImprovedProjectCardExample({ theme: externalTheme, hideLocalToggle }: { theme?: 'light' | 'dark'; hideLocalToggle?: boolean }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const effectiveTheme = externalTheme ?? theme;

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
      { type: "repo", url: "https://github.com/user/ecommerce", label: "E-commerce Repository" }
    ],
    status: "active",
    isFeatured: true,
    priority: "high",
    progress: 75,
    tags: [
      { name: "react", navigateTo: "https://reactjs.org" },
      { name: "node.js", navigateTo: "https://nodejs.org" },
      { name: "mongodb", onClick: () => alert("MongoDB clicked") }
    ],
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
    <div className={`example-container ${effectiveTheme === 'dark' ? 'dark-theme' : ''}`}>
      {!hideLocalToggle && externalTheme === undefined && (
        <div className="theme-toggle">
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
          </button>
        </div>
      )}

      <div className="project-card-demo">
        <h2>Improved ProjectCard with Database Properties</h2>
        <p>This example shows the enhanced ProjectCard with progress bar, tags, metadata, and more.</p>
        
        <ProjectCard
          {...sampleProject}
          currentTheme={effectiveTheme}
          showTechStackIcons={true}
          maxDescriptionLength={150}
          onCardClick={handleCardClick}
        />
      </div>
    </div>
  );
}

// Example with multiple projects showing different statuses
export function MultipleProjectsExample({ theme: externalTheme, hideLocalToggle }: { theme?: 'light' | 'dark'; hideLocalToggle?: boolean }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const effectiveTheme = externalTheme ?? theme;

  const projects: ProjectCardProps[] = [
    {
      id: "1",
      title: "Active Project",
      description: "This is an active project with high priority and good progress.",
      status: "active",
      priority: "high",
      progress: 75,
      tags: [
        { name: "react" },
        { name: "typescript" }
      ],
      isFeatured: true,
      techStacks: [
        { name: "react", color: "#61dafb", icon: "⚛️" },
        { name: "TypeScript", color: "#3178c6", icon: "📘" }
      ],
      links: [
        { type: "demo", url: "https://demo.com", label: "Demo" },
        { type: "repo", url: "https://github.com/user/repo", label: "Repository" }
      ]
    },
    {
      id: "2",
      title: "In Progress Project",
      description: "This project is currently in progress with medium priority.",
      status: "in-progress",
      priority: "medium",
      progress: 45,
      tags: [
        { name: "vue.js" },
        { name: "firebase" }
      ],
      techStacks: [
        { name: "vue.js", color: "#42b883", icon: "💚" },
        { name: "firebase", color: "#FFCA28", icon: "🔥" }
      ],
      links: [
        { type: "repo", url: "https://github.com/user/vue-project", label: "Repository" }
      ]
    },
    {
      id: "3",
      title: "Planning Project",
      description: "This project is in the planning phase with low priority.",
      status: "planning",
      priority: "low",
      progress: 10,
      tags: [
        { name: "Planning" },
        { name: "Research" }
      ],
      techStacks: [
        { name: "Next.js", color: "#000000", icon: "▲" }
      ],
      links: [
        { type: "repo", url: "https://github.com/user/vue-project", label: "Repository" }
      ]
    }
  ];

  return (
    <div className={`example-container ${effectiveTheme === 'dark' ? 'dark-theme' : ''}`}>
      {!hideLocalToggle && externalTheme === undefined && (
        <div className="theme-toggle">
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
          </button>
        </div>
      )}

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
            currentTheme={effectiveTheme}
            showTechStackIcons={true}
            maxDescriptionLength={120}
            onCardClick={() => console.log('Clicked:', project.id)}
          />
        ))}
      </div>
    </div>
  );
}
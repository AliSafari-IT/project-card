import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProjectCard, applyProjectCardTheme } from '@asafarim/project-card';
import { DisplayCode } from '@asafarim/display-code';
import { PackageLinks } from '@asafarim/shared';
import { useTheme } from '@asafarim/react-themes';
import { SiteNav } from './SiteNav';
import { RoadmapPage } from './RoadmapPage';
import { HowToPage } from './HowToPage';
import { ExamplesPage } from './ExamplesPage';
import { sampleProjects } from './mockData';

function HomePage() {
  const { resolvedMode } = useTheme();
  const theme = resolvedMode === 'dark' ? 'dark' : 'light';
  const [showLoadingDemo, setShowLoadingDemo] = useState(false);

  // Keep the lib's CSS custom properties in sync with the resolved theme
  useEffect(() => {
    try {
      applyProjectCardTheme(theme);
    } catch {}
  }, [theme]);

  const handleCardClick = (title: string) => {
    alert(`Clicked on: ${title}`);
  };

  return (
    <div className={`demo-container ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <div className="demo-header">
        <h1>@asafarim/project-card</h1>
        <p>A powerful and flexible React component for displaying project cards</p>
        <PackageLinks packageName="@asafarim/project-card" githubPath="project-card" demoPath="project-card" />
      </div>

      <div className="demo-section">
        <h2>🛠️ Getting Started</h2>
        <p>First, install the package using your preferred package manager:</p>
        <DisplayCode
          code={`npm install @asafarim/project-card

# or with yarn
yarn add @asafarim/project-card

# or with pnpm  
pnpm add @asafarim/project-card`}
          language="bash"
          theme={theme}
          title="Installation"
          showCopyButton={true}
        />
      </div>

      <div className="demo-section">
        <h2>🚀 Features</h2>
        <div className="features-list">
          <div className="feature-item">
            <h3>🌓 Theme Support</h3>
            <p>Built-in support for light and dark themes with smooth transitions</p>
          </div>
          <div className="feature-item">
            <h3>📱 Responsive Design</h3>
            <p>Fully responsive layout that works on all device sizes</p>
          </div>
          <div className="feature-item">
            <h3>🎨 Customizable</h3>
            <p>Extensive customization options for colors, spacing, and behavior</p>
          </div>
          <div className="feature-item">
            <h3>🔗 Multiple Link Types</h3>
            <p>Support for demo, repo, documentation, and custom links</p>
          </div>
          <div className="feature-item">
            <h3>🏷️ Status Indicators</h3>
            <p>Visual status indicators for active, archived, in-progress, planning, and draft projects</p>
          </div>
          <div className="feature-item">
            <h3>📊 Progress Tracking</h3>
            <p>Animated progress bars showing project completion percentage</p>
          </div>
          <div className="feature-item">
            <h3>🏷️ Tag System</h3>
            <p>Display project tags with modern styling and hover effects</p>
          </div>
          <div className="feature-item">
            <h3>💰 Budget & Metadata</h3>
            <p>Show priority, budget, start/end dates, and other project details</p>
          </div>
          <div className="feature-item">
            <h3>🗄️ Database Integration</h3>
            <p>Direct support for database models with mapping utilities</p>
          </div>
          <div className="feature-item">
            <h3>⚡ Performance</h3>
            <p>Optimized with lazy loading and efficient rendering</p>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>📋 Basic Usage</h2>
        <p>Here's how easy it is to use the ProjectCard component:</p>
        <div className="howto-card__split">
          <div className="howto-card__code">
            <DisplayCode
              code={`import { ProjectCard } from '@asafarim/project-card';

<ProjectCard
  title="My Awesome Project"
  description="A description of my project"
  techStacks={[
    { name: 'React', color: '#61dafb', icon: '⚛️' },
    { name: 'TypeScript', color: '#3178c6', icon: '📘' }
  ]}
  links={[
    { type: 'demo', url: 'https://demo.com' },
    { type: 'repo', url: 'https://github.com/user/repo' }
  ]}
  currentTheme="light"
  onCardClick={() => console.log('Card clicked!')}
/>`}
              language="jsx"
              theme={theme}
              title="Basic Usage Example"
              showLineNumbers={true}
              showCopyButton={true}
            />
          </div>
          <div className="howto-card__preview">
            <div className="howto-card__preview-inner">
              <ProjectCard
                title="My Awesome Project"
                description="A description of my project"
                techStacks={[
                  { name: 'React', color: '#61dafb', icon: '⚛️' },
                  { name: 'TypeScript', color: '#3178c6', icon: '📘' }
                ]}
                links={[
                  { type: 'demo', url: 'https://demo.com', label: 'Demo' },
                  { type: 'repo', url: 'https://github.com/user/repo', label: 'Repository' }
                ]}
                currentTheme={theme}
                onCardClick={() => handleCardClick('My Awesome Project')}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>🚀 Advanced Features</h2>
        <p>Showcase all the powerful features with comprehensive project data:</p>
        <div className="howto-card__split">
          <div className="howto-card__code">
            <DisplayCode
              code={`import { ProjectCard } from '@asafarim/project-card';

<ProjectCard
  id="1"
  title="E-commerce Platform"
  description="A full-stack e-commerce platform with user authentication..."
  image={{
    src: "https://picsum.photos/400/200?random=1",
    alt: "E-commerce Platform"
  }}
  techStacks={[
    { name: 'React', color: '#61dafb', icon: '⚛️' },
    { name: 'Node.js', color: '#339933', icon: '🟢' },
    { name: 'MongoDB', color: '#47A248', icon: '🍃' }
  ]}
  links={[
    { type: 'demo', url: 'https://ecommerce-demo.com', label: 'Live Demo' },
    { type: 'repo', url: 'https://github.com/user/ecommerce' }
  ]}
  status="active"
  isFeatured={true}
  priority="high"
  progress={85}
  tags={[{ name: 'E-commerce' }, { name: 'React' }]}
  startDate="2024-01-15"
  dueDate="2024-03-15"
  budget={15000}
  isPublic={true}
  currentTheme="light"
  showTechStackIcons={true}
  maxDescriptionLength={150}
  onCardClick={() => console.log('Project clicked!')}
/>`}
              language="jsx"
              theme={theme}
              title="Advanced Usage Example"
              showLineNumbers={true}
              showCopyButton={true}
            />
          </div>
          <div className="howto-card__preview">
            <div className="howto-card__preview-inner">
              <ProjectCard
                {...sampleProjects[0]}
                currentTheme={theme}
                showTechStackIcons={true}
                maxDescriptionLength={150}
                onCardClick={() => handleCardClick(sampleProjects[0].title)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>🗄️ Database Integration</h2>
        <p>Seamlessly integrate with your database using the mapping utilities:</p>
        <DisplayCode
          code={`import { 
  ProjectCard, 
  mapProject, 
  mapProjects, 
  filterPublicProjects, 
  sortProjects 
} from '@asafarim/project-card';

// Fetch data from your API
const projects = await fetch('/api/projects').then(res => res.json());

// Filter and sort projects
const publicProjects = filterPublicProjects(projects);
const sortedProjects = sortProjects(publicProjects);

// Map to ProjectCard format
const projectCards = mapProjects(sortedProjects);

// Render the cards
{projectCards.map((project) => (
  <ProjectCard
    key={project.id}
    {...project}
    currentTheme={theme}
    showTechStackIcons={true}
    onCardClick={() => handleCardClick(project.id!)}
  />
))}`}
          language="jsx"
          theme={theme}
          title="Database Integration Example"
          showLineNumbers={true}
          showCopyButton={true}
        />
      </div>

      <div className="demo-section">
        <h2>🎯 Live Examples</h2>
        <p>Click on any card to see the onClick handler in action! These examples showcase all the new features including progress bars, tags, metadata, and different project statuses:</p>
        <div className="demo-grid">
          {sampleProjects.map((project, index) => (
            <ProjectCard
              key={project.id || index}
              {...project}
              currentTheme={theme}
              showTechStackIcons={true}
              maxDescriptionLength={150}
              onCardClick={() => handleCardClick(project.title)}
            />
          ))}
        </div>
      </div>

      <div className="demo-section">
        <h2>📊 Status Types</h2>
        <p>The component supports various project statuses with different visual indicators:</p>
        <div className="status-examples">
          <div className="status-item">
            <h4>🟢 Active</h4>
            <p>Currently in development and actively maintained</p>
          </div>
          <div className="status-item">
            <h4>🟡 In Progress</h4>
            <p>Work is ongoing but not yet complete</p>
          </div>
          <div className="status-item">
            <h4>🔵 Completed</h4>
            <p>Project has been finished and deployed</p>
          </div>
          <div className="status-item">
            <h4>📋 Planning</h4>
            <p>Project is in the planning and research phase</p>
          </div>
          <div className="status-item">
            <h4>📝 Draft</h4>
            <p>Project is in early development or concept stage</p>
          </div>
          <div className="status-item">
            <h4>📦 Archived</h4>
            <p>Project is no longer active or maintained</p>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>⏳ Loading State</h2>
        <p>The component includes a beautiful loading state animation:</p>
        <div className="theme-toggle">
          <button onClick={() => setShowLoadingDemo(!showLoadingDemo)}>
            {showLoadingDemo ? 'Hide' : 'Show'} Loading Demo
          </button>
        </div>
        {showLoadingDemo && (
          <div className="demo-single">
            <div
              style={{
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '1rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                backgroundColor: theme === 'dark' ? '#1a202c' : '#ffffff',
                width: '100%',
                maxWidth: '400px',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  height: '200px',
                  marginBottom: '1rem',
                  borderRadius: '4px',
                  background: theme === 'dark'
                    ? 'linear-gradient(90deg, #333 25%, #444 50%, #333 75%)'
                    : 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                  backgroundSize: '200% 100%',
                  animation: 'loading 1.5s infinite',
                  width: '100%'
                }}
              />
              <div
                style={{
                  height: '1.5rem',
                  marginBottom: '0.75rem',
                  borderRadius: '4px',
                  background: theme === 'dark'
                    ? 'linear-gradient(90deg, #333 25%, #444 50%, #333 75%)'
                    : 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                  backgroundSize: '200% 100%',
                  animation: 'loading 1.5s infinite',
                  width: '70%'
                }}
              />
              <div
                style={{
                  height: '3rem',
                  marginBottom: '1rem',
                  borderRadius: '4px',
                  background: theme === 'dark'
                    ? 'linear-gradient(90deg, #333 25%, #444 50%, #333 75%)'
                    : 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                  backgroundSize: '200% 100%',
                  animation: 'loading 1.5s infinite',
                  width: '100%'
                }}
              />
              <div
                style={{
                  height: '2rem',
                  borderRadius: '4px',
                  background: theme === 'dark'
                    ? 'linear-gradient(90deg, #333 25%, #444 50%, #333 75%)'
                    : 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                  backgroundSize: '200% 100%',
                  animation: 'loading 1.5s infinite',
                  width: '40%'
                }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="demo-section">
        <h2>🎨 Featured Cards</h2>
        <p>Make important projects stand out with the featured prop:</p>
        <div className="demo-single">
          <ProjectCard
            title="Featured Project"
            description="This is a featured project card with special styling to make it stand out from regular cards."
            image="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=400&h=200"
            techStacks={[
              { name: 'React', color: '#61dafb', icon: '⚛️' },
              { name: 'Next.js', color: 'rgb(207, 160, 209)', icon: '▲' },
              { name: 'Tailwind', color: '#06b6d4', icon: '🎨' }
            ]}
            links={[
              { type: 'demo', url: 'https://featured-demo.com', label: 'Live Demo' },
              { type: 'repo', url: 'https://github.com/user/featured', label: 'Repository' }
            ]}
            currentTheme={theme}
            isFeatured={true}
            showTechStackIcons={true}
            onCardClick={() => handleCardClick('Featured Project')}
            tags={[
              { name: 'React', navigateTo: 'https://react.com' },
              { name: 'Next.js', navigateTo: 'https://nextjs.org' },
              { name: 'Tailwind', navigateTo: 'https://tailwindcss.com' }
            ]}
            progress={85}
            status="planning"
            lastUpdated="2024-01-15"
            isLoading={false}
          />
        </div>
      </div>

      <div className="demo-section">
        <h2>🔧 Customization Options</h2>
        <p>The ProjectCard component offers extensive customization:</p>
        <DisplayCode
          code={`<ProjectCard
  // Core props
  title="Project Title"
  description="Project description"
  image="https://example.com/image.jpg"
  
  // Tech stack with colors and icons
  techStacks={[
    { name: 'React', color: '#61dafb', icon: '⚛️' }
  ]}
  
  // Multiple link types
  links={[
    { type: 'demo', url: 'https://demo.com', label: 'Live Demo' },
    { type: 'repo', url: 'https://github.com/user/repo' },
    { type: 'documentation', url: 'https://docs.com' },
    { type: 'custom', url: 'https://custom.com', label: 'Custom Link' }
  ]}
  
  // Theming and appearance
  currentTheme="dark"
  isFeatured={true}
  showTechStackIcons={true}
  
  // Behavior
  onCardClick={() => console.log('Clicked!')}
  maxDescriptionLength={200}
  
  // Status and metadata
  status="active"
  lastUpdated="2024-01-15"
  
  // Loading state
  isLoading={false}
  
  // Custom styling
  className="custom-card-class"
/>`}
          language="jsx"
          theme={theme}
          title="Advanced Customization"
          showLineNumbers={true}
          showCopyButton={true}
        />
      </div>

      <div className="demo-section">
        <h2>📦 Installation</h2>
        <DisplayCode
          code={`npm install @asafarim/project-card

# or

yarn add @asafarim/project-card

# or

pnpm add @asafarim/project-card`}
          language="bash"
          theme={theme}
          title="Package Installation"
          showCopyButton={true}
        />
      </div>

      <div className="demo-section">
        <h2>🎭 TypeScript Support</h2>
        <p>Full TypeScript support with comprehensive type definitions:</p>
        <DisplayCode
          code={`import { ProjectCard, ProjectCardProps, TechStackItem, ProjectLink } from '@asafarim/project-card';

const techStack: TechStackItem[] = [
  { name: 'React', color: '#61dafb', icon: '⚛️' }
];

const links: ProjectLink[] = [
  { type: 'demo', url: 'https://demo.com' }
];

const projectProps: ProjectCardProps = {
  title: 'My Project',
  description: 'Description',
  techStacks,
  links
};`}
          language="typescript"
          theme={theme}
          title="TypeScript Usage"
          showLineNumbers={true}
          showCopyButton={true}
        />
      </div>

      <footer className="footer" style={{ textAlign: 'center', margin: '4rem 0 2rem' }}>
        <p style={{ fontSize: '1.1rem', color: theme === 'dark' ? '#a0aec0' : '#4a5568' }}>
          Built with ❤️ using the package <a href="https://github.com/AliSafari-IT/project-card">@asafarim/project-card</a> by Ali Safari
        </p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <>
      <SiteNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-to" element={<HowToPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/examples" element={<ExamplesPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;

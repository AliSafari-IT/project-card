import { useState, useEffect } from 'react';
import { ProjectCard } from '@asafarim/project-card';
import { DisplayCode } from '@asafarim/display-code';
import type { ProjectCardProps } from '@asafarim/project-card';
import { PackageLinks } from '@asafarim/shared';
import { ProjectsPage } from './examples/usage-with-database';
import { ImprovedProjectCardExample, MultipleProjectsExample } from './examples/improved-usage';

const sampleProjects: ProjectCardProps[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, shopping cart, and payment integration using React and Node.js. Features include product catalog, user reviews, order management, and real-time inventory tracking.',
    image: {
      src: 'https://picsum.photos/400/200?random=1',
      alt: 'E-commerce Platform'
    },
    techStacks: [
      { name: 'React', color: 'var(--pc-tag-bg,rgb(234, 174, 236))', icon: '⚛️' },
      { name: 'Node.js', color: 'var(--pc-tag-bg,rgb(168, 195, 211))', icon: '🟢' },
      { name: 'MongoDB', color: 'var(--pc-tag-bg,rgb(212, 209, 155))', icon: '🍃' },
      { name: 'Express', color: 'var(--pc-tag-bg,rgb(233, 179, 179))', icon: '🚀' }
    ],
    links: [
      { type: 'demo', url: 'https://alisafari-it.github.io/project-card/', label: 'Live Demo' }
    ],
    repo: {
      type: 'repo',
      url: 'https://github.com/user/ecommerce',
      label: 'E-commerce Repository',
      icon: '🐙'
    },
    currentTheme: 'dark',
    status: 'active',
    isFeatured: true,
    priority: 'high',
    category: 'fullstack',
    progress: 85,
    tags: [
      { name: 'E-commerce', onClick: () => alert('E-commerce clicked!') },
      { name: 'Full-stack', navigateTo: 'https://ecommerce-demo2.com' },
      { name: 'React', navigateTo: 'https://ecommerce-demo3.com' },
      { name: 'Node.js', navigateTo: 'https://ecommerce-demo4.com' },
      { name: 'MongoDB', navigateTo: 'https://ecommerce-demo5.com' }
    ],
    startDate: '2024-01-15',
    dueDate: '2024-03-15',
    endDate: '2024-03-20',
    budget: {
      amount: 15000,
      currencyCode: 'USD',
      currencySymbol: '$'
    },
    isPublic: true,
    createdBy: 'John Doe',
    updatedBy: 'Jane Smith',
    lastUpdated: '2024-01-20',
    relatedProjects: [
      {
        title: 'Payment Gateway',
        description: 'Integrated payment processing system with Stripe integration, secure transactions, and real-time payment tracking',
        image: {
          src: 'https://picsum.photos/400/200?random=1',
          alt: 'Payment Gateway'
        },
        link: { type: 'demo', url: 'https://alisafari-it.github.io/project-card/', label: 'Live Demo', icon: '📦' },
        repo: { type: 'repo', url: 'https://github.com/user/payment-gateway', label: 'Repository', icon: '🐙' }
      },
      {
        title: 'Inventory System',
        description: 'Real-time inventory management with barcode scanning, low stock alerts, and automated reordering',
        link: { type: 'demo', url: 'https://alisafari-it.github.io/project-card/', label: 'Live Demo', icon: '📦' },
        repo: { type: 'repo', url: 'https://github.com/user/inventory-system', label: 'IS Repository', icon: '🐙' },
        image: {
          src: 'https://picsum.photos/400/200?random=2',
          alt: 'Inventory System'
        }
      }
    ]
  },
  {
    id: '2',
    title: 'AI-Powered Chat Application',
    description: 'A real-time chat application with AI-powered responses, sentiment analysis, and intelligent conversation flow management.',
    image: {
      src: 'https://picsum.photos/400/200?random=2',
      alt: 'AI Chat Application'
    },
    techStacks: [
      { name: 'Next.js', color: 'rgb(207, 160, 209)', icon: '▲' },
      { name: 'OpenAI', color: 'rgb(231, 227, 169)', icon: '🤖' },
      { name: 'Socket.io', color: 'rgb(162, 188, 235)', icon: '🔌' },
      { name: 'TypeScript', color: 'rgb(158, 236, 190)', icon: '📘' }
    ],
    links: [
      { type: 'demo', url: 'https://alisafari-it.github.io/project-card/', label: 'Live Demo' },
      { type: 'documentation', url: 'https://docs.ai-chat.com', label: 'Documentation' }
    ],
    repo: {
      type: 'repo',
      url: 'https://github.com/user/ai-chat',
      label: 'Repository',
      icon: '🐙'
    },
    status: 'in-progress',
    isFeatured: true,
    priority: 'critical',
    category: 'web',
    progress: 65,
    tags: [
      { name: 'AI' },
      { name: 'Real-time' },
      { name: 'Chat' },
      { name: 'Next.js' },
      { name: 'OpenAI' }
    ],
    startDate: '2024-01-10',
    dueDate: '2024-02-28',
    budget: {
      amount: 8000,
      currencyCode: 'EUR',
      currencySymbol: '€'
    },
    isPublic: true,
    createdBy: 'Alice Johnson',
    updatedBy: 'Bob Wilson',
    lastUpdated: '2024-01-18'
  },
  {
    id: '3',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: {
      src: 'https://picsum.photos/400/200?random=3',
      alt: 'Task Management App'
    },
    techStacks: [
      { name: 'React', color: '#61dafb', icon: '⚛️' },
      { name: 'Firebase', color: '#FFCA28', icon: '🔥' },
      { name: 'Material-UI', color: '#0081CB', icon: '🎨' }
    ],
    links: [
      { type: 'demo', url: 'https://task-app-demo.com', label: 'Live Demo' }
    ],
    repo: {
      type: 'repo',
      url: 'https://github.com/user/task-app',
      label: 'Repository',
      icon: '🐙'
    },
    status: 'in-progress',
    isFeatured: false,
    priority: 'medium',
    category: 'web',
    progress: 45,
    tags: [
      { name: 'Task Management', navigateTo: 'https://task-app-demo.com' },
      { name: 'Collaboration', navigateTo: 'https://github.com/user/task-app' },
      { name: 'Real-time', navigateTo: 'https://task-app-demo.com' },
      { name: 'Firebase', navigateTo: 'https://task-app-demo.com' }
    ],
    startDate: '2024-01-05',
    dueDate: '2024-04-15',
    budget: {
      amount: 5000,
      currencyCode: 'EUR',
      currencySymbol: '€'
    },
    isPublic: true,
    createdBy: 'Sarah Chen',
    updatedBy: 'Mike Davis',
    lastUpdated: '2024-01-15'
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with React and TypeScript, featuring dark mode, responsive design, and smooth animations.',
    image: {
      src: 'https://picsum.photos/400/200?random=4',
      alt: 'Portfolio Website'
    },
    techStacks: [
      { name: 'React', color: '#61dafb', icon: '⚛️' },
      { name: 'TypeScript', color: '#3178c6', icon: '📘' },
      { name: 'CSS3', color: '#1572B6', icon: '🎨' }
    ],
    links: [
      { type: 'demo', url: 'https://alisafari-it.github.io/project-card/', label: 'Live Demo' }
    ],
    repo: {
      type: 'repo',
      url: 'https://github.com/user/portfolio',
      label: 'Repository',
      icon: '🐙'
    },
    status: 'completed',
    isFeatured: false,
    priority: 'low',
    category: 'frontend',
    progress: 100,
    tags: [
      { name: 'Portfolio' },
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Responsive' }
    ],
    startDate: '2023-12-01',
    endDate: '2024-01-10',
    budget: {
      amount: 2000,
      currencyCode: 'USD',
      currencySymbol: '$'
    },
    isPublic: true,
    createdBy: 'David Lee',
    updatedBy: 'David Lee',
    lastUpdated: '2024-01-10'
  },
  {
    id: '5',
    title: 'Machine Learning Model',
    description: 'An advanced machine learning project for image classification using TensorFlow and Python with real-time inference capabilities.',
    image: 'https://picsum.photos/400/200?random=5',
    techStacks: [
      { name: 'Python', color: '#3776ab', icon: '🐍' },
      { name: 'TensorFlow', color: '#FF6F00', icon: '🧠' },
      { name: 'Jupyter', color: '#F37626', icon: '📊' },
      { name: 'Flask', color: 'rgb(207, 160, 209)', icon: '🍶' }
    ],
    links: [
      { type: 'documentation', url: 'https://docs.example.com', label: 'Documentation' }
    ],
    repo: {
      type: 'repo',
      url: 'https://github.com/user/ml-model',
      label: 'Repository',
      icon: '🐙'
    },
    status: 'archived',
    isFeatured: false,
    priority: 'medium',
    category: 'backend',
    progress: 90,
    tags: [
      { name: 'Machine Learning' },
      { name: 'AI' },
      { name: 'Python' },
      { name: 'TensorFlow' }
    ],
    startDate: '2023-10-01',
    endDate: '2023-12-01',
    budget: {
      amount: 12000,
      currencyCode: 'GBP',
      currencySymbol: '£'
    },
    isPublic: false,
    createdBy: 'Dr. Emily Watson',
    updatedBy: 'Dr. Emily Watson',
    lastUpdated: '2023-12-01'
  },
  {
    id: '6',
    title: 'Planning: Blockchain Wallet',
    description: 'A decentralized wallet application for managing cryptocurrencies with advanced security features and multi-chain support.',
    techStacks: [
      { name: 'Solidity', color: 'rgb(207, 160, 209)', icon: '⛓️' },
      { name: 'Web3.js', color: '#f16822', icon: '🌐' },
      { name: 'React', color: '#61dafb', icon: '⚛️' }
    ],
    links: [
      { type: 'documentation', url: 'https://docs.wallet.com', label: 'Documentation' }
    ],
    repo: {
      type: 'repo',
      url: 'https://alisafari-it.github.io/project-card/',
      label: 'Repository',
      icon: '🐙'
    },
    status: 'planning',
    isFeatured: false,
    priority: 'high',
    category: 'web',
    progress: 10,
    tags: [
      { name: 'Blockchain' },
      { name: 'Cryptocurrency' },
      { name: 'Web3' },
      { name: 'Security' }
    ],
    startDate: '2024-02-01',
    dueDate: '2024-06-30',
    budget: {
      amount: 25000,
      currencyCode: 'CNY',
      currencySymbol: '¥'
    },
    isPublic: true,
    createdBy: 'Alex Thompson',
    updatedBy: 'Alex Thompson',
    lastUpdated: '2024-01-25'
  },
  {
    id: '7',
    title: 'Mobile App - No Image',
    description: 'A cross-platform mobile application built with React Native for fitness tracking and workout planning.',
    techStacks: [
      { name: 'React Native', color: '#61dafb', icon: '📱' },
      { name: 'Expo', color: 'rgb(162, 188, 235)', icon: '⚡' },
      { name: 'Firebase', color: 'rgb(240, 227, 46)', icon: '🔥' }
    ],
    links: [
      { type: 'demo', url: 'https://alisafari-it.github.io/project-card/', label: 'Demo' }
    ],
    repo: {
      type: 'repo',
      url: 'https://github.com/user/fitness-app',
      label: 'Repository',
      icon: '🐙'
    },
    status: 'draft',
    isFeatured: false,
    priority: 'medium',
    category: 'mobile',
    progress: 25,
    tags: [
      { name: 'Mobile' },
      { name: 'Fitness' },
      { name: 'React Native' },
      { name: 'Cross-platform' }
    ],
    startDate: '2024-01-20',
    dueDate: '2024-05-15',
    budget: {
      amount: 8000,
      currencyCode: 'USD',
      currencySymbol: '$'
    },
    isPublic: true,
    createdBy: 'Maria Garcia',
    updatedBy: 'Carlos Rodriguez',
    lastUpdated: '2024-01-22'
  },
  {
    id: '8',
    title: 'DevOps Pipeline',
    description: 'Automated CI/CD pipeline with Docker, Kubernetes, and monitoring tools for scalable deployment.',
    image: {
      src: 'https://picsum.photos/400/200?random=8',
      alt: 'DevOps Pipeline'
    },
    techStacks: [
      { name: 'Docker', color: '#2496ED', icon: '🐳' },
      { name: 'Kubernetes', color: '#326CE5', icon: '☸️' },
      { name: 'Jenkins', color: '#D24939', icon: '🔧' },
      { name: 'Prometheus', color: '#E6522C', icon: '📊' }
    ],
    links: [
      { type: 'demo', url: 'https://alisafari-it.github.io/project-card/', label: 'Demo' },
      { type: 'documentation', url: 'https://docs.devops.com', label: 'Documentation' }
    ],
    repo: {
      type: 'repo',
      url: 'https://github.com/user/devops-pipeline',
      label: 'Repository',
      icon: '🐙'
    },
    status: 'active',
    isFeatured: true,
    priority: 'high',
    category: 'devops',
    progress: 75,
    tags: [
      { name: 'DevOps' },
      { name: 'CI/CD' },
      { name: 'Docker' },
      { name: 'Kubernetes' }
    ],
    startDate: '2024-01-01',
    dueDate: '2024-03-30',
    budget: {
      amount: 15000,
      currencyCode: 'USD',
      currencySymbol: '$'
    },
    isPublic: true,
    createdBy: 'DevOps Team',
    updatedBy: 'DevOps Team',
    lastUpdated: '2024-01-28'
  }
];

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('pc_theme') : null;
    return (stored === 'dark' || stored === 'light') ? (stored as 'light' | 'dark') : 'light';
  });
  const [showLoadingDemo, setShowLoadingDemo] = useState(false);
  const [route, setRoute] = useState<string>('home');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // persist theme across routes/reloads
  useEffect(() => {
    try {
      localStorage.setItem('pc_theme', theme);
    } catch {}
  }, [theme]);

  const handleCardClick = (title: string) => {
    alert(`Clicked on: ${title}`);
  };

  // Simple hash-based routing (no external deps)
  // Supported routes: #/home, #/projects, #/improved, #/multiple
  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace('#/', '').trim();
      setRoute(hash || 'home');
    };
    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = `/${path}`;
  };
  const isActive = (path: string) => route === path;

  return (
    <div className={`demo-container ${theme === 'dark' ? 'dark-theme' : ''}`}>
      {/* Simple Navbar */}
      <nav
        style={{
          display: 'flex',
          gap: '0.75rem',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.75rem 1rem',
          borderBottom: '1px solid #e2e8f0',
          position: 'sticky',
          top: 0,
          background: theme === 'dark' ? '#0f172a' : '#ffffff',
          zIndex: 10,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <strong>@asafarim/project-card</strong>
          <span style={{ opacity: 0.6 }}>Demo</span>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <button className={`nav-btn ${isActive('home') ? 'active' : ''}`} onClick={() => navigate('home')}>
            Home
          </button>
          <button className={`nav-btn ${isActive('projects') ? 'active' : ''}`} onClick={() => navigate('projects')}>
            ProjectsPage
          </button>
          <button className={`nav-btn ${isActive('improved') ? 'active' : ''}`} onClick={() => navigate('improved')}>
            ImprovedProjectCardExample
          </button>
          <button className={`nav-btn ${isActive('multiple') ? 'active' : ''}`} onClick={() => navigate('multiple')}>
            MultipleProjectsExample
          </button>
          <button className="nav-btn" onClick={toggleTheme}>
            Theme: {theme === 'light' ? 'Light' : 'Dark'}
          </button>
        </div>
      </nav>

      {/* Route Views */}
      {route === 'projects' && (
        <div style={{ paddingTop: '1rem' }}>
          <ProjectsPage theme={theme} hideLocalToggle={true} />
        </div>
      )}

      {route === 'improved' && (
        <div style={{ paddingTop: '1rem' }}>
          <ImprovedProjectCardExample theme={theme} hideLocalToggle={true} />
        </div>
      )}

      {route === 'multiple' && (
        <div style={{ paddingTop: '1rem' }}>
          <MultipleProjectsExample theme={theme} hideLocalToggle={true} />
        </div>
      )}

      {(route === 'home') && (
        <>
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

      <div className="demo-section">
        <h2>🚀 Advanced Features</h2>
        <p>Showcase all the powerful features with comprehensive project data:</p>
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
  featured={true}
  priority="High"
  progress={85}
  tags={['E-commerce', 'Full-stack', 'React', 'Node.js']}
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
  imageAlt="Alternative text for image"
  
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
  featured={true}
  showTechStackIcons={true}
  
  // Behavior
  onCardClick={() => console.log('Clicked!')}
  maxDescriptionLength={200}
  
  // Status and metadata
  status="active" // 'active' | 'archived' | 'in-progress'
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

      <div style={{ textAlign: 'center', margin: '4rem 0 2rem' }}>
        <p style={{ fontSize: '1.1rem', color: theme === 'dark' ? '#a0aec0' : '#4a5568' }}>
          Built with ❤️ using the package <a href="https://github.com/AliSafari-IT/project-card">@asafarim/project-card</a> by Ali Safari
        </p>
      </div>
        </>
      )}
    </div>
  );
}

export default App;

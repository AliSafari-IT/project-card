import type { ProjectCardProps } from '@asafarim/project-card';

export const sampleProjects: ProjectCardProps[] = [
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

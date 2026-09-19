import { useState, useRef, useCallback } from "react";
import {
  ProjectCard,
  mapProject,
  applyCustomProjectCardTheme,
  removeCustomProjectCardTheme,
} from "@asafarim/project-card";
import { DisplayCode } from "@asafarim/display-code";
import { useTheme } from "@asafarim/react-themes";
import { sampleProjects } from "./mockData";

// ─── Icons ────────────────────────────────────────────────────────────────

function EyeIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function CopyIcon({ copied }: { copied: boolean }) {
  if (copied) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

// ─── Source code reveal card ──────────────────────────────────────────────

function SourceReveal({ code, isDark }: { code: string; isDark: boolean }) {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 1800);
    });
  }, [code]);

  return (
    <div className="howto-source">
      <div className="howto-source__toolbar">
        <button
          type="button"
          className="howto-source__btn howto-source__btn--toggle"
          onClick={() => setRevealed((v) => !v)}
          aria-expanded={revealed}
          aria-label={revealed ? "Hide source code" : "Show source code"}
        >
          <EyeIcon open={revealed} />
          <span>{revealed ? "Hide source" : "Show source"}</span>
        </button>
        {revealed && (
          <button
            type="button"
            className="howto-source__btn howto-source__btn--copy"
            onClick={copy}
            aria-label="Copy source code to clipboard"
          >
            <CopyIcon copied={copied} />
            <span>{copied ? "Copied!" : "Copy"}</span>
          </button>
        )}
      </div>
      {revealed && (
        <div className="howto-source__code">
          <DisplayCode
            code={code}
            language="tsx"
            theme={isDark ? "dark" : "light"}
            showLineNumbers={true}
            showCopyButton={false}
            fontSize="small"
            maxHeight="400px"
          />
        </div>
      )}
    </div>
  );
}

// ─── Custom theme demo (uses the lib's theme utilities) ───────────────────

const CUSTOM_THEME_VARS = {
  "--pc-primary": "#e91e63",
  "--pc-bg-primary": "#fff5f8",
  "--pc-text-primary": "#4a1425",
  "--pc-border-primary": "#f8bbd0",
};

function CustomThemeDemo({ isDark }: { isDark: boolean }) {
  const [applied, setApplied] = useState(false);

  const toggle = () => {
    if (applied) {
      removeCustomProjectCardTheme(Object.keys(CUSTOM_THEME_VARS));
    } else {
      applyCustomProjectCardTheme(CUSTOM_THEME_VARS);
    }
    setApplied(!applied);
  };

  return (
    <div>
      <button
        type="button"
        className="howto-source__btn"
        onClick={toggle}
        style={{ marginBottom: "0.75rem" }}
      >
        {applied ? "Reset theme" : "Apply pink theme"}
      </button>
      <div className="howto-card__preview-inner">
        <ProjectCard
          title="Custom Themed Card"
          description="This card uses CSS custom properties applied via applyCustomProjectCardTheme."
          image="https://picsum.photos/400/200?random=42"
          techStacks={[{ name: "CSS Vars", color: "#e91e63" }]}
          links={[{ type: "demo", url: "https://example.com", label: "Demo" }]}
          currentTheme={isDark ? "dark" : "light"}
        />
      </div>
    </div>
  );
}

// ─── Use case card ────────────────────────────────────────────────────────

interface UseCase {
  id: string;
  title: string;
  description: string;
  badge?: string;
  code: string;
  render: (isDark: boolean) => React.ReactNode;
}

function UseCaseCard({ useCase, isDark }: { useCase: UseCase; isDark: boolean }) {
  return (
    <div className="howto-card" id={useCase.id}>
      <div className="howto-card__header">
        <h3 className="howto-card__title">{useCase.title}</h3>
        {useCase.badge && <span className="howto-card__badge">{useCase.badge}</span>}
      </div>
      <p className="howto-card__desc">{useCase.description}</p>
      <div className="howto-card__split">
        <div className="howto-card__code">
          <DisplayCode
            code={useCase.code}
            language="tsx"
            theme={isDark ? "dark" : "light"}
            showLineNumbers={true}
            showCopyButton={true}
            fontSize="small"
            maxHeight="420px"
          />
        </div>
        <div className="howto-card__preview">
          {useCase.render(isDark)}
        </div>
      </div>
    </div>
  );
}

// ─── Installation steps ───────────────────────────────────────────────────

const INSTALL_COMMANDS = [
  { label: "npm", command: "npm install @asafarim/project-card" },
  { label: "pnpm", command: "pnpm add @asafarim/project-card" },
  { label: "yarn", command: "yarn add @asafarim/project-card" },
];

function InstallSection({ isDark }: { isDark: boolean }) {
  const [activeMgr, setActiveMgr] = useState("pnpm");

  return (
    <section className="howto-section">
      <h2 className="howto-section__title">📦 Installation</h2>
      <p className="howto-section__lead">
        Choose your preferred package manager. <code>@asafarim/project-card</code> requires
        React 17 or 18 as a peer dependency.
      </p>
      <div className="howto-install">
        <div className="howto-install__tabs" role="tablist">
          {INSTALL_COMMANDS.map((mgr) => (
            <button
              key={mgr.label}
              type="button"
              role="tab"
              aria-selected={activeMgr === mgr.label}
              className={`howto-install__tab${
                activeMgr === mgr.label ? " howto-install__tab--active" : ""
              }`}
              onClick={() => setActiveMgr(mgr.label)}
            >
              {mgr.label}
            </button>
          ))}
        </div>
        <DisplayCode
          code={INSTALL_COMMANDS.find((m) => m.label === activeMgr)!.command}
          language="bash"
          theme={isDark ? "dark" : "light"}
          showLineNumbers={false}
          showCopyButton={true}
          fontSize="medium"
        />
      </div>
      <div className="howto-card">
        <div className="howto-card__header">
          <h3 className="howto-card__title">Basic Import</h3>
        </div>
        <p className="howto-card__desc">Import the component and pass the required props.</p>
        <SourceReveal
          isDark={isDark}
          code={`import { ProjectCard } from '@asafarim/project-card';

function ProjectsPage() {
  return (
    <ProjectCard
      title="My Awesome Project"
      description="A description of my project"
      image="https://example.com/image.jpg"
      techStacks={[{ name: 'React', color: '#61dafb' }]}
      links={[{ type: 'demo', url: 'https://demo.example.com' }]}
      currentTheme="dark"
    />
  );
}`}
        />
      </div>
    </section>
  );
}

// ─── All use cases ────────────────────────────────────────────────────────

const dbProject = {
  id: 42,
  title: "Orders Service",
  description: "Backend service for order processing mapped straight from a DB row.",
  status: "In Progress",
  priority: "high",
  progress: 68,
  tags: [{ name: "Backend" }, { name: "API" }],
  thumbnailUrl: "https://picsum.photos/400/200?random=55",
  repositoryUrl: "https://github.com/example/orders-service",
  liveUrl: "https://orders.example.com",
  isPublic: true,
  isFeatured: false,
};

const USE_CASES: UseCase[] = [
  {
    id: "basic-card",
    title: "Basic Card",
    description: "The minimal useful card: title, description, image, tech stack, and links.",
    badge: "core",
    render: (isDark) => (
      <div className="howto-card__preview-inner">
        <ProjectCard
          title="Portfolio Website"
          description="A personal portfolio built with React and TypeScript."
          image="https://picsum.photos/400/200?random=11"
          techStacks={[
            { name: "React", color: "#61dafb" },
            { name: "TypeScript", color: "#3178c6" },
          ]}
          links={[
            { type: "demo", url: "https://example.com", label: "Live Demo" },
            { type: "repo", url: "https://github.com/example/repo", label: "Repository" },
          ]}
          currentTheme={isDark ? "dark" : "light"}
        />
      </div>
    ),
    code: `<ProjectCard
  title="Portfolio Website"
  description="A personal portfolio built with React and TypeScript."
  image="https://picsum.photos/400/200"
  techStacks={[
    { name: 'React', color: '#61dafb' },
    { name: 'TypeScript', color: '#3178c6' },
  ]}
  links={[
    { type: 'demo', url: 'https://example.com', label: 'Live Demo' },
    { type: 'repo', url: 'https://github.com/example/repo' },
  ]}
  currentTheme="dark"
/>`,
  },
  {
    id: "featured-card",
    title: "Featured Card",
    description: "Highlight important projects with isFeatured styling.",
    badge: "isFeatured",
    render: (isDark) => (
      <div className="howto-card__preview-inner">
        <ProjectCard
          title="Flagship Product"
          description="Featured cards get accent styling to stand out in a grid."
          image="https://picsum.photos/400/200?random=12"
          techStacks={[{ name: "React", color: "#61dafb" }]}
          links={[{ type: "demo", url: "https://example.com", label: "Demo" }]}
          isFeatured={true}
          currentTheme={isDark ? "dark" : "light"}
        />
      </div>
    ),
    code: `<ProjectCard
  title="Flagship Product"
  description="Featured cards get accent styling to stand out in a grid."
  image="https://picsum.photos/400/200"
  techStacks={[{ name: 'React', color: '#61dafb' }]}
  links={[{ type: 'demo', url: 'https://example.com', label: 'Demo' }]}
  isFeatured={true}
  currentTheme="dark"
/>`,
  },
  {
    id: "status-badge",
    title: "Status Indicators",
    description: "Every status value renders a labeled badge — here 'in-progress'.",
    badge: "status",
    render: (isDark) => (
      <div className="howto-card__preview-inner">
        <ProjectCard
          title="Mobile App"
          description="Status badges communicate project lifecycle at a glance."
          image="https://picsum.photos/400/200?random=13"
          techStacks={[{ name: "React Native", color: "#61dafb" }]}
          links={[{ type: "demo", url: "https://example.com", label: "Demo" }]}
          status="in-progress"
          currentTheme={isDark ? "dark" : "light"}
        />
      </div>
    ),
    code: `<ProjectCard
  title="Mobile App"
  description="Status badges communicate project lifecycle at a glance."
  image="https://picsum.photos/400/200"
  techStacks={[{ name: 'React Native', color: '#61dafb' }]}
  links={[{ type: 'demo', url: 'https://example.com', label: 'Demo' }]}
  status="in-progress"
  currentTheme="dark"
/>`,
  },
  {
    id: "progress-tracking",
    title: "Progress Tracking",
    description: "A visual progress bar driven by the progress prop (0–100).",
    badge: "progress",
    render: (isDark) => (
      <div className="howto-card__preview-inner">
        <ProjectCard
          title="Migration Project"
          description="Show completion percentage with an animated progress bar."
          techStacks={[{ name: "Node.js", color: "#68a063" }]}
          links={[{ type: "repo", url: "https://github.com/example/migration", label: "Repository" }]}
          progress={72}
          currentTheme={isDark ? "dark" : "light"}
        />
      </div>
    ),
    code: `<ProjectCard
  title="Migration Project"
  description="Show completion percentage with an animated progress bar."
  techStacks={[{ name: 'Node.js', color: '#68a063' }]}
  links={[{ type: 'repo', url: 'https://github.com/example/migration' }]}
  progress={72}
  currentTheme="dark"
/>`,
  },
  {
    id: "metadata",
    title: "Metadata & Budget",
    description: "Priority, dates, and a formatted budget render in the metadata section.",
    badge: "metadata",
    render: (isDark) => (
      <div className="howto-card__preview-inner">
        <ProjectCard
          title="Client Portal"
          description="Priority, budget, start/due dates, and owner metadata."
          techStacks={[{ name: "Next.js", color: "#111" }]}
          links={[{ type: "demo", url: "https://example.com", label: "Demo" }]}
          priority="high"
          category="web"
          budget={{ amount: 12500, currencyCode: "USD", currencySymbol: "$" }}
          startDate="2024-02-01"
          dueDate="2024-06-30"
          createdBy="Jane Smith"
          currentTheme={isDark ? "dark" : "light"}
        />
      </div>
    ),
    code: `<ProjectCard
  title="Client Portal"
  description="Priority, budget, start/due dates, and owner metadata."
  techStacks={[{ name: 'Next.js', color: '#111' }]}
  links={[{ type: 'demo', url: 'https://example.com', label: 'Demo' }]}
  priority="high"
  category="web"
  budget={{ amount: 12500, currencyCode: 'USD', currencySymbol: '$' }}
  startDate="2024-02-01"
  dueDate="2024-06-30"
  createdBy="Jane Smith"
  currentTheme="dark"
/>`,
  },
  {
    id: "interactive-tags",
    title: "Interactive Tags",
    description: "Tags can fire onClick handlers or navigate to external URLs.",
    badge: "tags",
    render: (isDark) => (
      <div className="howto-card__preview-inner">
        <ProjectCard
          title="Tagged Project"
          description="Click a tag — some alert, others open a link."
          techStacks={[{ name: "React", color: "#61dafb" }]}
          links={[{ type: "demo", url: "https://example.com", label: "Demo" }]}
          tags={[
            { name: "Alert me", onClick: () => alert("Tag clicked!") },
            { name: "React docs", navigateTo: "https://react.dev" },
            { name: "Plain tag" },
          ]}
          currentTheme={isDark ? "dark" : "light"}
        />
      </div>
    ),
    code: `<ProjectCard
  title="Tagged Project"
  description="Click a tag — some alert, others open a link."
  techStacks={[{ name: 'React', color: '#61dafb' }]}
  links={[{ type: 'demo', url: 'https://example.com', label: 'Demo' }]}
  tags={[
    { name: 'Alert me', onClick: () => alert('Tag clicked!') },
    { name: 'React docs', navigateTo: 'https://react.dev' },
    { name: 'Plain tag' },
  ]}
  currentTheme="dark"
/>`,
  },
  {
    id: "loading-state",
    title: "Loading State",
    description: "isLoading swaps the card for an animated skeleton placeholder.",
    badge: "isLoading",
    render: (isDark) => (
      <div className="howto-card__preview-inner">
        <ProjectCard
          title="Loading..."
          description="Skeleton placeholder shown while data loads."
          links={[]}
          isLoading={true}
          currentTheme={isDark ? "dark" : "light"}
        />
      </div>
    ),
    code: `<ProjectCard
  title="Loading..."
  description="Skeleton placeholder shown while data loads."
  links={[]}
  isLoading={true}
  currentTheme="dark"
/>`,
  },
  {
    id: "db-mapping",
    title: "Database Mapping",
    description:
      "mapProject converts a backend row (status strings, thumbnailUrl, repositoryUrl) into ProjectCard props.",
    badge: "mapProject",
    render: (isDark) => (
      <div className="howto-card__preview-inner">
        <ProjectCard
          {...mapProject(dbProject)}
          currentTheme={isDark ? "dark" : "light"}
          showTechStackIcons={true}
        />
      </div>
    ),
    code: `import { mapProject } from '@asafarim/project-card';

const dbRow = {
  id: 42,
  title: 'Orders Service',
  status: 'In Progress',     // mapped → 'in-progress'
  priority: 'high',
  progress: 68,
  thumbnailUrl: 'https://...',  // mapped → image
  repositoryUrl: 'https://github.com/...',  // mapped → links[]
  isPublic: true,
};

<ProjectCard {...mapProject(dbRow)} currentTheme="dark" />`,
  },
  {
    id: "custom-theme",
    title: "Custom Theme",
    description:
      "applyCustomProjectCardTheme sets --pc-* CSS variables at runtime. Toggle to apply/reset.",
    badge: "theme utils",
    render: (isDark) => <CustomThemeDemo isDark={isDark} />,
    code: `import {
  applyCustomProjectCardTheme,
  removeCustomProjectCardTheme,
} from '@asafarim/project-card';

const vars = {
  '--pc-primary': '#e91e63',
  '--pc-bg-primary': '#fff5f8',
  '--pc-text-primary': '#4a1425',
  '--pc-border-primary': '#f8bbd0',
};

applyCustomProjectCardTheme(vars);       // apply
removeCustomProjectCardTheme(Object.keys(vars)); // reset`,
  },
  {
    id: "related-projects",
    title: "Related Projects",
    description:
      "The relatedProjects prop renders a list that opens a detail dialog on click.",
    badge: "relatedProjects",
    render: (isDark) => (
      <div className="howto-card__preview-inner">
        <ProjectCard
          {...sampleProjects[0]}
          currentTheme={isDark ? "dark" : "light"}
          maxDescriptionLength={80}
        />
      </div>
    ),
    code: `<ProjectCard
  title="E-commerce Platform"
  description="..."
  links={[{ type: 'demo', url: 'https://demo.example.com' }]}
  relatedProjects={[
    {
      title: 'Payment Gateway',
      description: 'Stripe integration with real-time tracking',
      image: { src: 'https://...', alt: 'Payment Gateway' },
      link: { type: 'demo', url: 'https://...', label: 'Live Demo' },
      repo: { type: 'repo', url: 'https://github.com/...' },
    },
  ]}
  currentTheme="dark"
/>`,
  },
];

// ─── Page component ───────────────────────────────────────────────────────

export function HowToPage() {
  const { resolvedMode } = useTheme();
  const isDark = resolvedMode === "dark";

  return (
    <div className={`howto-page ${isDark ? "dark-theme" : ""}`}>
      <header className="howto-header">
        <h1 className="howto-title">How to Use ProjectCard</h1>
        <p className="howto-subtitle">
          A complete guide to installing and using{" "}
          <code>@asafarim/project-card</code>. Click the{" "}
          <span className="howto-inline-icon">
            <EyeIcon open={false} />
          </span>{" "}
          icon on any example to reveal its source code, then{" "}
          <span className="howto-inline-icon">
            <CopyIcon copied={false} />
          </span>{" "}
          to copy it.
        </p>
      </header>

      <InstallSection isDark={isDark} />

      <section className="howto-section">
        <h2 className="howto-section__title">🎨 Use Cases</h2>
        <p className="howto-section__lead">
          Every prop and feature, demonstrated with live examples. Toggle the
          source code for any card to see exactly how it's done.
        </p>
        <div className="howto-grid">
          {USE_CASES.map((uc) => (
            <UseCaseCard key={uc.id} useCase={uc} isDark={isDark} />
          ))}
        </div>
      </section>

      <section className="howto-section">
        <h2 className="howto-section__title">📋 Props Reference</h2>
        <p className="howto-section__lead">
          The full set of props accepted by the <code>ProjectCard</code> component:
        </p>
        <div className="howto-card">
          <DisplayCode
            code={`interface ProjectCardProps {
  // Core properties
  title: string;                              // Required. Project title
  description: string;                        // Required. Project description
  image?: string | ProjectImage;              // URL or { src, alt, width?, height? }
  techStacks?: TechStackItem[];               // { name, color?, icon? }
  links: ProjectLink[];                       // { type?, url?, label?, icon?, target?, onClick? }
  repo?: ProjectLink;                         // Separate repository link

  // Theming and appearance
  currentTheme?: 'light' | 'dark' | 'auto';   // default: 'light'
  className?: string;                         // Additional CSS classes
  showTechStackIcons?: boolean;               // default: false
  maxDescriptionLength?: number;              // default: 150
  isFeatured?: boolean;                       // Highlight as featured

  // Behavior
  onCardClick?: () => void;                   // Card click handler
  isLoading?: boolean;                        // Skeleton loading state

  // Status and metadata
  status?: 'active' | 'draft' | 'archived' | 'completed'
         | 'in-progress' | 'coming-soon' | 'planning';
  lastUpdated?: string;

  // Additional DB-model properties
  priority?: 'low' | 'medium' | 'high' | 'critical' | 'urgent';
  category?: ProjectCategory;                 // 'web' | 'mobile' | 'backend' | ...
  progress?: number;                          // 0-100 progress bar
  tags?: ProjectTag[];                        // { name, onClick?, navigateTo? }
  startDate?: string;
  endDate?: string;
  dueDate?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
  updatedBy?: string;
  budget?: number | ProjectBudget;            // number or { amount, currencyCode?, ... }
  isPublic?: boolean;                         // default: true
  relatedProjects?: RelatedProject[];         // Clickable related-project list

  // Database specific
  id?: string;
  userId?: string;
}`}
            language="typescript"
            theme={isDark ? "dark" : "light"}
            showLineNumbers={true}
            showCopyButton={true}
            fontSize="small"
            title="ProjectCardProps"
          />
        </div>
      </section>
    </div>
  );
}

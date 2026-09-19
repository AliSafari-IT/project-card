import { useEffect, useState } from "react";
import { DisplayCode } from "@asafarim/display-code";
import { useTheme } from "@asafarim/react-themes";

// ─── Types ────────────────────────────────────────────────────────────────

type RoadmapStatus = "released" | "current" | "planned" | "ideation";

type ChangelogCategory =
  | "feature"
  | "fix"
  | "improvement"
  | "security"
  | "breaking"
  | "docs";

interface PcRoadmapItem {
  version: string;
  date: string;
  isoDate: string;
  status: RoadmapStatus;
  title: string;
  details: string[];
  icon: string;
  category: ChangelogCategory;
  tags: string[];
  proposedApi?: string;
  issueUrl?: string;
  issueNumber?: number;
  votes?: number;
}

// ─── Timeline data ────────────────────────────────────────────────────────
// Past releases (changelog) reconstructed from git history + package versions,
// plus future roadmap items linked to GitHub issues.

const pcTimelineData: PcRoadmapItem[] = [
  // ── History ────────────────────────────────────────────────────────────
  {
    version: "1.0.3",
    date: "July 2025",
    isoDate: "2025-07-14",
    status: "released",
    title: "Initial Release",
    details: [
      "ProjectCard component with title, image, description, techStacks, and links",
      "Light / dark theme support via currentTheme prop and CSS variables",
      "Vite demo app with GitHub Pages deployment",
      "Rollup build producing CJS + ESM + type declarations",
    ],
    icon: "✅",
    category: "feature",
    tags: ["component", "themes", "demo", "release"],
  },
  {
    version: "1.1.2",
    date: "August 2025",
    isoDate: "2025-08-03",
    status: "released",
    title: "Image Handling & Status Display",
    details: [
      "ProjectImage object support ({ src, alt, width, height })",
      "Improved status badge rendering",
      "pnpm workspace setup linking demo to the library",
      "GitHub Actions workflow fixes for pnpm caching",
    ],
    icon: "🚀",
    category: "improvement",
    tags: ["image", "status", "workspace", "ci"],
  },
  {
    version: "1.3.0",
    date: "August 2025",
    isoDate: "2025-08-04",
    status: "released",
    title: "Progress, Tags & Metadata",
    details: [
      "Progress bar via progress prop (0-100)",
      "Interactive tags with onClick and navigateTo",
      "Metadata section: priority, dates, budget, createdBy/updatedBy",
      "Featured card styling via isFeatured",
    ],
    icon: "📊",
    category: "feature",
    tags: ["progress", "tags", "metadata", "featured"],
  },
  {
    version: "1.4.3",
    date: "August 2025",
    isoDate: "2025-08-06",
    status: "released",
    title: "Expanded Type System",
    details: [
      "ProjectStatus, ProjectCategory, and ProjectPriority union types",
      "ProjectTag, RelatedProject, and ProjectImage interfaces",
      "Refined demo links and docs",
    ],
    icon: "🔧",
    category: "improvement",
    tags: ["types", "status", "category", "priority"],
  },
  {
    version: "1.5.0",
    date: "August 2025",
    isoDate: "2025-08-10",
    status: "current",
    title: "DB Mapping & Theme Utilities",
    details: [
      "mapProject / mapProjects / filterPublicProjects / sortProjects helpers",
      "Theme utilities: applyProjectCardTheme, watchProjectCardTheme, createProjectCardThemeContext",
      "PROJECT_CARD_THEME_VARIABLES for custom --pc-* themes",
      "Comprehensive demo with database-integration examples",
    ],
    icon: "🗄️",
    category: "feature",
    tags: ["mapping", "theme-utils", "css-variables", "demo"],
  },

  // ── Future roadmap (GitHub issues) ──────────────────────────────────────
  {
    version: "1.6.0",
    date: "Planned",
    isoDate: "2026-10-01",
    status: "planned",
    title: "SSR-Safe Rendering",
    details: [
      "Guard all window/document access in themeUtils for SSR environments",
      "Isomorphic theme detection — render 'light' on the server, hydrate to the real preference",
      "ssrSafe prop / documented Next.js and Remix usage",
      "No hydration mismatch warnings in SSR consumers",
    ],
    icon: "🌐",
    category: "feature",
    tags: ["ssr", "hydration", "nextjs", "themes"],
    proposedApi: `<ProjectCard
  title="My Project"
  description="Works in Next.js without hydration warnings"
  links={[{ type: 'demo', url: 'https://demo.example.com' }]}
  currentTheme="auto"
  ssrSafe
/>`,
    issueUrl: "https://github.com/AliSafari-IT/project-card/issues/1",
    issueNumber: 1,
    votes: 0,
  },
  {
    version: "1.7.0",
    date: "Planned",
    isoDate: "2026-11-01",
    status: "planned",
    title: "Layout Variants",
    details: [
      "variant prop: 'vertical' (default) | 'horizontal' | 'compact' | 'mini'",
      "Horizontal layout for list views, compact for dense dashboards",
      "Mini variant for sidebars — title + status + one link",
      "All variants share the existing theme system and prop surface",
    ],
    icon: "🧩",
    category: "feature",
    tags: ["variants", "layout", "compact", "list"],
    proposedApi: `<ProjectCard
  title="My Project"
  description="Rendered as a horizontal row"
  links={[{ type: 'demo', url: 'https://demo.example.com' }]}
  variant="horizontal"
/>`,
    issueUrl: "https://github.com/AliSafari-IT/project-card/issues/2",
    issueNumber: 2,
    votes: 0,
  },
  {
    version: "1.8.0",
    date: "Planned",
    isoDate: "2026-12-01",
    status: "planned",
    title: "Slot Overrides (Render Props)",
    details: [
      "renderMedia, renderFooter, renderTechStack, renderStatus render-props",
      "Slots receive computed values (truncated description, formatted budget)",
      "Zero-cost abstraction — default rendering unchanged when not provided",
      "Escape hatch without forking the component",
    ],
    icon: "🎛️",
    category: "feature",
    tags: ["slots", "render-props", "customization"],
    proposedApi: `<ProjectCard
  title="My Project"
  description="Default body, custom footer"
  links={[{ type: 'repo', url: 'https://github.com/example' }]}
  renderFooter={(project) => <MyFooter {...project} />}
  renderMedia={() => <CustomHero />}
/>`,
    issueUrl: "https://github.com/AliSafari-IT/project-card/issues/3",
    issueNumber: 3,
    votes: 0,
  },
  {
    version: "1.9.0",
    date: "Ideation",
    isoDate: "2027-01-01",
    status: "ideation",
    title: "Media Gallery",
    details: [
      "images: ProjectImage[] prop rendering a thumbnail carousel",
      "Optional video embed (mp4/webm or YouTube/Vimeo URL) in the media slot",
      "Keyboard-accessible carousel controls",
      "Lazy-loading for all gallery images",
    ],
    icon: "🖼️",
    category: "feature",
    tags: ["gallery", "carousel", "video", "media"],
    proposedApi: `<ProjectCard
  title="My Project"
  description="Multiple screenshots in one card"
  links={[{ type: 'demo', url: 'https://demo.example.com' }]}
  images={[
    { src: 'shot-1.png', alt: 'Dashboard view' },
    { src: 'shot-2.png', alt: 'Settings view' },
  ]}
/>`,
    issueUrl: "https://github.com/AliSafari-IT/project-card/issues/4",
    issueNumber: 4,
    votes: 0,
  },
  {
    version: "2.0.0",
    date: "Ideation",
    isoDate: "2027-02-01",
    status: "ideation",
    title: "Accessibility & Motion",
    details: [
      "Semantic roles and landmarks on the card and its regions",
      "Related-projects dialog rebuilt as real DOM (removes innerHTML injection)",
      "Focus trap + Escape-to-close, keyboard navigation, aria-live announcements",
      "prefers-reduced-motion respected; animate={false} opt-out",
    ],
    icon: "♿",
    category: "breaking",
    tags: ["a11y", "motion", "keyboard", "dialog"],
    proposedApi: `<ProjectCard
  title="My Project"
  description="Fully accessible card with motion"
  links={[{ type: 'demo', url: 'https://demo.example.com' }]}
  animate
  respectReducedMotion
/>`,
    issueUrl: "https://github.com/AliSafari-IT/project-card/issues/5",
    issueNumber: 5,
    votes: 0,
  },
  {
    version: "2.1.0",
    date: "Ideation",
    isoDate: "2027-03-01",
    status: "ideation",
    title: "Embeddable Web Component",
    details: [
      "<project-card> custom-element build target",
      "Works in Vue, Angular, Svelte, or plain HTML — no React needed",
      "Attribute/property bridge mirroring the React prop surface",
      "Theme via the existing --pc-* CSS variables",
    ],
    icon: "🧱",
    category: "feature",
    tags: ["web-component", "embed", "framework-agnostic"],
    proposedApi: `<project-card
  title="My Project"
  description="A card without React"
  theme="dark"
></project-card>`,
    issueUrl: "https://github.com/AliSafari-IT/project-card/issues/6",
    issueNumber: 6,
    votes: 0,
  },
];

// ─── Changelog timeline (past releases) ───────────────────────────────────

interface ChangelogEntry {
  id: string;
  version: string;
  date: string;
  category: ChangelogCategory;
  title: string;
  description: string;
  tags: string[];
}

function toChangelogEntry(item: PcRoadmapItem): ChangelogEntry {
  return {
    id: `${item.version}-${item.status}-${item.title.replace(/\s+/g, "-")}`,
    version: item.version,
    date: item.isoDate,
    category: item.category,
    title: item.title,
    description: `${item.details.join(". ")}.`,
    tags: [item.status, ...item.tags],
  };
}

const categoryIcons: Record<ChangelogCategory, string> = {
  feature: "✨",
  fix: "🐛",
  improvement: "⚡",
  security: "🔒",
  breaking: "⚠️",
  docs: "📚",
};

const categoryColors: Record<ChangelogCategory, { bg: string; text: string; icon: string }> = {
  feature: { bg: "#e0f2fe", text: "#0369a1", icon: "#0284c7" },
  fix: { bg: "#fef2f2", text: "#b91c1c", icon: "#dc2626" },
  improvement: { bg: "#f0fdf4", text: "#15803d", icon: "#16a34a" },
  security: { bg: "#fffbeb", text: "#b45309", icon: "#d97706" },
  breaking: { bg: "#fef3c7", text: "#92400e", icon: "#f59e0b" },
  docs: { bg: "#f5f3ff", text: "#6d28d9", icon: "#7c3aed" },
};

function ChangelogTimeline({
  entries,
  title,
  subtitle,
}: {
  entries: ChangelogEntry[];
  title: string;
  subtitle: string;
}) {
  return (
    <div className="changelog-timeline changelog-timeline--left">
      <div className="timeline-header">
        <h2 className="timeline-title">{title}</h2>
        <p className="timeline-subtitle">{subtitle}</p>
      </div>
      <div className="timeline-container">
        <div className="timeline-line" />
        {entries.map((entry) => {
          const colors = categoryColors[entry.category];
          return (
            <div className="timeline-item" key={entry.id}>
              <div
                className="timeline-dot"
                style={{ borderColor: colors.icon }}
              />
              <div className="timeline-card">
                <div className="card-header">
                  <span className="category-icon">{categoryIcons[entry.category]}</span>
                  <div className="card-content">
                    <h3 className="card-title">{entry.title}</h3>
                    <div className="card-meta">
                      <span
                        className="category-label"
                        style={{
                          background: colors.bg,
                          color: colors.text,
                        }}
                      >
                        {entry.category}
                      </span>
                      <span className="card-version">v{entry.version}</span>
                      <span aria-hidden="true">•</span>
                      <span>
                        {new Date(entry.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <p className="card-description">{entry.description}</p>
                    <div className="card-tags">
                      {entry.tags.map((tag) => (
                        <span className="tag" key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Roadmap list (future items with GitHub issue integration) ────────────

type GitHubIssue = {
  reactions?: {
    "+1"?: number;
  };
};

const GITHUB_API_BASE =
  "https://api.github.com/repos/AliSafari-IT/project-card/issues";

function RoadmapList({
  items,
  isDark,
}: {
  items: PcRoadmapItem[];
  isDark: boolean;
}) {
  const [open, setOpen] = useState<string | null>(null);
  const [votes, setVotes] = useState<Record<string, number>>(() =>
    Object.fromEntries(items.map((i) => [i.version, i.votes ?? 0]))
  );

  useEffect(() => {
    let cancelled = false;

    Promise.all(
      items
        .filter((item) => item.issueNumber)
        .map(async (item) => {
          const response = await fetch(`${GITHUB_API_BASE}/${item.issueNumber}`);
          if (!response.ok) {
            throw new Error(`GitHub returned ${response.status}`);
          }
          const issue = (await response.json()) as GitHubIssue;
          return [item.version, issue.reactions?.["+1"] ?? 0] as const;
        })
    )
      .then((reactionCounts) => {
        if (!cancelled) {
          setVotes((current) => ({
            ...current,
            ...Object.fromEntries(reactionCounts),
          }));
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [items]);

  function toggle(version: string) {
    setOpen((current) => (current === version ? null : version));
  }

  return (
    <div className="roadmap-list">
      {items.map((item, index) => {
        const isOpen = open === item.version;
        const isLast = index === items.length - 1;

        return (
          <div
            key={item.version}
            className={`roadmap-item roadmap-item--${item.status}`}
          >
            <div className="roadmap-item__track">
              <span className="roadmap-item__dot" aria-hidden="true">
                {item.icon}
              </span>
              {!isLast && <div className="roadmap-item__line" aria-hidden="true" />}
            </div>

            <div className="roadmap-item__body">
              <button
                type="button"
                className="roadmap-item__summary"
                onClick={() => toggle(item.version)}
                aria-expanded={isOpen}
              >
                <span className="roadmap-item__version">v{item.version}</span>
                <span className="roadmap-item__date">{item.date}</span>
                <span
                  className={`roadmap-item__status roadmap-item__status--${item.status}`}
                >
                  {item.status}
                </span>
                <h3 className="roadmap-item__title">{item.title}</h3>
              </button>

              <div className="roadmap-item__details">
                <ul>
                  {item.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>

              {isOpen && (
                <div className="roadmap-item__preview">
                  {item.proposedApi && (
                    <DisplayCode
                      code={item.proposedApi}
                      language="tsx"
                      theme={isDark ? "dark" : "light"}
                      showLineNumbers={false}
                      showCopyButton={true}
                      fontSize="small"
                      maxHeight="300px"
                    />
                  )}
                  {item.issueUrl && (
                    <a
                      href={item.issueUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="roadmap-issue"
                    >
                      Discuss on GitHub ↗
                    </a>
                  )}
                  {item.issueUrl && (
                    <a
                      href={item.issueUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="roadmap-vote-btn"
                    >
                      Vote on GitHub (+1) ({votes[item.version] ?? 0})
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Page component ───────────────────────────────────────────────────────

export function RoadmapPage() {
  const { resolvedMode } = useTheme();
  const isDark = resolvedMode === "dark";
  const [view, setView] = useState<"history" | "roadmap" | "all">("all");

  const history = pcTimelineData.filter(
    (i) => i.status === "released" || i.status === "current"
  );
  const future = pcTimelineData.filter(
    (i) => i.status === "planned" || i.status === "ideation"
  );

  return (
    <div className={`roadmap-page ${isDark ? "dark-theme" : ""}`}>
      <header className="roadmap-header">
        <h1 className="roadmap-title">ProjectCard journey</h1>
        <p className="roadmap-subtitle">
          A continuous view of where{" "}
          <code>@asafarim/project-card</code> has been and where it is heading.
        </p>
      </header>

      <div className="roadmap-toggle" role="group" aria-label="Timeline view">
        {(["history", "roadmap", "all"] as const).map((v) => (
          <button
            key={v}
            type="button"
            className={`roadmap-toggle__btn${
              view === v ? " roadmap-toggle__btn--active" : ""
            }`}
            onClick={() => setView(v)}
            aria-pressed={view === v}
          >
            {v === "history"
              ? "View History (Changelog)"
              : v === "roadmap"
              ? "View Future (Roadmap)"
              : "View All"}
          </button>
        ))}
      </div>

      <div className={`roadmap-columns roadmap-columns--${view}`}>
        {view !== "roadmap" && (
          <section className="roadmap-section roadmap-section--history">
            <ChangelogTimeline
              entries={history.map(toChangelogEntry)}
              title="Changelog"
              subtitle="Shipped updates for @asafarim/project-card"
            />
          </section>
        )}

        {view !== "history" && (
          <section className="roadmap-section roadmap-section--future">
            <h2 className="roadmap-section__title">Roadmap</h2>
            <RoadmapList items={future} isDark={isDark} />
          </section>
        )}
      </div>
    </div>
  );
}

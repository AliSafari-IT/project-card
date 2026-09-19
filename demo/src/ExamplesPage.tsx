import { useTheme } from "@asafarim/react-themes";
import { ProjectsPage } from "./examples/usage-with-database";
import {
  ImprovedProjectCardExample,
  MultipleProjectsExample,
} from "./examples/improved-usage";

export function ExamplesPage() {
  const { resolvedMode } = useTheme();
  const theme = resolvedMode === "dark" ? "dark" : "light";

  return (
    <div className={`demo-container ${theme === "dark" ? "dark-theme" : ""}`}>
      <div className="demo-header">
        <h1>Examples</h1>
        <p>
          Three complete example views showing real-world ProjectCard usage:
          database-driven projects, improved props, and multi-card layouts.
        </p>
      </div>

      <div className="demo-section">
        <h2>🗄️ Database Projects Page</h2>
        <ProjectsPage theme={theme} hideLocalToggle={true} />
      </div>

      <div className="demo-section">
        <h2>✨ Improved ProjectCard</h2>
        <ImprovedProjectCardExample theme={theme} hideLocalToggle={true} />
      </div>

      <div className="demo-section">
        <h2>🧱 Multiple Projects</h2>
        <MultipleProjectsExample theme={theme} hideLocalToggle={true} />
      </div>
    </div>
  );
}

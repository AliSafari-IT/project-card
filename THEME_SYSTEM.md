# ProjectCard Theme System

The ProjectCard component now includes a comprehensive CSS custom properties (CSS variables) theme system that supports both light and dark themes with automatic system preference detection.

## 🎨 Theme Features

- **Light & Dark Themes**: Complete color schemes for both light and dark modes
- **System Preference Detection**: Automatic theme switching based on user's system preference
- **Custom Theme Support**: Easy customization of colors and styles
- **Smooth Transitions**: All theme changes include smooth transitions
- **TypeScript Support**: Full TypeScript support with proper type definitions

## 🚀 Quick Start

### Basic Theme Application

```typescript
import { applyProjectCardTheme } from '@asafarim/project-card';

// Apply light theme
applyProjectCardTheme('light');

// Apply dark theme
applyProjectCardTheme('dark');

// Apply auto theme (follows system preference)
applyProjectCardTheme('auto');
```

### React Integration

```typescript
import { createProjectCardThemeContext } from '@asafarim/project-card';

// Create theme context
const themeContext = createProjectCardThemeContext('auto');

// Use in your component
function App() {
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    themeContext.setTheme(theme);
  }, [theme]);
  
  return (
    <div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
      <ProjectCard {...props} />
    </div>
  );
}
```

## 🎯 Theme Variables

The theme system uses CSS custom properties with the `--pc-` prefix. Here are the main variable categories:

### Base Colors
- `--pc-primary`: Primary brand color
- `--pc-primary-hover`: Primary color on hover
- `--pc-primary-light`: Light variant of primary color
- `--pc-primary-bg`: Primary background color
- `--pc-primary-bg-light`: Light primary background

### Background Colors
- `--pc-bg-primary`: Main background color
- `--pc-bg-secondary`: Secondary background color
- `--pc-bg-tertiary`: Tertiary background color
- `--pc-bg-placeholder`: Placeholder background color

### Text Colors
- `--pc-text-primary`: Primary text color
- `--pc-text-secondary`: Secondary text color
- `--pc-text-tertiary`: Tertiary text color
- `--pc-text-muted`: Muted text color

### Border Colors
- `--pc-border-primary`: Primary border color
- `--pc-border-secondary`: Secondary border color
- `--pc-border-tertiary`: Tertiary border color

### Status Colors
Each status has background and text colors:
- `--pc-status-active-bg/text`: Active status
- `--pc-status-archived-bg/text`: Archived status
- `--pc-status-in-progress-bg/text`: In Progress status
- `--pc-status-completed-bg/text`: Completed status
- `--pc-status-draft-bg/text`: Draft status
- `--pc-status-coming-soon-bg/text`: Coming Soon status
- `--pc-status-planning-bg/text`: Planning status

### Link Colors
- `--pc-link-demo-bg/hover`: Demo link colors
- `--pc-link-repo-bg/hover`: Repository link colors
- `--pc-link-documentation-bg/hover`: Documentation link colors
- `--pc-link-custom-bg/hover`: Custom link colors

### State Colors
Each project state has border and background colors:
- `--pc-state-private-border/bg`: Private projects
- `--pc-state-completed-border/bg`: Completed projects
- `--pc-state-draft-border/bg`: Draft projects
- `--pc-state-in-progress-border/bg`: In Progress projects
- `--pc-state-coming-soon-border/bg`: Coming Soon projects
- `--pc-state-active-border/bg`: Active projects
- `--pc-state-planning-border/bg`: Planning projects

### Component-Specific Colors
- `--pc-progress-bg/fill`: Progress bar colors
- `--pc-tag-bg/hover/text`: Tag colors
- `--pc-metadata-bg/border/label/value`: Metadata section colors
- `--pc-shadow-light/medium/heavy`: Shadow colors
- `--pc-featured-border/bg`: Featured card colors
- `--pc-image-placeholder-bg/text`: Image placeholder colors
- `--pc-loading-bg`: Loading animation colors

## 🎨 Custom Themes

### Creating Custom Themes

```typescript
import { applyCustomProjectCardTheme } from '@asafarim/project-card';

// Apply custom colors
applyCustomProjectCardTheme({
  '--pc-primary': '#ff6b6b',
  '--pc-bg-primary': '#f8f9fa',
  '--pc-text-primary': '#2d3436',
  '--pc-border-primary': '#ddd',
});
```

### Theme Presets

```typescript
import { PROJECT_CARD_THEME_VARIABLES } from '@asafarim/project-card';

// Use predefined theme variables
const customLightTheme = {
  ...PROJECT_CARD_THEME_VARIABLES.light,
  '--pc-primary': '#e74c3c', // Custom red primary
  '--pc-bg-primary': '#ecf0f1', // Custom light background
};
```

## 🔧 Advanced Usage

### System Theme Detection

```typescript
import { watchProjectCardTheme } from '@asafarim/project-card';

// Start watching for system theme changes
const cleanup = watchProjectCardTheme('auto');

// Clean up when done
cleanup();
```

### Theme Context for React

```typescript
import { createProjectCardThemeContext } from '@asafarim/project-card';

const themeContext = createProjectCardThemeContext('auto');

// Access theme utilities
const { theme, setTheme, toggleTheme, cleanup } = themeContext;

// Use in component
useEffect(() => {
  return cleanup; // Clean up on unmount
}, []);
```

### Custom Theme with CSS

You can also override theme variables directly in CSS:

```css
/* Custom theme */
[data-theme="custom"] {
  --pc-primary: #ff6b6b;
  --pc-bg-primary: #f8f9fa;
  --pc-text-primary: #2d3436;
  --pc-border-primary: #ddd;
}

/* Apply custom theme */
document.documentElement.setAttribute('data-theme', 'custom');
```

## 🎯 Theme Switching Examples

### Simple Toggle

```typescript
import { applyProjectCardTheme, getCurrentProjectCardTheme } from '@asafarim/project-card';

function toggleTheme() {
  const currentTheme = getCurrentProjectCardTheme();
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyProjectCardTheme(newTheme);
}
```

### Theme Selector Component

```typescript
import React from 'react';
import { applyProjectCardTheme, ProjectCardTheme } from '@asafarim/project-card';

function ThemeSelector() {
  const [theme, setTheme] = useState<ProjectCardTheme>('light');

  const handleThemeChange = (newTheme: ProjectCardTheme) => {
    setTheme(newTheme);
    applyProjectCardTheme(newTheme);
  };

  return (
    <select value={theme} onChange={(e) => handleThemeChange(e.target.value as ProjectCardTheme)}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="auto">Auto</option>
    </select>
  );
}
```

### React Hook

```typescript
import { useState, useEffect } from 'react';
import { createProjectCardThemeContext, ProjectCardTheme } from '@asafarim/project-card';

function useProjectCardTheme(initialTheme: ProjectCardTheme = 'light') {
  const [theme, setTheme] = useState(initialTheme);
  const themeContext = createProjectCardThemeContext(initialTheme);

  useEffect(() => {
    themeContext.setTheme(theme);
    return themeContext.cleanup;
  }, [theme]);

  return {
    theme,
    setTheme,
    toggleTheme: themeContext.toggleTheme,
  };
}
```

## 🎨 Color Palette

### Light Theme Colors
- **Primary**: `#0066cc` (Blue)
- **Background**: `#ffffff` (White)
- **Text**: `#1a1a1a` (Dark Gray)
- **Border**: `#e1e5e9` (Light Gray)
- **Secondary Text**: `#666` (Medium Gray)

### Dark Theme Colors
- **Primary**: `#4da6ff` (Light Blue)
- **Background**: `#1a1a1a` (Dark Gray)
- **Text**: `#ffffff` (White)
- **Border**: `#333` (Dark Gray)
- **Secondary Text**: `#ccc` (Light Gray)

## 🔄 Migration Guide

### From Hardcoded Colors

If you were previously using hardcoded colors in your ProjectCard components, the theme system will automatically handle the color changes. No migration is required - the component will use the theme variables automatically.

### From Custom CSS Classes

If you had custom CSS classes for dark themes, you can now remove them as the theme system handles all color variations through CSS variables.

## 🎯 Best Practices

1. **Use Theme Utilities**: Always use the provided theme utilities instead of manually setting CSS variables
2. **System Preference**: Default to 'auto' theme to respect user's system preference
3. **Smooth Transitions**: All theme changes include smooth transitions for better UX
4. **Custom Themes**: Use `applyCustomProjectCardTheme` for brand-specific color schemes
5. **Cleanup**: Always call cleanup functions when using theme watchers

## 🐛 Troubleshooting

### Theme Not Applying
- Ensure the `data-theme` attribute is set on the document root
- Check that CSS variables are properly defined
- Verify that the theme utilities are imported correctly

### Custom Colors Not Working
- Make sure custom CSS variables are applied to the document root
- Check that variable names follow the `--pc-` prefix convention
- Verify that the CSS variables are defined before the component renders

### System Theme Not Detecting
- Ensure the `watchProjectCardTheme` function is called with 'auto' parameter
- Check that the media query listener is properly set up
- Verify that the cleanup function is called when component unmounts 
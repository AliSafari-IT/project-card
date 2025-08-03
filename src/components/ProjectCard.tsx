import React, { useEffect } from 'react';
import { ProjectCardProps } from '../types';
import styles from './ProjectCard.module.css';

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  description,
  techStacks,
  links,
  currentTheme = 'light',
  className = '',
  onCardClick,
  showTechStackIcons = false,
  maxDescriptionLength = 150,
  imageAlt,
  isLoading = false,
  featured = false,
  lastUpdated,
  status = 'active'
}) => {
  const isDark = currentTheme === 'dark';
  const [showTSIcon, setShowTSIcon] = React.useState(showTechStackIcons);

  const truncatedDescription = maxDescriptionLength && description.length > maxDescriptionLength
    ? `${description.substring(0, maxDescriptionLength)}...`
    : description;

  const getLinkIcon = (type: string) => {
    switch (type) {
      case 'demo':
        return '🚀';
      case 'repo':
        return '🐙';
      case 'documentation':
        return '📚';
      default:
        return '🔗';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'archived':
        return 'Archived';
      case 'in-progress':
        return 'In Progress';
      case 'draft':
        return 'Draft';
      case 'completed':
        return 'Completed';
      case 'coming-soon':
        return 'Coming Soon';
      default:
        return 'Active';
    }
  };

  const cardClasses = [
    styles.card,
    isDark ? styles.cardDark : '',
    featured ? (isDark ? styles.featuredDark : styles.featured) : '',
    isLoading ? styles.loading : '',
    className
  ].filter(Boolean).join(' ');

  if (isLoading) {
    return (
      <div className={cardClasses} style={{ width: '100%' }}>
        <div
          className={`${styles.loadingPlaceholder} ${isDark ? styles.loadingPlaceholderDark : ''}`}
          style={{
            height: '200px',
            marginBottom: '1rem',
            width: '100%',
            display: 'block'
          }}
        />
        <div
          className={`${styles.loadingPlaceholder} ${isDark ? styles.loadingPlaceholderDark : ''}`}
          style={{
            height: '1.5rem',
            marginBottom: '0.75rem',
            width: '100%',
            display: 'block'
          }}
        />
        <div
          className={`${styles.loadingPlaceholder} ${isDark ? styles.loadingPlaceholderDark : ''}`}
          style={{
            height: '3rem',
            marginBottom: '1rem',
            width: '100%',
            display: 'block'
          }}
        />
        <div
          className={`${styles.loadingPlaceholder} ${isDark ? styles.loadingPlaceholderDark : ''}`}
          style={{
            height: '2rem',
            width: '100%',
            display: 'block'
          }}
        />
      </div>
    );
  }

  useEffect(() => {
    setShowTSIcon(showTechStackIcons);
  }, [showTechStackIcons]);

  return (
    <div className={cardClasses} onClick={onCardClick}>
      {status && (
        <div 
        style={{
          backgroundColor: status === 'active' ? 'green' : status === 'archived' ? 'red' : status === 'in-progress' ? 'yellow' : status === 'draft' ? 'gray' : status === 'completed' ? 'blue' : status === 'coming-soon' ? 'orange' : 'gray',
          color: status === 'active' ? 'white' : status === 'archived' ? 'white' : status === 'in-progress' ? 'black' : status === 'draft' ? 'white' : status === 'completed' ? 'white' : status === 'coming-soon' ? 'white' : 'white',
          zIndex: 1000,
          position: 'absolute'
        }}
        className={`${styles.status} ${styles[`status${status.charAt(0).toUpperCase() + status.slice(1).replace('-', '')}${isDark ? 'Dark' : ''}`]}`}>
          {getStatusLabel(status)}
        </div>
      )}


      {image && (<div className={styles.imageContainer}>
        <img
          src={typeof image === 'string' ? image : image.src}
          alt={imageAlt || title}
          className={styles.image}
          loading="lazy"
          width={typeof image === 'object' ? image.width : undefined}
          height={typeof image === 'object' ? image.height : undefined}
        />
      </div>
      )}

      <h3 className={`${styles.title} ${isDark ? styles.titleDark : ''}`}>
        {title}
      </h3>

      <p className={`${styles.description} ${isDark ? styles.descriptionDark : ''}`}>
        {truncatedDescription}
      </p>

      <div className={styles.techStack}>
        {techStacks?.map((tech, index) => (
          <span
            key={index}
            className={`${styles.techTag} ${isDark ? styles.techTagDark : ''}`}
            style={{ backgroundColor: tech.color }}
          >
            {showTSIcon && tech.icon && (
              <span className={styles.techIcon}>{tech.icon}</span>
            )}
            {tech.name}
          </span>
        ))}
      </div>

      <div className={styles.links}>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.link} ${styles[`link${link.type.charAt(0).toUpperCase() + link.type.slice(1)}`]} ${isDark && link.type === 'repo' ? styles.linkRepoDark : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span>{getLinkIcon(link.type)}</span>
            {link.label || link.type.charAt(0).toUpperCase() + link.type.slice(1)}
          </a>
        ))}
      </div>

      {lastUpdated && (
        <div className={`${styles.lastUpdated} ${isDark ? styles.lastUpdatedDark : ''}`}>
          Last updated: {new Date(lastUpdated).toLocaleDateString()}
        </div>
      )}
    </div>
  );
};
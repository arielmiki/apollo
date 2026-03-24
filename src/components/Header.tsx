import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const getLinkClass = (path: string) => {
    const baseClass = "transition-colors text-sm uppercase tracking-wider";
    return location.pathname === path
      ? `${baseClass} text-amber-700 dark:text-amber-500 font-medium`
      : `${baseClass} text-gray-600 dark:text-gray-300 hover:text-teal-400 dark:hover:text-teal-400`;
  };

  const getMobileLinkClass = (path: string) => {
    const baseClass = "block py-2 px-4 text-sm uppercase tracking-wider";
    return location.pathname === path
      ? `${baseClass} text-amber-700 dark:text-amber-500 font-medium`
      : `${baseClass} text-gray-600 dark:text-gray-300`;
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            <Link to="/" className={getLinkClass('/')}>Home</Link>
            <Link to="/projects" className={getLinkClass('/projects')}>Projects</Link>
            <Link to="/experience" className={getLinkClass('/experience')}>Experience</Link>
            <Link to="/education" className={getLinkClass('/education')}>Education</Link>
          </nav>

          <div className="flex items-center gap-2">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden py-2 bg-white dark:bg-gray-900"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <Link to="/" className={getMobileLinkClass('/')} onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/projects" className={getMobileLinkClass('/projects')} onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
            <Link to="/experience" className={getMobileLinkClass('/experience')} onClick={() => setIsMenuOpen(false)}>
              Experience
            </Link>
            <Link to="/education" className={getMobileLinkClass('/education')} onClick={() => setIsMenuOpen(false)}>
              Education
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

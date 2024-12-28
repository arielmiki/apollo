import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClass = (path: string) => {
    const baseClass = "transition-colors text-sm uppercase tracking-wider";
    return location.pathname === path
      ? `${baseClass} text-amber-700 font-medium`
      : `${baseClass} text-gray-600 hover:text-teal-400`;
  };

  const getMobileLinkClass = (path: string) => {
    const baseClass = "block py-2 px-4 text-sm uppercase tracking-wider";
    return location.pathname === path
      ? `${baseClass} text-amber-700 font-medium`
      : `${baseClass} text-gray-600`;
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={getLinkClass('/')}>Home</Link>
            <Link to="/projects" className={getLinkClass('/projects')}>Projects</Link>
            <Link to="/experience" className={getLinkClass('/experience')}>Experience</Link>
            <Link to="/education" className={getLinkClass('/education')}>Education</Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-amber-700 focus:outline-none"
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

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-2 bg-white">
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
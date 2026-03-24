import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const useKeyboardShortcuts = () => {
  const navigate = useNavigate();
  const { toggleTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key.toLowerCase()) {
        case 'd':
          e.preventDefault();
          toggleTheme();
          break;
        case '1':
          e.preventDefault();
          navigate('/');
          break;
        case '2':
          e.preventDefault();
          navigate('/projects');
          break;
        case '3':
          e.preventDefault();
          navigate('/experience');
          break;
        case '4':
          e.preventDefault();
          navigate('/education');
          break;
        case 't':
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, toggleTheme]);
};

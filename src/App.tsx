import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Header } from './components/Header';
import { BackToTop } from './components/BackToTop';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { Home } from './pages/Home';
import { ExperiencePage } from './pages/ExperiencePage';
import { EducationPage } from './pages/EducationPage';
import { ProjectsPage } from './pages/ProjectsPage';

const titles: Record<string, string> = {
  '/': 'Ariel Miki Abraham - Software Engineer',
  '/experience': 'Experience - Ariel Miki Abraham',
  '/education': 'Education - Ariel Miki Abraham',
  '/projects': 'Projects - Ariel Miki Abraham',
};

const TitleManager = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = titles[location.pathname] || 'Ariel Miki Abraham';
  }, [location.pathname]);

  return null;
};

const KeyboardShortcutsHandler = () => {
  useKeyboardShortcuts();
  return null;
};

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <TitleManager />
          <KeyboardShortcutsHandler />
          <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Header />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/education" element={<EducationPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
              </Routes>
            </main>
            <BackToTop />
          </div>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

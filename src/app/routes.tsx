import { createBrowserRouter, Outlet } from 'react-router';
import { ThemeProvider, useTheme } from './ThemeContext';
import { Navbar }       from './components/Navbar';
import { Hero }         from './components/Hero';
import { About }        from './components/About';
import { Skills }       from './components/Skills';
import { Experience }   from './components/Experience';
import { Portfolio }    from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Contact }      from './components/Contact';
import { Blog }         from './components/Blog';

function PortfolioPage() {
  const { theme } = useTheme();
  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        background: theme === 'dark' ? '#050505' : '#f8fafc',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: PortfolioPage },
      { path: 'blog', Component: Blog },
    ],
  },
]);

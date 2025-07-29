import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Fun from './pages/Fun';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-dark-950 transition-colors duration-200">
          <Helmet>
            <title>Your Name - Software Engineer</title>
            <meta name="description" content="Personal website showcasing projects, experience, and CS-inspired design" />
            <meta name="keywords" content="software engineer, developer, portfolio, projects" />
            <meta property="og:title" content="Your Name - Software Engineer" />
            <meta property="og:description" content="Personal website showcasing projects, experience, and CS-inspired design" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Your Name - Software Engineer" />
            <meta name="twitter:description" content="Personal website showcasing projects, experience, and CS-inspired design" />
          </Helmet>
          
          <Navbar />
          
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/fun" element={<Fun />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 
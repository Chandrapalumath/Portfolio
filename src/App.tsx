import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Background3D from './components/Background3D';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smooth initial render
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center">
        <div className="text-white text-2xl font-bold animate-pulse">
          Chandrapal Singh Umath
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <Background3D />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Achievements />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App; 
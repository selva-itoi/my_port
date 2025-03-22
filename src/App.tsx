import React, { useState } from 'react';
import { Sun, Moon, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <HelmetProvider>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
        <Helmet>
          <title>Selva Sivam B - Software Engineer & Team Lead</title>
          <meta name="description" content="Passionate Software Engineer with expertise in backend and full-stack development. Leading teams to deliver high-quality solutions." />
          <meta name="theme-color" content={darkMode ? '#111827' : '#ffffff'} />
        </Helmet>

        <nav className="fixed w-full z-50 backdrop-blur-sm bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <span className="text-xl font-bold text-blue-600 dark:text-blue-400">Selva Sivam B</span>
              <div className="flex items-center gap-4 sm:gap-6">
                <a href="#about" className="hidden sm:block hover:text-blue-600 dark:hover:text-blue-400">About</a>
                <a href="#experience" className="hidden sm:block hover:text-blue-600 dark:hover:text-blue-400">Experience</a>
                <a href="#projects" className="hidden sm:block hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
                <a href="#skills" className="hidden sm:block hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
                <a href="#contact" className="hidden sm:block hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-16">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>

        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 dark:text-gray-400 text-center sm:text-left">© 2024 Selva Sivam B. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="mailto:contact.selvasivam@gmail.com" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="tel:+917010044228" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" aria-label="Phone">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/selva-sivam-b-30943b301" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
}

export default App;
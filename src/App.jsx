import React, { useEffect, useState } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { analytics } from './firebase'; // Import analytics
import { logEvent } from 'firebase/analytics'; // Import logEvent function
import MarkdownInput from './components/MarkdownInput';
import TextOutput from './components/TextOutput';
import About from './components/About';
import Features from './components/Features';
import FAQ from './components/FAQ';
import { FiGithub } from 'react-icons/fi';

const App = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    // Log a page view event when the component mounts
    logEvent(analytics, 'page_view', { page_title: 'Markdown to Text Converter' });

    // Log custom events based on user actions (example)
    logEvent(analytics, 'app_load', { description: 'App Loaded Successfully' });
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Markdown to Text Converter | Free Online Tool</title>
        <meta
          name="description"
          content="Convert Markdown to plain text easily with our free, fast, and responsive tool."
        />
      </Helmet>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
        <header className="w-full max-w-4xl flex justify-between items-center py-4">
          <h1 className="text-3xl font-bold text-gray-800">Markdown to Text Converter</h1>
          <a
            href="https://github.com/ltxstudio/hgfrtt5r"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black"
          >
            <FiGithub size={24} />
          </a>
        </header>
        <MarkdownInput markdown={markdown} setMarkdown={setMarkdown} />
        <TextOutput markdown={markdown} />
        <About />
        <Features />
        <FAQ />
        <footer className="mt-auto text-gray-500">
          <p>Made with React, Tailwind CSS, and Framer Motion.</p>
        </footer>
      </div>
    </HelmetProvider>
  );
};

export default App;

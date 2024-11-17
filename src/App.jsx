import React, { useState } from 'react';
import MarkdownInput from './components/MarkdownInput';
import TextOutput from './components/TextOutput';
import About from './components/About';
import Features from './components/Features';
import FAQ from './components/FAQ';
import { FiGithub } from 'react-icons/fi';

const App = () => {
  const [markdown, setMarkdown] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <header className="w-full max-w-4xl flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold text-gray-800">Markdown to Text Converter</h1>
        <a
          href="https://github.com/your-repo"
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
  );
};

export default App;

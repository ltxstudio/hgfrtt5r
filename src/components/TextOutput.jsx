import React from 'react';
import { marked } from 'marked';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const TextOutput = ({ markdown }) => {
  const plainText = marked(markdown, { renderer: new marked.Renderer() }).replace(/<[^>]+>/g, '');

  const downloadText = () => {
    const blob = new Blob([plainText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'output.txt';
    link.click();
  };

  return (
    <motion.div
      className="w-full max-w-xl mx-auto my-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <label className="block text-lg font-semibold mb-2">Text Output</label>
      <textarea
        className="w-full p-4 h-40 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
        value={plainText}
        readOnly
      />
      <button
        onClick={downloadText}
        className="flex items-center mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
      >
        <FiDownload className="mr-2" /> Download as .txt
      </button>
    </motion.div>
  );
};

export default TextOutput;

import React from 'react';
import { motion } from 'framer-motion';

const MarkdownInput = ({ markdown, setMarkdown }) => {
  return (
    <motion.div
      className="w-full max-w-xl mx-auto my-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <label className="block text-lg font-semibold mb-2">Markdown Input</label>
      <textarea
        className="w-full p-4 h-40 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Enter Markdown here..."
      />
    </motion.div>
  );
};

export default MarkdownInput;

import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => (
  <motion.section
    className="w-full max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center mb-4">
      <FaInfoCircle className="text-blue-500 text-2xl mr-2" />
      <h2 className="text-2xl font-bold">About</h2>
    </div>
    <p className="text-gray-700">
      This tool helps you convert Markdown text to plain text instantly. It's perfect for developers, writers, and anyone
      who works with Markdown.
    </p>
  </motion.section>
);

export default About;

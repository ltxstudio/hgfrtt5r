import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const faqs = [
  { question: 'What is Markdown?', answer: 'Markdown is a lightweight markup language for creating formatted text using a plain-text editor.' },
  { question: 'Is this tool free?', answer: 'Yes, this tool is completely free to use.' },
  { question: 'Can I use this on mobile?', answer: 'Absolutely! The tool is fully responsive and works on all devices.' },
];

const FAQ = () => (
  <motion.section
    className="w-full max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center mb-4">
      <FaQuestionCircle className="text-purple-500 text-2xl mr-2" />
      <h2 className="text-2xl font-bold">FAQ</h2>
    </div>
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b pb-2">
          <h3 className="font-semibold">{faq.question}</h3>
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      ))}
    </div>
  </motion.section>
);

export default FAQ;

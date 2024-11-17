import React from 'react';
import { FaFileDownload, FaMobileAlt, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  { icon: <FaFileDownload />, title: 'Download as TXT', description: 'Easily download your converted text as a .txt file.' },
  { icon: <FaMobileAlt />, title: 'Responsive Design', description: 'Use this tool on any device with a seamless experience.' },
  { icon: <FaRocket />, title: 'Fast & Lightweight', description: 'Enjoy quick conversions without any delays.' },
];

const Features = () => (
  <motion.section
    className="w-full max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center mb-4">
      <FaRocket className="text-green-500 text-2xl mr-2" />
      <h2 className="text-2xl font-bold">Features</h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="text-4xl text-blue-500 mb-2">{feature.icon}</div>
          <h3 className="text-xl font-semibold">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  </motion.section>
);

export default Features;

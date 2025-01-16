import React from 'react';
import { motion } from 'framer-motion';
import { Brain, FileText, Box, Network, Search, GitBranch } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Unstructured Data Parsing',
    description: 'Leverage state-of-the-art vision models to extract, parse, and chunk unstructured data like text, PDFs, images, and more.',
  },
  {
    icon: Box,
    title: 'Data Embedding & Vectorization',
    description: 'Transform parsed data into high-dimensional embeddings, enabling precise vector search and semantic alignment for downstream tasks.',
  },
  {
    icon: Network,
    title: 'Knowledge Augmented Generation (KAG)',
    description: 'Build rich knowledge graphs by aligning embeddings and integrating structured insights, powering next-level content creation and reasoning.',
  },
  {
    icon: Brain,
    title: 'Contextual AI Agents',
    description: 'Deploy agents with contextual memory that retain and adapt knowledge for every query, enabling consistent and insightful responses.',
  },
  {
    icon: Search,
    title: 'Deep Research AI',
    description: 'A specialized AI agent scours the entire internet for you, aggregating and synthesizing targeted, domain-specific knowledge in real time.',
  },
  {
    icon: GitBranch,
    title: 'Seamless End-to-End Flow',
    description: 'From parsing unstructured data to generating actionable insights, the entire flow is optimized for scalability and unmatched precision.',
  },
];

export const Features = () => {
  return (
    <div id="features" className="bg-black py-24 scroll-mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Where Human Intuition Meets AI Intelligence
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Cortex is the 'Second Brain' for knowledge workers, designed to revolutionize how professionals approach and solve complex challenges. With Cortex, two brains are always working: yours for creativity and decision-making, and our AI platform, delivering the thinking, reasoning, and automation to complement your efforts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

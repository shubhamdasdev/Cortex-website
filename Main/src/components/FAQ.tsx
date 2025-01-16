import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is Cortex?",
    answer:
      "Cortex is an AI-driven platform designed to serve as your 'Second Brain.' It automates complex knowledge tasks, augments your creativity, and streamlines workflow processes to help you work smarter.",
  },
  {
    question: "How does the 'Second Brain' concept work?",
    answer:
      "Cortex uses orchestrated AI agents to analyze data, generate insights, and propose workflow optimizations. Meanwhile, you retain full control over decision-making, allowing for a seamless blend of human intuition and AI-powered efficiency.",
  },
  {
    question: "When is Cortex launching?",
    answer:
      "Cortex is slated for an early 2025 launch. We’re currently finalizing key features and integrations to ensure a smooth experience at launch.",
  },
  {
    question: "How do I join the waitlist?",
    answer:
      "Simply click 'Join Waitlist' on our homepage or sign up through our announcements email form. You’ll receive updates on progress, beta invitations, and exclusive early-bird offers.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Data security is our priority. We employ strong encryption, regular security audits, and adhere to industry best practices to protect your information at every step.",
  },
  {
    question: "Do I need coding experience to use Cortex?",
    answer:
      "Not at all. Cortex is designed to be accessible for all knowledge workers. We provide an intuitive interface and clear prompts—no coding background required.",
  },
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="bg-black py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full text-left p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 text-gray-300 overflow-hidden"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
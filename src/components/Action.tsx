import React from 'react';
import { motion } from 'framer-motion';

export const Action = () => {
  return (
    <div id="action" className="bg-black py-24 scroll-mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* 
            This is the box that previously had a gradient/transparent background.
            Now it has a background image. 
          */}
          <div
            className="p-8 rounded-xl text-center bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('src/product-images/mc.png')", // Replace with your desired image path
            }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-gray-200 max-w-xl mx-auto mb-8">
              Join our waitlist and be among the first to experience the power of Cortex.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-opacity-90 transition-colors"
            >
              Join the Waitlist
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

import { motion } from 'framer-motion';
import { useRef } from 'react';

const productDetails = [
  {
    title: 'Document Analysis',
    description:
      'Harness state-of-the-art vision models to extract and process raw text, PDFs, images, and other unstructured data formats.',
    image: 'src/product-images/AM.png',
  },
  {
    title: 'Workflow Automation',
    description:
      'Transform parsed data into high-dimensional embeddings, enabling precise vector search and semantic data alignment.',
    image: 'src/product-images/CM.png',
  },
  {
    title: 'AI-Powered Insights',
    description:
      'Construct rich knowledge graphs by aligning embeddings and structuring data, powering advanced reasoning and content creation.',
    image: 'src/product-images/PM.png',
  },
];

export const ProductDetails = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div id="product" className="bg-black py-24 scroll-mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Explore Cortex's Capabilities
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Discover how Cortex can transform your knowledge work with its powerful features.
          </p>
        </motion.div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {productDetails.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1
              }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div 
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={detail.image}
                    alt={detail.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#39FF14] transition-colors">
                    {detail.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {detail.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

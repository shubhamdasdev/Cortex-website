import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export const SplineInteractive = () => {
  return (
    <div id="interactive" className="bg-black py-24 scroll-mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Meet Cortex AI Brain
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Interact with Cortex 
          </p>
        </motion.div>

        <div className="relative h-[600px] w-full rounded-xl overflow-hidden border border-gray-800">
          <Spline
            scene="https://prod.spline.design/xfq6nw5HNrP2OhN8/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </div>
  );
}; 
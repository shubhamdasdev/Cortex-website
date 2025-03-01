'use client';

import { useEffect, useState, Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

/** 
 * Utility function to calculate remaining time until launch.
 */
function calculateTimeLeft() {
  const launchDate = new Date('2025-03-05').getTime();
  const now = new Date().getTime();
  const difference = launchDate - now;

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

/**
 * Hero Component
 * - Displays a 3D Spline background (Particle AI Brain).
 * - Shows a countdown to Feb 28, 2025.
 * - Includes a brand logo (Brain icon) and a "Join Waitlist" CTA.
 */
export default function Hero() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isSplineLoading, setIsSplineLoading] = useState(true);

  useEffect(() => {
    // Update countdown every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const onSplineLoad = () => {
    // Once Spline loads, remove spinner
    setIsSplineLoading(false);
  };

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden pt-16">
      
      {/* Optional loading state (spinner) while Spline is loading */}
      {isSplineLoading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/50">
          <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-white"></div>
        </div>
      )}

      {/* Spline 3D Background */}
      <Suspense fallback={
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/50">
          <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-white"></div>
        </div>
      }>
        <div className="absolute inset-0 w-full h-full z-10" style={{ minHeight: '100vh' }}>
          <Spline
            scene="https://my.spline.design/particleaibrain-7b9061cfc45a8b0d02fd6e8655c4f9ab/scene.splinecode"
            onLoad={onSplineLoad}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </Suspense>

      {/* (Optional) Gradient overlay above the Spline but behind the text */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      {/* Main Content Layer */}
      <div className="container mx-auto px-4 text-center relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          {/* Logo + Title */}
          <div className="flex items-center justify-center mb-8">
            <Brain className="w-12 h-12 text-white mr-2" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Cortex
            </h1>
          </div>

          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
            Your Second Brain for Knowledge Work
          </h2>

          {/* Countdown */}
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-black/50 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {value}
                </div>
                <div className="text-gray-400 text-sm uppercase">{unit}</div>
              </div>
            ))}
          </div>

          <p className="text-gray-300 mb-8">
            Launching soon. Be among the first to experience the power of Cortex.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#ffffff] text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-opacity-90 transition-colors border-2 border-[#ffffff] hover:border-opacity-90"
          >
            Join the Waitlist
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

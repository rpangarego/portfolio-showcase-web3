"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="container min-h-[90vh] flex flex-col justify-center">
      <div className="hero-text mb-3">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl">
            H! I'm <span className="font-semibold">Ronaldo Pangarego</span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-lg md:text-2xl">
            Blockchain Dev, Web3 Enthusiast ... Lifelong Learner
          </p>
        </motion.div>
      </div>

      <div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button className="btn">View more</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

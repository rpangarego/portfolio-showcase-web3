"use client";

import React from "react";
import { motion } from "framer-motion";
import { SelectedPage } from "../constants/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Hero = ({ setSelectedPage }: Props) => {
  return (
    <div
      id="welcome"
      className="container min-h-[90vh] flex flex-col justify-center"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onViewportEnter={() => setSelectedPage(SelectedPage.Welcome)}
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
        <p className="text-lg md:text-2xl mb-5">
          Blockchain Dev, Web3 Enthusiast ... Lifelong Learner
        </p>

        <a href="#projects" className="btn">
          View Projects
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;

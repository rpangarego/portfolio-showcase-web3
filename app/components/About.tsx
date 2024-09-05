"use client";

import React from "react";
import { motion } from "framer-motion";
import { SelectedPage } from "../constants/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {
  return (
    <div
      id="about"
      className="min-h-[90vh] flex content-center items-center pt-20"
    >
      <div className="container py-10">
        <h1 className="text-3xl text-center font-bold  md:text-4xl">
          About me?
        </h1>

        <div className="flex flex-col justify-between items-center lg:flex-row">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            onViewportEnter={() => setSelectedPage(SelectedPage.About)}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="lg:w-1/2"
          >
            <img
              src="/1.jpg"
              alt="image_about_me"
              style={{
                width: "80%",
                height: "80%",
                maxWidth: "600px",
                maxHeight: "600px",
              }}
              className="mx-auto "
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="lg:w-[48%] mx-auto"
          >
            <p className="text-lg indent-[30px]">
              Hi there! My name is{" "}
              <span className="font-bold">Ronaldo Pangarego</span>. I am a
              Blockchain Developer and Web3 Enthusiast, currently living in
              Indonesia. Over the past few months, I've been on a journey of
              learning Web3 world. During this time, I've gained experience in
              creating, deploying, and testing smart contracts, developing
              ERC-20 tokens, and even creating my own NFT collection (
              <a
                href="https://testnets.opensea.io/collection/the-lamongan-project"
                target="_blank"
                className="underline"
              >
                The Lamongan Project
              </a>
              ).
            </p>
            <br />
            <p className="text-lg indent-[30px]">
              I love traveling, exploring new environments, cities, and
              countries. I'm always eager to experience new things and also
              quick to dive into new adventures. As a lifelong learner, I am
              highly organized, self-motivated, and creative, constantly seeking
              to expand my knowledge. 🍀
            </p>

            <div className="mt-8">
              <a
                href="https://www.linkedin.com/in/rpangarego"
                target="_blank"
                className="btn mr-8"
              >
                View LinkedIn
              </a>
              <a href="" className="btn" download>
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

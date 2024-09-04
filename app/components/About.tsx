"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="min-h-[70vh]">
      <div className="container pt-10">
        <div className="mt-4 mb-16">
          <h1 className="text-3xl text-center font-bold mb-8 md:text-4xl">
            About me?
          </h1>

          <div className="flex flex-col justify-between items-center lg:flex-row">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
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
              className="lg:w-[48%] mx-auto text-lg indent-[30px]"
            >
              <p>
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
              <p>
                I love traveling, exploring new environments, cities, and
                countries. I'm always eager to experience new things and also
                quick to dive into new adventures. As a lifelong learner, I am
                highly organized, self-motivated, and creative, constantly
                seeking to expand my knowledge. 🍀
              </p>
              <button className="btn mt-5">Download CV</button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

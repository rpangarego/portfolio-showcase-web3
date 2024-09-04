"use client";
import React from "react";
import projectList from "../projectList.json";
import { LinkOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="min-h-[95vh] bg-[#f8f9fa]">
      <div className="container py-10">
        <div className="mt-4 mb-16">
          <h1 className="text-3xl text-center font-bold mb-8 md:text-4xl">
            {"<Projects />"}
          </h1>
          <p className="mx-auto md:w-1/2 md:text-center text-lg">
            Here's a collection of my projects, each developed using a diverse
            set of technologies chosen to best suit the project's specific
            needs. These works showcase my ability to turn concepts into
            functional, well-crafted applications.
          </p>
        </div>

        <div className="projects flex flex-col md:flex-row gap-8">
          {/* project */}
          <motion.div
            className="card border border-gray-800 md:w-3/12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img
              src="/projects/1.png"
              alt="project_1_image"
              className="card-image"
            />
            <div className="card-description p-5">
              <div className="flex flex-row mb-2">
                <h4 className="w-full font-bold text-2xl">Project 1</h4>
                <LinkOutlined className="hover:cursor-pointer" />
              </div>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
                error ducimus ullam pariatur, rerum adipisci saepe temporibus.
              </p>
            </div>
          </motion.div>
          {/* project */}
          <motion.div
            className="card border border-gray-800 md:w-3/12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img
              src="/projects/2.png"
              alt="project_1_image"
              className="card-image"
            />
            <div className="card-description p-5">
              <div className="flex flex-row mb-2">
                <h4 className="w-full font-bold text-2xl">Project 1</h4>
                <LinkOutlined className="hover:cursor-pointer" />
              </div>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
                error ducimus ullam pariatur, rerum adipisci saepe temporibus.
              </p>
            </div>
          </motion.div>
          {/* project */}
          <motion.div
            className="card border border-gray-800 md:w-3/12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img
              src="/projects/3.png"
              alt="project_1_image"
              className="card-image"
            />
            <div className="card-description p-5">
              <div className="flex flex-row mb-2">
                <h4 className="w-full font-bold text-2xl">Project 1</h4>
                <LinkOutlined className="hover:cursor-pointer" />
              </div>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
                error ducimus ullam pariatur, rerum adipisci saepe temporibus.
              </p>
            </div>
          </motion.div>
          {/* project */}
          <motion.div
            className="card border border-gray-800 md:w-3/12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img
              src="/projects/4.png"
              alt="project_1_image"
              className="card-image"
            />
            <div className="card-description p-5">
              <div className="flex flex-row mb-2">
                <h4 className="w-full font-bold text-2xl">Project 1</h4>
                <LinkOutlined className="hover:cursor-pointer" />
              </div>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
                error ducimus ullam pariatur, rerum adipisci saepe temporibus.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

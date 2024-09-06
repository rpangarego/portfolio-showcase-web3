"use client";
import React from "react";
import projectList from "../projectList.json";
import { LinkOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { SelectedPage } from "../constants/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Projects = ({ setSelectedPage }: Props) => {
  return (
    <div
      id="projects"
      className="min-h-[90vh] bg-[#f8f9fa] flex content-center items-center pt-20"
    >
      <div className="container py-10">
        <div className="mt-4 mb-16">
          <h1 className="text-3xl text-center font-bold mb-8 md:text-4xl">
            {"<Projects />"}
          </h1>
          <p className="mx-auto lg:w-3/4 xl:w-1/2 md:text-center text-lg">
            Here&apos;s a collection of my projects, each developed using a
            diverse set of technologies chosen to best suit the project&apos;s
            specific needs. These works showcase my ability to turn concepts
            into functional, well-crafted applications.
          </p>
        </div>

        {/* <div className="projects flex flex-col lg:flex-row gap-8 bg-pink-300"> */}
        <div className="projects grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* project */}
          {projectList.map((project, id) => (
            <motion.div
              key={id}
              className="border border-gray-800"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img
                src={project.image}
                alt={`${project.name}_image`}
                className="card-image border-b border-gray-700"
              />
              <div className="card-description py-3 px-5 bg-white">
                <a href={project.github} target="_blank">
                  <div className="flex flex-row mb-2">
                    <h4 className="w-full font-bold text-2xl hover:underline">
                      {project.name}
                    </h4>
                    <LinkOutlined className="hover:cursor-pointer" />
                  </div>
                </a>

                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Learning Managment System Clone",
    description: "An application where you can watch and purchase courses with a teacher mode where the teacher can do basic CRUD on the courses using React, TypeScript, NextJS, TailwindCSS, ShadcnUI, Prisma, MySQL, React hook forms",
    image: "/images/projects/1.png",
    previewUrl: "https://lms-clone-lac.vercel.app/",
  },
  {
    id: 2,
    title: "Twitch Clone",
    description: "An application where the user has the ability to do live streams and users from all the internet can watch them with a dashboard that can alterate the stream info using React, NextJS, TypeScript, TailwindCSS, ShadcnUI, Prisma, MySQL and Zustand",
    image: "/images/projects/1.png",
    previewUrl: "https://lms-clone-lac.vercel.app/",
  },
  {
    id: 3,
    title: "Application Name TBD",
    description: "An educative mobile based application where members of a certain company (or client) can watch training courses with a tik tok scroll behaviour. I've made a backend API using NestJS, Prisma, MongoDB with Authentication. The dashboard for this platform where the admins can edit and alterate training courses was made in NextJS, TypeScript, TailwindCSS, ShadcnUI, React Hook Forms.The main product is the mobile app made in React Native.",
    image: "/images/projects/1.png",
    previewUrl: "https://lms-clone-lac.vercel.app/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Personal Projects
      </h2>
      <h4 className="text-center text-xl text-white mt-4 mb-4 md:mb-12"> These are some personal projects I have successfully build. </h4>
      <div className="flex flex-col gap-10">
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {projectsData.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
              >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;

"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "PocketISA",
    description: "An AI-driven CRM tool utilizing OpenAI’s GPT-4 to automate communication with real estate leads, mimicking human interactions to boost engagement and conversion rates",
    image: `/images/projects/1.png`,
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/A2K-Solutions/PocketISA/",
    previewUrl: "https://web.pocketisai.a2ksols.com/",
  },
  {
    id: 2,
    title: "LimouCloud",
    description: "A cloud-based platform with an integrated accounting suite, GPS tracking, and reservation management for the transportation industry.",
    image: `/images/projects/2.png`,
    tag: ["All", "Web","Mobile"],
    gitUrl: "/",
    previewUrl: "https://play.google.com/store/apps/details?id=com.limouclouddriver&hl=en",
  },
  {
    id: 3,
    title: "WITS Play Trivia",
    description: "A quiz game built for live TV broadcast purposes.",
    image: `/images/projects/3.png`,
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://apps.apple.com/pk/app/wits-play-trivia/id6446279637/",
  },
  {
    id: 4,
    title: "Simplar",
    description: "An Ambulance Navigation and Reservation service application",
    image: `/images/projects/4.png`,
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://play.google.com/store/apps/details?id=com.simplar.kodex.rn",
  },
  {
    id: 5,
    title: "Mindhug",
    description: "A therapist booking and consultation platform offering video and live consultations.",
    image: `/images/projects/5.png`,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Ajman Sewerage",
    description: "Application for NOC and Sewerage billings",
    image: `/images/projects/6.png`,
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://play.google.com/store/apps/details?id=com.moalajah.ajmansewerageutility&pcampaignid=webshare",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
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
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {

  const projects = [
    {
      title: "Stock Management System",
      desc: `Developed a Stock Management System to efficiently manage inventory, track stock levels 
             and handle product details in real-time. The system reduces manual errors and provides features
             like stock updates, low-stock alerts, and report generation for better decision-making.`,
      tech: "HTML, CSS, JavaScript, Bootstrap, ReactJS",
      github: "https://github.com/preranabendale/product-management-app",
      live: "#",
      image: "/stock.jpg"   
    },
    {
      title: "Finanace_Dashboard",
      desc: "Developed a Finance Dashboard to track income and expenses using JSON-based data and interactive charts for better financial visualization",
      tech: "React.js, Tailwind",
      github: "https://github.com/preranabendale/Finanace_Dashboard/tree/main/Finanace_Dashboard_Ass",
      live: "#",
      image: "/Finanace_Dashboard.png"
    },
    {
      title: "InstaVerse – Social Media Web Application",
      desc: `Built a full-stack Instagram clone using Node.js, Express, MongoDB, and EJS with authentication and OTP verification.
Implemented features like posts, reels, stories, and file uploads.`,
      tech: "Node.js, Express, MongoDB, EJS",
      github: "https://github.com/preranabendale/Instagram_clone",
      live: "#",
      image: "/insta.png"
    },
    {
      title: "MERN Auth System",
      desc: "JWT authentication with login/register functionality.",
      tech: "MongoDB, Express, React, Node",
      github: "",
      live: "#",
      image: "/mernauth.png"
    },
    {
      title: "Daily Code Learning – MERN Stack Practice",
      desc: "Maintained a GitHub repository for daily MERN stack coding practice to improve problem-solving and core development skills.",
      tech: "MongoDB, Express, React, Node",
      github: "https://github.com/preranabendale/daily-code-learning",
      live: "#",
      image: "/code.jpeg"
    }
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">

        {/* HEADING */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-slate-700 dark:text-slate-300">My </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400">
            Projects
          </span>
        </motion.h2>

       
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg
              border border-gray-200 dark:border-gray-700 shadow-lg relative overflow-hidden"
              
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}

              whileHover={{ scale: 1.05, rotate: 1 }}
            >

              
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-40 object-cover rounded-xl mb-4 
                hover:scale-105 transition-transform duration-300"
              />

              {/* Title */}
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                {project.desc}
              </p>

              {/* Tech */}
              <div className="text-xs text-cyan-500 mb-4">
                {project.tech}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">

                <a href={project.github} target="_blank" rel="noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 px-4 py-2 text-sm
                    border border-cyan-500 rounded-full text-cyan-500"
                  >
                    <FaGithub />
                    Code
                  </motion.button>
                </a>

                <a href={project.live} target="_blank" rel="noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 px-4 py-2 text-sm
                    bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </motion.button>
                </a>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Projects
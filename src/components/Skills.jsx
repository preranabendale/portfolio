import React from 'react'
import { FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiExpress, SiTypescript, SiHtml5 } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {

    const skills = [
        { name: 'React', Icon: FaReact, color: '#61DAFB ', level: 85 },
        { name: 'HTML', Icon: SiHtml5, color: '#E34F26', level: 95 },
        { name: 'Next.js', Icon: SiNextdotjs, color: '#08efb2', level: 80 },
        { name: 'JavaScript', Icon: FaJsSquare, color: '#F7DF1E', level: 90 },
        { name: 'TypeScript', Icon: SiTypescript, color: '#007ACC', level: 75 },
        { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4', level: 92 },
        { name: 'Node.js', Icon: FaNodeJs, color: '#68A063', level: 85 },
        { name: 'Express', Icon: SiExpress, color: '#d07d7d', level: 80 }
    ];

    return (
        <section id="skill" className="py-16">
            <div className="container mx-auto px-4">

                <motion.h2
                    className="text-3xl md:text-5xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-slate-700 dark:text-slate-300">My </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400">
                        Skills
                    </span>
                </motion.h2>

             
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {skills.map((skill, index) => {
                        const Icon = skill.Icon;

                        return (
                            <motion.div
                                key={index}
                                className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg
                                border border-gray-200 dark:border-gray-700 shadow-lg relative overflow-hidden"

                                whileHover={{
                                    scale: 1.05,
                                    rotate: 1
                                }}

                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >

                               
                                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-300
                                bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>

                                
                                <div className="relative z-10">

                                   
                                    <div className="flex items-center gap-3 mb-4">
                                        <div style={{ color: skill.color }}>
                                            <Icon size={30} />
                                        </div>
                                        <h3 className="text-slate-800 dark:text-white font-semibold text-lg">
                                            {skill.name}
                                        </h3>
                                    </div>

                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                                        Proficiency
                                    </p>

                                
                                    <div className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-2 rounded-full"
                                            style={{ backgroundColor: skill.color }}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1 }}
                                        />
                                    </div>

                                    <div className="text-right text-sm text-slate-600 dark:text-slate-400 mt-1">
                                        {skill.level}%
                                    </div>

                                </div>

                            </motion.div>
                        )
                    })}

                </div>

            </div>
        </section>
    )
}

export default Skills;

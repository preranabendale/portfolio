import React from 'react'
import { useEffect, useState } from 'react'
import { FaJsSquare, FaNodeJs, FaPython, FaReact, FaVuejs, FaFileAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";
import hero from '../assets/hero.png';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const titles = [
        "MERN Stack Developer",
        'Full Stack Developer',
        "UI/UX Enthusiast",
        "React Specialist"
    ];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % titles.length;
            const fullText = titles[i];

            setText(
                isDeleting
                    ? fullText.substring(0, text.length - 1)
                    : fullText.substring(0, text.length + 1)
            );



            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };
        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);

    }, [text, isDeleting, loopNum, typingSpeed, titles]);
    const icons = [
        { Icon: FaReact, color: "#61DAFB", delay: 0, size: 60 },
        { Icon: FaNodeJs, color: "#68A063", delay: 1, size: 60 },
        { Icon: SiNextdotjs, color: "#000000", delay: 2, size: 58 },
        { Icon: FaJsSquare, color: "#F7DF1E", delay: 3, size: 58 },
        { Icon: SiTailwindcss, color: "#06B6DA", delay: 4, size: 58 },
        { Icon: FaPython, color: "#3776AB", delay: 5, size: 60 },
        { Icon: FaVuejs, color: "#4FC08D", delay: 6, size: 58 },
        { Icon: SiTypescript, color: "#007ACC", delay: 7, size: 56 },
    ];
    const getPosition = (index, total) => {
        const radius = 220;
        const angle = (index / total) * 2 * Math.PI;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        return { x, y };
    };


    return (
        <section id="home" className="relative z-20 flex min-h-screen items-center justify-center overflow-hidden">

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-4">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="flex-1 text-center lg:text-left lg:-mt-20 mt-10"
                    >

                        <motion.h1
                            className='text-2xl sm:text-2xl md:text-5xl font-bold mb-4'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-slate-700 dark:text-slate-300">Hi, I'm </span>


                            <motion.span
                                className="relative inline-block
                                text-transparent bg-clip-text bg-gradient-to-r from-cyan-500
                                to-blue-400 min-w-[75px]
                                [text-shadow:0_0_20px_rgba(6,182,212,0.3)]"
                                animate={{
                                    textShadow: [
                                        "0 0 20px rgba(6,182,212,0.3)",
                                        "0 0 40px rgba(6,182,212,0.6)",
                                        "0 0 20px rgba(6,182,212,0.3)",
                                    ]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                {text}
                            </motion.span>

                        </motion.h1>

                        <motion.p
                            className="text-lg sm:text-xl text-slate-600
                            dark:text-slate-400 mb-8 max-w-2xl mx-auto
                            lg:mx-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            MERN Stack Developer skilled in React.js, Node.js, Express.js, and MongoDB.
                            Passionate about building responsive, user-friendly web applications with secure authentication
                            and RESTful APIs. Seeking an entry-level opportunity to contribute to real-world projects
                            and grow as a full-stack developer.
                        </motion.p>

                        <motion.div
                            className='flex flex-wrap gap-4 justify-center lg:justify-start'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}>

                          <a href="/resume.pdf" target="_blank" rel="noreferrer">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className='px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full
    font-semibold text-lg shadow-lg hover:shadow-cyan-500/30
    transition-all duration-300 flex items-center gap-2'
                                >

                                    <FaFileAlt />
                                    Resume
                                </motion.button>
                            </a>
                       <a href="#contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='px-8 py-3 border-2 border-cyan-500
                            text-cyan-600 dark:text-cyan-400 rounded-full
                            font-semibold text-lg hover:bg-cyan-50
                            dark:hover:bg-cyan-500/10 transition-all duration-300
                            [text-shadow:0_0_8px_rgb(34_211_238)]'>
                                Contact Me
                            </motion.button>
                            </a>

                        </motion.div>

                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className='flex-1 relative flex items-center justify-center
                    lg:-mt-38'>
                        <div className='relative md:w-137.5 md:h-137.5
                       h-80 w-80 flex items-center justify-center'>

                            <motion.div
                                className="md:w-80 md:h-80 w-70 h-70
                      rounded-full overflow-hidden border-4
                      border-white dark:border-slate-800 shadow-2xl
                      z-10"
                                whileHover={{ scale: 1.05 }}
                                transition={{
                                    type: 'spring', stiffness: 300,
                                    damping: 20
                                }}>
                                <img src={hero} alt='hero image'
                                    className='w-full h-full object-cover' />
                            </motion.div>
                            <motion.div
                                className='absolute rounded-full border-4
                    border-cyan-500 md:h-84 w-75 h-75'
                                style={{
                                    boxShadow: '0 0 20px rgb(34 211 238)'
                                }}
                                transition={{ duration: 3, repeat: Infinity }} />
                            {icons.map(({ Icon, color, delay, size }, index) => {
                                const { x, y } = getPosition(index, icons.length);
                                return (
                                    <motion.div
                                        key={index}
                                        className='absolute hidden md:block'
                                        style={{
                                            left: '50%',
                                            top: '50%',
                                            marginLeft: -size / 2,
                                            marginTop: -size / 2,
                                            zIndex: 20,
                                        }}
                                        initial={{ x: 0, y: 0, scale: 0 }}
                                        animate={{
                                            x: x,
                                            y: y,
                                            scale: 1
                                        }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 150,
                                            damping: 20,
                                            delay: delay * 0.1,
                                            duration: 1.5
                                        }}
                                        whileHover={{
                                            scale: 1.4,
                                            transition: { duration: 0.2 }
                                        }}>
                                        <div
                                            className='relative group
                          filter-[drop-shadow(0_0_2px_rgb(34_211_238))]'>
                                            <motion.div
                                                animate={{
                                                    rotate: 360,
                                                }}
                                                transition={{
                                                    duration: 15,
                                                    repeat: Infinity,
                                                    ease: 'linear'
                                                }}
                                                style={{ color: color }}>
                                                <Icon size={size} />
                                            </motion.div>

                                        </div>

                                    </motion.div>
                                )
                            })}
                        </div>

                    </motion.div>
                </div>
                <div className='py-10 md:py-2'>

                </div>

            </div>

        </section>
    )
}

export default Hero;
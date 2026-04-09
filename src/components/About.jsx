import React from 'react'
import { motion } from 'framer-motion'
import about from '../assets/about.png'
import { FaEnvelope } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className='relative min-h-screen flex items-center py-20 overflow-hidden'>

      <div className='relative z-10 container mx-auto px-4 lg:px-8'>

        <div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20'>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='flex-1 relative flex items-center justify-center w-full'
          >

            <div className='relative w-64 md:w-96 aspect-[3/4] flex items-center justify-center'>

              <motion.div
                className='absolute w-[90%] h-[95%] rounded-full border-4 border-cyan-500'
                style={{
                  boxShadow: '0 0 30px rgba(6,182,212,0.3)',
                  transform: 'rotate(-10deg) scaleX(0.6)'
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />

              <motion.div
                className='absolute w-[98%] h-[103%] rounded-full border-2 border-cyan-500/30'
                style={{
                  boxShadow: '0 0 50px rgba(6,182,212,0.2)',
                  transform: 'rotate(-10deg) scaleX(0.6)'
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />

              <motion.div
                className='absolute w-[94%] h-[99%] rounded-full'
                style={{
                  border: '2px dashed rgba(6,182,212,0.4)',
                  transform: 'rotate(-10deg) scaleX(0.6)'
                }}
                animate={{ rotate: [-10, 350] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />

              <motion.div
                className='relative w-[85%] h-[90%] rounded-full overflow-hidden border-4 border-white bg-cyan-400/30 dark:border-slate-600 shadow-2xl z-10'
                style={{
                  transform: 'rotate(-5deg)',
                  boxShadow: '0 0 30px rgba(6,182,212,0.2)'
                }}
                whileHover={{
                  scale: 1.02,
                  rotate: -3,
                  transition: { duration: 0.3 }
                }}
              >
                <img src={about} alt="About Image" className='w-full h-full object-cover' />
              </motion.div>

              <motion.div
                className='absolute -bottom-6 md:-bottom-10 -right-6 md:-right-10 w-12 md:w-20 h-12 md:h-20 bg-cyan-500/20 rounded-full blur-xl'
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />

            </div>
          </motion.div>

          {/* TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='flex-1 text-center lg:text-left'
          >

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className='text-3xl md:text-5xl font-bold mb-6'>
                <span className='text-slate-700 dark:text-slate-300'>About </span>

                <span className='relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400 [text-shadow:0_0_20px_rgba(6,182,212,0.3)]'>
                  Me

                  <motion.span
                    className='absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full'
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  />
                </span>
              </h2>
            </motion.div>

            <motion.p
              className='text-base md:text-lg text-slate-600 dark:text-slate-400 mb-6 max-w-2xl lg:mx-0'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              I am a passionate MERN Stack Developer with a Master of Computer Applications (MCA)
              degree, having strong skills in React.js, Node.js, Express.js, and MongoDB. I enjoy building modern, responsive,
              and user-friendly web applications that solve real-world problems.
            </motion.p>

            <motion.p
              className='text-base md:text-lg text-slate-600 dark:text-slate-400 mb-6 max-w-2xl lg:mx-0'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              I have worked on multiple projects including Stock Management System,  InstaVerse – Social Media Web Application, and
             . I am always eager to learn new technologies and improve my problem-solving skills to 
               grow as a professional developer.
            </motion.p>

            {/* STATS */}
            <motion.div
              className='flex flex-wrap gap-6 md:gap-8 justify-center lg:justify-start mb-8'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >

              <div className='text-center'>
                <motion.div
                  className='text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400'
                  whileHover={{ scale: 1.1 }}>
                  5+
                </motion.div>
                <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
                  Projects Completed
                </div>
              </div>

              <div className='text-center'>
                <motion.div
                  className='text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400'
                  whileHover={{ scale: 1.1 }}>
                  MCA
                </motion.div>
                <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
                  Master of Computer Applications
                </div>
              </div>

            </motion.div>

            {/* BUTTON */}
            <a href="#contact">
            <div className="mt-8 flex justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 
                text-transparent bg-clip-text 
                bg-gradient-to-r from-cyan-500 to-blue-400
                border-2 border-cyan-500 
                rounded-full font-semibold text-lg
                shadow-lg hover:shadow-cyan-500/30
                transition-all duration-300">
                <FaEnvelope className='text-cyan-600
                    dark:text-cyan-400 text-sm md:text-base/'></FaEnvelope>
                Hire Me
              </motion.button>
            </div>
                </a>

          

          </motion.div>
          

        </div>

      </div>
      

    </section>
  )
}

export default About
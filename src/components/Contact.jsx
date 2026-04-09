import React, { useState } from 'react'
import contact from '../assets/contact.png'
import { MdOpacity } from 'react-icons/md';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [fromData, setFromData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFromData(prevState=>({
            ...prevState,
            [name]:value
        }))
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.send(
        "service_prkyfh4",   
        "template_fuuoz3b",  
        fromData,
        "9JyFeZV-_Us-JpHgP"     
    )
    .then(() => {
        alert("Message sent successfully ");

        setFromData({
            name: "",
            email: "",
            message: ""
        });
    })
    .catch((error) => {
        alert("Failed ");
        console.log(error);
    });
};
    

    return (
        <section id="contact" className='relative min-h-screen flex items-center
        py-20 overflow-hidden'>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col lg:flex-row items-center
                justify-between gap-12 lg:gap-20">

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
                                <img src={contact} alt="Contact Image" className='w-full h-full object-cover' />
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
                                <span className='text-slate-700 dark:text-slate-300'>Contact </span>

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
                                     I am actively seeking entry-level opportunities as a MERN Stack Developer.
                                      If you have any openings or projects, feel free to contact me.
                                      I would love to contribute and grow in a professional environment.
                                    </motion.p>
                                    <motion.div
                                    initial={{opacity:0, y:20}}
                                    whileInView={{opacity:1, y:0}}
                                    viewport={{once:true}}
                                    transition={{delay:0.3, duration:0.6}}
                                    className='w-full'>
                                       <form onSubmit={handleSubmit} className='space-y-4 md:space-y-6'>
                                            <div>
                                                <input type='text' name="name"
                                                value={fromData.name}
                                                onChange={handleChange}
                                                 required
                                                placeholder='Your Name'
                                                className='w-full px-4 md:px-6 py-3 md:py-4 bg-white/50
                                                dark:bg-slate-800/50 backdrop-blur-sm
                                                border border-slate-300 dark:border-slate-70
                                                rounded-full text-sm md:text-base
                                                text-slate-800 dark:text-white
                                                placeholder:text-slate-500
                                                dark:placeholder:text-slate-400
                                                focus:outline-none focus:ring-2
                                                focus:ring-cyan-500 focus:border-transparent
                                                transition-all'/>
                                                
                                            </div>
                                            {/*Email */}
                                            <div>
                                                <input type='email' name="email"
                                                value={fromData.email} 
                                                onChange={handleChange}
                                                required
                                                placeholder='Email Address'
                                                className='w-full px-4 md:px-6 py-3 md:py-4 bg-white/50
                                                dark:bg-slate-800/50 backdrop-blur-sm
                                                border border-slate-300 dark:border-slate-70
                                                rounded-full text-sm md:text-base
                                                text-slate-800 dark:text-white
                                                placeholder:text-slate-500
                                                dark:placeholder:text-slate-400
                                                focus:outline-none focus:ring-2
                                                focus:ring-cyan-500 focus:border-transparent
                                                transition-all'/>
                                                
                                            </div>
                                            {/*Message*/}
                                            <div>
                                                <textarea name="message"
                                                value={fromData.message} 
                                                onChange={handleChange}
                                                required
                                                rows={window.innerWidth < 768 ? 4:5}
                                                placeholder='Your Message'
                                                className='w-full px-4 md:px-6 py-3 md:py-4 bg-white/50
                                                dark:bg-slate-800/50 backdrop-blur-sm
                                                border border-slate-300 dark:border-slate-70
                                                rounded-xl md:rounded-2xl text-sm md:text-base
                                                text-slate-800 dark:text-white
                                                placeholder:text-slate-500
                                                dark:placeholder:text-slate-400
                                                focus:outline-none focus:ring-2
                                                focus:ring-cyan-500 focus:border-transparent
                                                transition-all resize-none'/>
                                            </div>
                                            <motion.button
                                            type='submit'
                                            whileHover={{scale:1.05}}
                                            whileTap={{scale:0.95}}
                                            className='w-full px-6 md:px-8 py-3 md:py-4
                                            bg-linear-to-r from-cyan-500 to-blue-500
                                            text-white rounded-full font-semibold
                                            text-base md:text-lg shaow-lg
                                            hover:shadow-cyan-500/30 transiton-all
                                            duration-300 flex items-center justify-center
                                            gap-2 group'>
                                                <span> Send Message </span>
                                                <FaPaperPlane className="text-sm md:text-base
                                                group-hover:translate-x-1 transition-transfrom
                                                group-hover:-translate-y-1"/>

                                            </motion.button>

                                        </form>

                                    </motion.div>




                    </motion.div>

                </div>

            </div>

        </section>
    )
}

export default Contact;
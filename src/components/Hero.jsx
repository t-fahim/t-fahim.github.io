/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const Hero = () => {
    const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        const offset = 60; // Adjust this to match your navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};
  return (
    <motion.div 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 0.6, ease: 'easeOut'}}
        viewport={{once: true}}
        id='home'
        className='min-h-screen flex items-center pt-28 pb-16 bg-linear-to-r from-dark-100 via-dark-300 to-dark-100 text-white'>
            <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
                {/* left side content */}
                <div className='w-full xl:w-1/2 mb-10 md:mb-0'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-6'>
                        HI, I'm <span className='text-purple'>MD. TAMIM AHMED FAHIM</span>
                    </h1>

                    <h2 className='text-2xl md:text-4xl font-semibold md:whitespace-nowrap'>
                        Bioinformatician | Backend Developer
                    </h2>
                    <h2 className='text-2xl md:text-4xl font-semibold typewriter mb-6'>
                        AI & ML | FOSS Enthusiast_
                    </h2>

                    <p className='text-gray-300 text-lg md:text-xl mb-8'>
                        Bridging the gap between biology and code. 
                        I build robust systems to process complex datasets and solve real-world problems.
                    </p>

                    <div className='mt-10 flex gap-4'>
                        <button onClick={() => scrollToSection('projects')} className='bg-purple px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition duration-300'>
                            View Projects
                        </button>
                        <button onClick={() => scrollToSection('contact')} className='border border-purple px-8 py-3 rounded-full font-bold hover:bg-purple/20 transition duration-300'>
                            Contact Me
                        </button>
                    </div>
                </div>

                {/* right side image */}
                <div className='hidden xl:w-1/2 xl:flex justify-center'>
                    <div className='relative w-140 h-120'>
                        <div className='absolute inset-0 rounded-2xl bg-linear-to-r from-purple to-pink opacity-70'>
                            <motion.img 
                            animate = {{y:[0,-20, 0]}}
                            transition={{
                                repeat:Infinity,
                                duration:4,
                                repeatType:'loop',
                                ease:'easeInOut'
                            }}
                            className='relative rounded-2xl w-140 h-120 object-cover z-10 animate-float'
                            src={assets.profileImg} alt='profile image' />
                        </div>
                    </div>
                </div>
            </div>
    </motion.div>
  )
}

export default Hero
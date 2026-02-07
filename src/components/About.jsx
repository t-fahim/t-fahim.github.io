import React from 'react'
import { inertia, motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'


const About = () => {
  return (
    <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 0.6, ease: 'easeOut'}}
        viewport={{once: true}}
        id='about'
        className='py-20 bg-dark-200'>
          {/* heading */}
          <h2 className='text-3xl font-bold text-center mb-4'>About
            <span className='text-purple'> Me</span>
          </h2>

          {/* education and my journey */}
          <div className='container mx-auto px-6 flex flex-col md:flex-row items-center gap-12'>
            {/* Education */}
            <motion.div 
              initial={{opacity:0, y:50}}
              whileInView={{opacity:1, y:0}}
              transition={{duration: 0.9, ease: 'easeOut'}}
              viewport={{once: false, amount:0.2}}
              className='md:w-1/2'>
                <div className='rounded-2xl p-8'>
                  <h3 className='text-2xl font-semibold mb-6'>Education</h3>
                  
                </div>
            </motion.div>
            {/* text content  */}
            <motion.div 
              initial={{opacity:0, y:50}}
              whileInView={{opacity:1, y:0}}
              transition={{duration: 0.9, ease: 'easeOut'}}
              viewport={{once: false, amount:0.2}}
              className='md:w-1/2'>
                <div className='rounded-2xl p-8'>
                  <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                  <p className='text-gray-300 mb-6 text-justify'>
                    I am an undergraduate Bioinformatics Engineering student with a deep interest in coding. My journey into technology began when I received my first laptop during COVID-19 period, which sparked my curiosity and love for programming & Linux OS. This passion led me to choose Bioinformatics Engineering, a challenging and innovative field that bridges technology and biology.
                  </p>
                  <p className='text-gray-300 mb-6 text-justify'>
                    When I'm not coding, you can find me exploring new technologies & bioinformatics tools, reading FOSS article, contributing to open-source projects, or sharing my knowledge & experience through blogs and tutorials. I believe in continuous learning and pushing the boundaries of what's possible.
                  </p>
                  
                  {/* cards  */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {
                      aboutInfo.map((data, index) => (
                        <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                          <div className='text-purple text-4xl mb-4'><data.icon /></div>
                          <h3 className='text-xl font-semibold mb-3' >{data.title}</h3>
                          <p className='text-gray-300'>{data.description}</p>
                        </div>
                      ))
                    }
                  </div>

                </div>
            </motion.div>
          </div>
            
    </motion.div>
  )
}

export default About
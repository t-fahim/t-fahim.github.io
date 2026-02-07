import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { aboutInfo } from '../assets/assets'
import { education } from '../assets/assets'


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
          <p className='text-gray-400 text-center max-w-2xl mx-auto mb-12'>
            A little more about me.
          </p>

          {/* education and my journey */}
          <div className='container mx-auto px-6 flex flex-col md:flex-row items-start gap-12'>
            {/* Education */}
            <motion.div 
              initial={{opacity:0, y:50}}
              whileInView={{opacity:1, y:0}}
              transition={{duration: 0.9, ease: 'easeOut'}}
              viewport={{once: false, amount:0.1}}
              className='md:w-1/2'>
                <div className='rounded-2xl px-4 pt-0'>
                  <h3 className='text-2xl font-semibold mb-6 lg:text-right'>Education</h3>
                  <div className='mx-auto'>
                        <div className='space-y-12'>
                            {education.map((data, index) => (
                                <div key={index} className="relative pl-12 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                    {/* Vertical line - matches content box height */}
                                    <div className="absolute left-2.5 top-6 bottom-0 w-0.5 bg-purple/50" />
    
                                    {/* Timeline dot */}
                                    <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-purple" />
    
                                    {/* Content box */}
                                    <div className="bg-dark-300 rounded-2xl p-6">
                                        <div className="flex flex-col 2xl:flex-row 2xl:justify-between 2xl:items-start mb-2 gap-3 2xl:gap-4">
                                          <h3 className="text-xl font-semibold">{data.institution}</h3>
                                          <p className="2xl:px-3 2xl:py-1 2xl:bg-purple/20 2xl:rounded-full text-sm text-gray-400 lg:text-white">
                                            {data.duration}
                                          </p>
                                        </div>
                                        <p className="text-gray-300">{data.degree}</p>
                                        <p className="text-gray-300 leading-relaxed pb-2">{data.address}</p>
                                        <p className="text-gray-400">{data.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                  </div>
                </div>
            </motion.div>
            {/* text content  */}
            <motion.div 
              initial={{opacity:0, y:50}}
              whileInView={{opacity:1, y:0}}
              transition={{duration: 0.9, ease: 'easeOut'}}
              viewport={{once: false, amount:0.1}}
              className='md:w-1/2'>
                <div className='rounded-2xl px-4 pt-0'>
                  <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                  <p className='text-gray-300 mb-6'>
                    I am an undergraduate Bioinformatics Engineering student with a deep interest in coding. My journey into technology began when I received my first laptop during COVID-19 period, which sparked my curiosity and love for programming & Linux OS. This passion led me to choose Bioinformatics Engineering, a challenging and innovative field that bridges technology and biology.
                  </p>
                  <p className='text-gray-300 mb-6'>
                    When I'm not coding, you can find me exploring new technologies & bioinformatics tools, reading FOSS article, contributing to open-source projects, or sharing my knowledge & experience through blogs and tutorials. I believe in continuous learning and pushing the boundaries of what's possible.
                  </p>
                  
                  {/* cards  */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {
                      aboutInfo.map((data, index) => (
                        <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                          <div className='text-purple text-4xl mb-4'><data.icon /></div>
                          <h3 className='text-xl font-semibold mb-3' >{data.title}</h3>
                          <p className='text-gray-300 whitespace-pre-line'>{data.description}</p>
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
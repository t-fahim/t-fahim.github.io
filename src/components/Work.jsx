import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { workData } from '../assets/assets'

const Work = () => {
  return (
    <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 0.6, ease: 'easeOut'}}
        viewport={{once: true}}
        id='experience'
        className='py-20 bg-dark-100'>
            <h2 className='text-3xl font-bold text-center mb-4'>Work
                <span className='text-purple'> Exprience</span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-12'>
                My professional journey so far.
            </p>
            <motion.div 
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration: 0.9, ease: 'easeOut'}}
                viewport={{once: false, amount:0.1}}
                className='container mx-auto px-6'>
                    <div className='max-w-4xl mx-auto'>
                        <div className='space-y-12'>
                            {workData.map((data, index) => (
                                <div key={index} className="relative pl-12 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                    {/* Vertical line - matches content box height */}
                                    <div className="absolute left-2.5 top-6 bottom-0 w-0.5 bg-purple/50" />
    
                                    {/* Timeline dot */}
                                    <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-purple" />
    
                                    {/* Content box */}
                                    <div className="bg-dark-300 rounded-2xl p-6">
                                        <div className="flex justify-between items-start mb-2 gap-4">
                                            <h3 className="text-xl font-semibold">{data.role}</h3>
                                            <span className="px-3 py-1 bg-purple/20 rounded-full text-xs md:text-sm">
                                                {data.duration}
                                            </span>
                                        </div>
                                        <p className="text-gray-400 mb-2">{data.company}</p>
                                        <p className="text-gray-300 leading-relaxed whitespace-pre-line">{data.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
            </motion.div>
        
    </motion.div>
  )
}

export default Work
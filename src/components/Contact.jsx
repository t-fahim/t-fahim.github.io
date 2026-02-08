import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { contactInfo, socialLinks } from '../assets/assets'



const Contact = () => {
  return (
    <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 0.6, ease: 'easeOut'}}
        viewport={{once: true}}
        id='contact'
        className='py-20 bg-dark-200'>
            <h2 className='text-3xl font-bold text-center mb-4'>Get In
                <span className='text-purple'> Touch</span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-12'>
                Reach out to discuss code or just to say hello.
            </p>
          <div className='max-w-6xl mx-auto px-6'>
            {/* Contact Information Cards */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
              {contactInfo.map((info, index) => (
                <div key={index} className='bg-dark-300 rounded-2xl p-6 text-center hover:bg-dark-400 transition duration-300 transform'>
                  {/* Icon */}
                  <div className='bg-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <info.icon className='w-8 h-8 text-purple' />
                  </div>

                  {/* Title */}
                  <h3 className='text-xl font-semibold mb-2'>{info.title}</h3>

                  {/* Description */}
                  <p className='text-gray-500 text-sm mb-3'>{info.description}</p>

                  {/* Value/Link */}
                  {info.link ? (
                    <a href={info.link} className='text-gray-300 hover:text-purple transition duration-300 break-all'
                    // Security: Prevent tab-napping for external links
                      {...(info.link.startsWith('http') && {
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      })}>
                      {info.value}</a> ) : ( <p className='text-gray-300'>{info.value}</p> )}
                </div>
              ))}
            </div>

            {/* Social Media Section */}
            <div className='bg-dark-300 rounded-2xl p-8 text-center'>
              <h3 className='text-2xl font-semibold mb-4'>Follow Me On</h3>
              <p className='text-gray-400 mb-6'>
                Stay connected and follow my journey on social media
              </p>

              {/* Social Links */}
              <div className='flex justify-center space-x-6'>
                {socialLinks.map((social, index) => (
                  <a
                  key={index}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer' // Security: Prevent tab-napping
                  className={`bg-dark-400 p-4 rounded-lg ${social.color} transition duration-300 transform hover:scale-110 group`}
                  aria-label={`Visit my ${social.name} profile`}>
                    <social.icon className='w-8 h-8 group-hover:text-white transition duration-300' />
                  </a>
                ))}
              </div>

              {/* Additional CTA */}
              <div className='mt-8 pt-8 border-t border-dark-400'>
                <p className='text-gray-400 mb-4'>
                  Open to freelance projects and full-time opportunities
                </p>
                <a
                href='mailto:t.a.fahim@outlook.com' // Replace with your email
                className='inline-block bg-purple hover:bg-purple/80 text-white font-medium py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105'>
                Let's Work Together
                </a>
              </div>
            </div>
          </div>
    </motion.div>
  )
}

export default Contact
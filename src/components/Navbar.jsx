
import React, { useState } from 'react'
import { FaXmark, FaBars } from 'react-icons/fa6'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blue-sm py-4 px-8 shadow-lg'>
        <div className='container mx-auto flex justify-between items-center'>
            <div>
                <a href="#" className='text-3xl font-bold text-white'>
                    FAH<span className='text-purple'>I</span>M
                    <div className='w-4 h-4 bg-purple rounded-full'></div>
                </a>
            </div>
            <div className='hidden md:flex space-x-10'>
                {/* home  */}
                <a href="#home" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>Home</span>
                    <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>

                {/* about  */}
                <a href="#about" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>About</span>
                    <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>

                {/* skill  */}
                <a href="#skill" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>Skill</span>
                    <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>

                {/* projects */}
                <a href="#projects" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>Projects</span>
                    <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>

                {/* experience */}
                <a href="#exprience" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>Exprience</span>
                    <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>

                {/* contact  */}
                <a href="#contact" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>Contact</span>
                    <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>
            </div>

            {/* moble nabbar view*/}
            <div className='md:hidden'>
                {
                    showMenu ? 
                    <FaXmark onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer' /> :
                    <FaBars onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer' />
                }
            </div>
        </div>

        {/* mobile menu */}
        {
            showMenu && (
                <div className='md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center'>
                    {/* home  */}
                    <a onClick={() => setShowMenu(!showMenu)} href="#home" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>Home</span>
                    </a>

                    {/* about  */}
                    <a onClick={() => setShowMenu(!showMenu)} href="#about" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>About</span>
                    </a>

                    {/* skill  */}
                    <a onClick={() => setShowMenu(!showMenu)} href="#skill" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>Skill</span>
                    </a>

                    {/* projects */}
                    <a onClick={() => setShowMenu(!showMenu)} href="#projects" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>Projects</span>
                    </a>

                    {/* experience */}
                    <a onClick={() => setShowMenu(!showMenu)} href="#exprience" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>Exprience</span>
                    </a>

                    {/* contact  */}
                    <a onClick={() => setShowMenu(!showMenu)} href="#contact" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>Contact</span>
                    </a>
                </div>
            )
        }
    </nav>
  )
}

export default Navbar
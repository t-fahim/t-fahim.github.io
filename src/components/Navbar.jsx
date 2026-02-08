
import React, { useState } from 'react'
import { FaXmark, FaBars } from 'react-icons/fa6'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
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
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blue-sm py-2 px-8 shadow-md'>
        <div className='container mx-auto flex justify-between items-center'>
            <div>
                <a href="#" className='text-3xl font-bold text-white'>
                    FAH<span className='text-purple'>I</span>M
                    <div className='w-4 h-4 bg-purple rounded-full'></div>
                </a>
            </div>
            <div className='hidden md:flex space-x-10'>
                {/* home  */}
                <button onClick={() => scrollToSection('home')} className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>Home</span>
                    <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </button>

                {/* about  */}
                <button onClick={() => scrollToSection('about')} className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>About</span>
                    <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </button>

                {/* skill  */}
                <button onClick={() => scrollToSection('skill')} className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>Skill</span>
                    <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </button>

                {/* projects */}
                <button onClick={() => scrollToSection('projects')} className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>Projects</span>
                    <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </button>

                {/* experience */}
                <button onClick={() => scrollToSection('experience')} className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>Exprience</span>
                    <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </button>

                {/* contact  */}
                <button onClick={() => scrollToSection('contact')} className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>Contact</span>
                    <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </button>
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
                    <button onClick={() => {
                        scrollToSection('home');
                        setShowMenu(false); // Closes menu after clicking
                    }} 
                    className='text-white/80 hover:text-purple text-xl py-2'>Home</button>

                    {/* about  */}
                    <button onClick={() => {
                        scrollToSection('about');
                        setShowMenu(false); // Closes menu after clicking
                    }} 
                    className='text-white/80 hover:text-purple text-xl py-2'>About</button>

                    {/* skill  */}
                    <button onClick={() => {
                        scrollToSection('skill');
                        setShowMenu(false); // Closes menu after clicking
                    }} 
                    className='text-white/80 hover:text-purple text-xl py-2'>Skill</button>

                    {/* projects */}
                    <button onClick={() => {
                        scrollToSection('projects');
                        setShowMenu(false); // Closes menu after clicking
                    }} 
                    className='text-white/80 hover:text-purple text-xl py-2'>Projects</button>

                    {/* experience */}
                    <button onClick={() => {
                        scrollToSection('experience');
                        setShowMenu(false); // Closes menu after clicking
                    }} 
                    className='text-white/80 hover:text-purple text-xl py-2'>Experience</button>

                    {/* contact  */}
                    <button onClick={() => {
                        scrollToSection('contact');
                        setShowMenu(false); // Closes menu after clicking
                    }} 
                    className='text-white/80 hover:text-purple text-xl py-2'>Contact</button>
                </div>
            )
        }
    </nav>
  )
}

export default Navbar
import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-dark-100 border-t border-dark-400'>
      <div className='container mx-auto px-6'>
        {/* Simple Footer */}
        <div className='py-2 text-center'>
          <p className='text-sm'>
            Designed & Developed by Fahim | &copy; {currentYear} Fahim. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
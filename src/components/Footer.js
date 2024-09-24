import { faDiscord, faInstagram, faTwitch, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='text-white p-8 mt-6' style={{ backgroundColor: '#699C47' }}>

      <div className='flex flex-col gap-8 md:flex-row'>
        <div className='flex-1 py-4'>
          <h3 className='text-3xl font-medium'>Vex</h3>
          <p className='md:w-4/5 text-sm font-medium mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi obcaecati assumenda eos at laudantium magni quod aspernatur illum recusandae, fuga quidem alias, ullam harum nesciunt maxime ex explicabo saepe. Quasi!</p>
        </div>

        <div className='flex flex-col gap-2 flex-1 py-4 border-y md:border-none'>

          <h3 className='text-2xl font-medium mb-4'>Quick Links</h3>
          <Link className='text-md font-medium' to='/'>Home</Link>
          <Link className='text-md font-medium' to='/shop'>Shop</Link>
          <Link className='text-md font-medium' to='/about'>About Us</Link>
          <Link className='text-md font-medium' to='/contact'>Contact Us</Link>

        </div>

        <div className='flex flex-col gap-2 flex-1 py-4'>

          <h3 className='text-2xl font-medium mb-4'>Follow Us</h3>
          <div className='flex gap-6 text-xl'>
            <Link className='text-md font-medium' to='/' >
              <FontAwesomeIcon icon={faDiscord} />
            </Link>
            <Link className='text-md font-medium' to='/'>
              <FontAwesomeIcon icon={faTwitch} />
            </Link>
            <Link className='text-md font-medium' to='/'>
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link className='text-md font-medium' to='/'>
              <FontAwesomeIcon icon={faXTwitter} />
            </Link>
          </div>
        </div>

      </div>

      {/* Copyright */}

      <hr className='w-full my-8' />
      <p className='text-sm text-center'>
        <FontAwesomeIcon className='mr-1' icon={faCopyright} />
        2024 Vex, Inc. All Rights Reserved
        </p>

    </div>
  )
}

export default Footer

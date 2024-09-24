import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {



  return (
    <div className='flex flex-col px-4'>


      <div className='w-full flex flex-col md:flex-row justify-between items-center gap-10 mt-32'>

        {/* Form */}

        <form className='w-full md:w-2/4'>
          <h1 className='text-4xl font-bold '>Get in Touch</h1>
          <div className='flex flex-col items-center rounded mt-10'>
            <input className='w-full border outline-none px-4 py-3 rounded-md' type='text' placeholder='Name' required />
            <input className='w-full border outline-none px-4 py-3 rounded-md mt-4' type='number' placeholder='Phone' required />
            <input className='w-full border outline-none px-4 py-3 rounded-md mt-4' type='email' placeholder='Email' required />
            <textarea className='w-full h-44 border outline-none px-4 py-3 rounded-md mt-4' placeholder='Message' />
          </div>
          <button className='font-medium rounded bg-green-500 hover:bg-green-600 text-white px-5 py-3 mt-6'>Submit Now</button>
        </form>

        {/* Information */}

        <div className='w-full md:w-1/3 border rounded-md p-6'>
          <h3 className='text-2xl font-bold'>Contact Us</h3>

          <div className='flex flex-col mt-4'>

            <div className='flex flex-row gap-6 mt-10'>
              <FontAwesomeIcon className='mt-1 text-xl' icon={faPhone} />
              <div className='flex flex-col'>
                <h3 className='text-xl font-bold'>Phone</h3>
                <h6 className='mt-2 text-gray-500'>Mobile : <span className='font-bold' >(+91) 872-670-780</span></h6>
                <h6 className='text-gray-500'>Mobile : <span className='font-bold' >(+91) 422-655 -793</span></h6>
              </div>
            </div>

            <div className='flex flex-row gap-6 mt-10'>
              <FontAwesomeIcon className='mt-1 text-xl' icon={faEnvelope} />
              <div className='flex flex-col'>
                <h3 className='text-xl font-bold'>Email</h3>
                <h6 className='mt-2 text-gray-500'>Info@example.com</h6>
                <h6 className='text-gray-500'>Contact@example.com</h6>
              </div>
            </div>

            <div className='flex flex-row gap-6 mt-10'>
              <FontAwesomeIcon className='mt-1 text-xl' icon={faLocationDot} />
              <div className='flex flex-col'>
                <h3 className='text-xl font-bold'>Location</h3>
                <h6 className='mt-2 text-gray-500'>Abbot Favicon Kinney, New York,</h6>
                <h6 className='text-gray-500'>USA - 25423</h6>
              </div>
            </div>
          </div>

        </div>

      </div>

{/* Google Map */}


<div className='w-full my-32'>
<iframe className='w-full h-96' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d113911.07560366849!2d80.860112!3d26.8488213!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1727107795869!5m2!1sen!2sin"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>


    </div>
  )
}

export default Contact

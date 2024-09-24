import React from 'react'
import Hero1 from '../assets/img/Home/Hero1.webp'

const Hero = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center text-white gap-20 lg:gap-10 mt-6 py-6' style={{backgroundColor: '#699C47'}}>
            <div className='lg:w-2/4 flex flex-col flex-1 px-4 lg:ml-20'>
                <h3 className='text-6xl font-bold'>Organic Fresh <br/>Food Shop</h3>
                <h3 className='text-xl mt-8'>Discover organic, sustainable food from our <br/>organic farm and
                fresh vegetable</h3>
            </div>

            <div className='flex-1'>
                <img className='h-96 mx-auto rounded-xl' src={Hero1} alt='...' />
            </div>
        </div>
    )
}

export default Hero

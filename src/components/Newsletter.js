import React from 'react'

const Newsletter = () => {

    const onSubmitHandle = (e) => {
        e.preventDefault()
    }

    return (
        <div className='text-center text-white md:rounded-md mt-6 py-20' style={{ backgroundColor: '#699C47' }}>

            <h1 className='text-4xl font-bold'>Get Exclusive Offers on Your Email</h1>
            <p className='text-xl font-medium mt-2'>Subscribe to our newsletter and stay updated</p>
            <form onSubmit={onSubmitHandle} className='w-full sm:w-1/2 flex items-center mx-auto border mt-4'>
                <input type="email" className="w-full sm:flex-1 text-black outline-none px-10 py-4" placeholder='Your Email id' required />
                <button type="submit" className="bg-black text-white px-10 py-4">Subscribe</button>
            </form>
        </div>
    )
}

export default Newsletter

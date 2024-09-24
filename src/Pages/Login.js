import React, { useState } from 'react'

const Login = () => {

    const [currentState, setCurrentState] = useState('Sign Up');

    const onSubmitHandle = async (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmitHandle} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto my-32 gap-4 text-gray-800'>
            <div className='inline-flex item-center gap-2 mb-2 mb-10'>
                <h1 className='text-2xl text-center font-medium'>--- {currentState} ---</h1>
            </div>

            {/* Remove Name if Login */}

            {currentState === 'Login' ? '' : <input type='text' className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />}
            <input type='email' className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
            <input type='password' className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />

            <div className='w-full flex justify-between text-sm mt-[-8px]'>
                {currentState === 'Sign Up' ? '' : <p className='cursor-pointer text-blue-500 font-medium'>Forgot your password ?</p>}
                {
                    currentState === "Login"
                        ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer text-blue-500 font-medium'>Create an account</p>
                        : <p>Already have an account ? <span onClick={() => setCurrentState('Login')} className='cursor-pointer text-blue-500 font-medium'>Login Here
                        </span></p>
                }
            </div>

            <button className='w-full bg-blue-500 text-white font-medium py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>

        </form>
    )
}

export default Login

import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillFacebook,AiFillGoogleCircle, AiFillLinkedin} from 'react-icons/ai'

import SignIn from './SignIn'

function SignUp() {
  return (
    <>
     <div className='bg-zinc-200 h-screen flex justify-center items-center ' >
        <div className='bg-white rounded-lg shadow-lg shadow-black/30 h-100 w-[500px] pl-10 flex flex-col justify-center' >
            <form className='space-y-1' action='' >
                <div>
                    <p className='font-semibold text-2xl tracking-wide flex justify-center'> Sign Up</p>
                </div>

                <div className='mr-5'>
                    <p className='text-zinc-600 font-semibold flex'> Email</p>
                    <input className='outline-none h-10 px-5 border border-sm w-full' type="email" placeholder='Email' required></input>
                </div>

                <div className='mr-5'>
                    <p className='text-zinc-600 font-semibold flex'> Password</p>
                    <input className='outline-none h-10 px-5 border border-sm w-full' type="password" placeholder='password' required></input>
                </div>
                <div className='mr-5'>
                    <p className='text-zinc-600 font-semibold flex'>Confirm Password</p>
                    <input className='outline-none h-10 px-5 border border-sm w-full' type="password" placeholder='password' required></input>
                </div>
                <div className='mr-5'>
                    <button className='bg-amber-500 h-10 rounded-full  hover:bg-amber-600 duration-300 w-full text-white font-semibold'>
                        Sign Up
                    </button>
                    
                </div>
                <p className='flex justify-center font-bold'>OR</p>
                <div className='flex flex-row justify-center gap-10 text-3xl'>
                    <AiFillFacebook className='rounded-full text-blue-600'/>
                    <AiFillGoogleCircle className='rounded-full text-red-600'/>
                    <AiFillLinkedin className='rounded-full text-blue-600'/>
                </div>
                
                <p className='text-zinc-500'>Already Account Exist ? <span className='text-black font-bold underline underline-offset-4'><Link to="/signin" element={<SignIn/>}>Sign In</Link></span></p>
            </form>
        </div>
    </div>
    </>
  )
}

export default SignUp
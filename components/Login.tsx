'use client'
import { signIn } from "next-auth/react"
import {FcGoogle} from 'react-icons/fc'
function Login() {
  return (
    <div className="flex flex-col text-center justify-center flex-1 items-center h-screen bg-[#023463] space-y-8">
        <h1 className="text-white font-bold text-5xl">Ghis-AI</h1>
        <img src="/chatGPT.png" className="w-24 h-24 rounded-full " alt="logo"/>
        <div onClick={()=>signIn('google')} className="flex space-x-2 cursor-pointer animate-pulse hover:bg-gray-500 items-center py-3 border px-4 rounded-md">
            <FcGoogle className="text-xl mb-1"/>
            <button className="text-white text-xl font-bold">Sign In With Google</button>
        </div>
       
    </div>
  )
}

export default Login
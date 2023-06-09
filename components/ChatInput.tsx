'use client'
import { useSession } from 'next-auth/react'
import {CiPaperplane} from 'react-icons/ci'
import React, { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { toast } from 'react-hot-toast'
type Props={
    chatId:string
}
function ChatInput({chatId}:Props) {
    const [prompt,setPrompt]=useState('')
    const {data:session}=useSession()
    //useSWR to get model
    const model="text-davinci-003" 
    const sendMessage=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        if(!prompt) return
        const input=prompt.trim()
        setPrompt("")
        const message:Message={
            text:input,
            createdAt:serverTimestamp(),
            user:{
                _id:session?.user?.email!,
                name:session?.user?.name!,
                avatar:session?.user?.image! || `https//ui-avatars.com/api/?name=${session?.user?.name}`
            }
        }
        await addDoc(collection(db,'users',session?.user?.email!,'chats',chatId,'messages'),message)
        
        //Toast notif to say Loading
        const notification=toast.loading("AI is thinking...")

        await fetch('/api/askQuestion',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                prompt:input,chatId,model,session
            })
        }).then(()=>{
            //Toast Notification to say successfull
            toast.success("AI has responded!",{
                id:notification 
            })
        })
    }
  return (
    <div className='bg-gray-700/50 text-gray-400 rounded-lg text-sm'>
        <form onSubmit={e=>sendMessage} className="p-5 space-x-5 flex ">
            <input className='focus:outline-none bg-transparent py-2  disabled:cursor-not-allowed flex-1 disabled:text-gray-300' onChange={(e)=>setPrompt(e.target.value)} value={prompt} type="text" placeholder='Type your message here ...' disabled={!session} />

            <button className='bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed' disabled={!prompt || !session} type="submit">
                <CiPaperplane className='h-4 w-4 -rotate-45'/>
            </button>
        </form>
        <div>
            {/* model Selection */}
        </div>
    </div>
  )
}

export default ChatInput
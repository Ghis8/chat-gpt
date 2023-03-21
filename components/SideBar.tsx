'use client'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import NewChat from './NewChat'
import {useCollection} from 'react-firebase-hooks/firestore'
import { collection, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'
import ChatRow from './ChatRow'


function SideBar() {
    const {data:session}=useSession()
    const [chats,loading,error]=useCollection(
        session && query(collection(db,'users',session?.user?.email!,'chats'),orderBy('createdAt','asc'))
    )
  return (
    <div className='p-2 flex flex-col h-screen'>
        <div className='flex-1'>
            <NewChat />
            <div>
                {
                    chats?.docs.map(chat=>(
                        <ChatRow key={chat.id} id={chat.id}/>
                    ))
                }
            </div>
        </div>
        {
            session && (
                <div className='flex items-center justify-between px-4'>
                    <div className='flex items-center space-x-2'>
                        <img src={session.user?.image!} className="w-10 h-10 rounded-full" alt="profile"/>
                        <span className='text-white text-sm'>{session.user?.name!}</span>
                    </div>
                    <button onClick={()=>signOut()} className='py-1 bg-gray-300 text-red-400 font-bold rounded-md hover:text-white hover:bg-red-500 cursor-pointer px-2'>Logout</button>
                    
                </div>
            )
        }
    </div>
  )
}

export default SideBar
import { collection, deleteDoc, doc, orderBy, query } from "firebase/firestore"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import path from "path"
import { useEffect, useState } from "react"
import { useCollection } from "react-firebase-hooks/firestore"
import {HiOutlineChatBubbleOvalLeft} from 'react-icons/hi2'
import {IoMdTrash} from 'react-icons/io'
import { db } from "../firebase"
type Props={
    id:string
}
function ChatRow({id}:Props) {
    const pathname=usePathname()
    const router=useRouter()
    const {data:session}=useSession()
    const [active,setActive]=useState(false)

    //messages

    const [messages]=useCollection(collection(db,'users',session?.user?.email!,'chat',id,'messages'))

    useEffect(()=>{
        if(!pathname) return
        setActive(pathname.includes(id))
    })
    const removeChat=async()=>{
        await deleteDoc(doc(db,'users',session?.user?.email!,'chats',id))
        router.replace('/')
    }
  return (
    <Link href={`/chat/${id}`} className={`chatRow justify-center ${active &&'bg-gray-700/50'}`}>
        <HiOutlineChatBubbleOvalLeft className="h-5 w-5" />
        <p className="flex-1 hidden md:inline-flex truncate">
            {messages?.docs[messages?.docs.length-1]?.data().text || "New Chat"}
        </p> 
        <IoMdTrash onClick={removeChat} className="text-gray-700 cursor-pointer hover:text-red-700"/>

    </Link>
  )
}

export default ChatRow
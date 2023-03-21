'use client'
 import {SessionProvider as Provider} from 'next-auth/react'
 import {Session} from 'next-auth'

 type Props={
    session:Session | null,
    children:React.ReactNode
 }
 export function SessionProvider({session,children}:Props){
    return(
        <Provider>
            {children}
        </Provider>
    )
 }
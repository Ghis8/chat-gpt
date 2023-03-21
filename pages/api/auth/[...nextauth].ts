import nextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

export const authOptions={
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID!,
            clientSecret:process.env.GOOGLE_SECRET!
        })
    ],
    secret:"IamAwesome",
}

export default nextAuth(authOptions)
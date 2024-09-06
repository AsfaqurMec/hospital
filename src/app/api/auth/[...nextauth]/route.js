import { connectDB } from "../../../../../lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import toast, { Toaster } from "react-hot-toast";


const handler = NextAuth({
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
   
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) {
          return null;
        }
        const db = await connectDB();
        const currentUser = await db.collection("users").findOne({ email });
        if (!currentUser) {
          return null;
        }
        
        if (currentUser.email === email && currentUser.password === password) {
         // toast.success('Login Successfully');
            return currentUser;
        }
       // return currentUser;
      },
    }),
   
  ],
  pages: {
    signIn: "/login",

  },
  callbacks: {
    async signIn({ user }) {
        // console.log(user);
        //toast.success('Login Successfully');
         return !!user;  // Return true to proceed with login
       },
       async jwt({ token, user }) {
       //  console.log(user);
         
         // If user exists, add it to the token
         if (user) {
           
           token.name = user.name;
           token.email = user.email;
           
         }
       //  console.log(token);
         
         return token;
       },
       async session({ session, token }) {
         // Add user data to the session from the token
         session.user = {
           
           name: token.name,
           email: token.email,
           
         };
       //  console.log(session);
         
         return session;
       },
  },
 
});

export { handler as GET, handler as POST };

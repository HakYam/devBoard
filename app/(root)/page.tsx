import React from 'react'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";


 const Home = () => {
  return (
    <div>
      
      home -
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default Home;
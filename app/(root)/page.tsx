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
      
      <h1 className='h1-bold'>This test</h1>
      <UserButton afterSignOutUrl='/'/>
      
    </div>
  )
}

export default Home;
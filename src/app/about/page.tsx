"use client"

import ModeToggle from '@/components/ModeToggle'
import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import React from 'react'

const page = () => {
    console.log("Hey from your about page.")
  return ( 
    <div className='m-4'>
       <h1>home page content</h1>
    </div>
  )
}

export default page

import Link from 'next/link'
import React from 'react'
import LogoutForm from './logoutForm'
import { getSession } from '@/action'

const navbar = async () => {
    const session = await getSession()

    console.log(session)

  return (
    <nav>
        <Link href="/">Home</Link>
        <Link href="/premium">Premium</Link>
        <Link href="/profile">Profile</Link>    
        <Link href="/login">Login</Link>
        {/* overe here if my session is logged in then logout button will be displayed */}
        {session.isLoggedIn && <LogoutForm />}
    </nav>
  )
}

export default navbar
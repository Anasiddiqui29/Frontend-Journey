import { getSession } from '@/action'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const premium = async () => {

  const session = await getSession()

  if(!session.isLoggedIn){
    redirect("/")
  }

  if(!session.isPro){
    return(
      <div>
        <h1>You are not a premiun user</h1>

        <Link href="/profile">
          Go to Profile to upgrade to the Premium user
        </Link>
      </div>
    )
  }

  return (
    <div>This is the premium page</div>
  )
}

export default premium
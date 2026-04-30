import { changePremium, changeUsername, getSession } from '@/action'
import { redirect } from 'next/navigation';
import React from 'react'

const profile = async () => {

  const session = await getSession();

  if(!session.isLoggedIn){
    redirect("/")
  }

  return (
    <div>
      <h1>This is the profile page</h1>
      <p>
        Welcome <b>{session.username}</b>
      </p>

      <span>
        You are a {session.isPro ? "Premium" : "Free"} user
      </span>

      <form action={changePremium}>
        <button>
          {session.isPro ? "Cancel" : "Buy"} Premium
        </button>
      </form>

      <form action={changeUsername}>
        <input type='text' name='username' required placeholder={session.username}></input>
        <br></br>
        <button>
          Update username
        </button>
      </form>

    </div>
  )
}

export default profile
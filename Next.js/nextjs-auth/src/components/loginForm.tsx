"use client"
import React from 'react'
import { login } from "@/action";
import { useFormState } from "react-dom";

const loginForm = () => {

   const [state, formAction] = useFormState<any, FormData>(login, undefined);

  return (
    <form  action={formAction}>
      <input type="text" name='username' placeholder="Email" />
      <br></br>
      <input type="password" name='password' placeholder="Password" />
      <br></br>
      <button type="submit">Login</button>
      {state?.error && <p>{state.error}</p>}
    </form>
  )
}

export default loginForm
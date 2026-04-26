import React from 'react'

const loginForm = () => {
  return (
    <form>
      <input type="email" placeholder="Email" />
      <br></br>
      <input type="password" placeholder="Password" />
      <br></br>
      <button type="submit">Login</button>
    </form>
  )
}

export default loginForm
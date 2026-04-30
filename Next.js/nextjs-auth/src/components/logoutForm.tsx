import { logout } from '@/action'
import React from 'react'

const logoutForm = () => {
  return (
    <form action={logout}>
        <button>Logout</button>
    </form>
  )
}

export default logoutForm
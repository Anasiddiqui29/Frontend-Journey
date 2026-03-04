import React from 'react'
//we dont the type api will return so we will define it using interface
interface Users{
  id: number,
  name:string
}

const UserPage = async () => {

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: Users[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    
    </>
    
  )
}

export default UserPage
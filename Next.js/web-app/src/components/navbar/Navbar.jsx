"use client"
import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import DarkModeToogle from '../DarkModeToggle/DarkModeToogle';
import { signOut, useSession } from 'next-auth/react';


// creating the arrays of links that can be used in navbar

const links = [
  {
    id : 1 , 
    title : "Home",
    url : "/"  
  },
  {
    id: 2,
    title : "Portfolio",
    url : "/portfolio",
  },
  {
    id : 3,
    title : "Blog",
    url : "/blog"
  },
  {
    id : 4,
    title : "About",
    url : "/about"
  },
  {
    id : 5,
    title : "Contact",
    url : "/contact",
  },
  {
    id : 6,
    title : "Dasboard",
    url : "/dashboard",
  },

];

const Navbar = () => {
  const session = useSession()
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>
      UAV Manager
      </Link>

      <div className={styles.links}>

        <DarkModeToogle />

        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button 
          onClick={signOut} className={styles.logout}
          >
          Logout
          </button>)
        }
        
      </div>
    
    </div>

  )
}

export default Navbar
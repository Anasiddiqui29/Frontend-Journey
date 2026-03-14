"use client"

import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import { constants } from 'node:buffer';
import useSWR from 'swr'
import { useSession } from 'next-auth/react';

const Dashboard = () => {

  // const [data , setData] = useState([]);
  // const [err , setErr] = useState(false)
  // const [isLoading , setLoading] = useState(false)

  // for side quest rendering we use useEffect
  // Problem with useEffect: 
  // setErr , isLoading is not available in useEffect 
  // Old way to fetch data
  // useEffect( () => {
  //   const getData = async () => {

  //     setLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts" , {
  //       cache: "no-store"
  //     });

  //     if (!res.ok)
  //     {
  //       setErr(true)
  //     }
      
  //     const data = await res.json();

  //     setData(data);
  //     setLoading(false);

  //   };
  //   getData();
  // } , []);

  // New way to fetch data 

  const session = useSession()
  console.log(session)

  const fetcher = (url) => fetch(url).then((res) => res.json())
  // The same SWR pattern you already know
  const { data, error , isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  console.log(data)

  return (
    <div className={styles.container}>Dashboard</div>
  )
}

export default Dashboard
"use client"

import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import { constants } from 'node:buffer';
import useSWR from 'swr'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

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
  
  const router = useRouter();
  
  //NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }


  console.log(data)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dashboard</h1>
      <h2 className={styles.desc}>Welcome {session?.data?.user.name}</h2>
      
      <h1 className={styles.UAV_Status}>UAV Status</h1>
      <div>
        <h2 className={styles.UAV_Desc}>🔋 Battery: 90% Remaining</h2>
        <h2 className={styles.UAV_Desc}>⛰️ Altitude: 1000 Meters</h2>
        <h2 className={styles.UAV_Desc}>⚡ Speed: 15 Kmph</h2>
      </div>

      <h1 className={styles.Map}>Map View</h1>
      <div className={styles.map}>
        <div className={styles.marker}>🚁</div>
        <p className={styles.coords}>Lat: 24.86, Lng: 67.00</p>
      </div>   
    </div>
  )
}

export default Dashboard
"use client"
import React from 'react'
import styles from './page.module.css'
import Link from  "next/link";
import Image from "next/image";
import { useState } from 'react';

// fetch data from API
// async function getData() {
//   const res = await fetch("http://localhost:3000/api/posts", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// // over here we are fetching the data from mongodb 
const Blog = () => {
  const [message, setMessage] = useState("");
  const [uavActive, setUavActive] = useState(false);
  const [batteryLevel, setBatteryLevel] = useState(55);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [status, setStatus] = useState("🟡Idle");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleUav = () => {
    if(batteryLevel < 20) {
      setMessage("⚠ Cannot Start - Low Battery");
      return;
    }

    setUavActive(true);
    setStatus("🟢 Active"); 
    setMessage("✔ UAV Started Successfully");
  }

  const stopUav = () => {
    setUavActive(false);
    setStatus("🔴 Inactive");
    setMessage("⏹ UAV Stopped");
  }

  const handleCapture = () => {
    if (!uavActive) {
      setMessage("⚠ Cannot Capture - UAV is not active");
      return;
    }
    setMessage("📸 Image Captured");
  }

  const handleReset = () => {
    setUavActive(false);
    setBatteryLevel(100);
    setMessage("🔁 Mission Reset - UAV Ready");
  }

  const handleEmergencyClick = () => {
    setShowConfirmation(true);
  }

  const confirmEmergency = () => {
    setShowConfirmation(false);
    setUavActive(false);
    setStatus("🔴 Inactive");
    setMessage("🚨 Emergency Activated - UAV Stopped");
  }

  const cancelEmergency = () => {
    setShowConfirmation(false);
    setMessage("Emergency Cancelled");
  }

//   const data = await getData();
  return (
    
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>⚙️Control Panel</h1>
      {message && (
        <div className={styles.messageBox}>
        {message}
        </div>
      )}
      {/* {data.map((item) => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))} */}

      <div className={styles.BigContainer}>
      {/* <div className={styles.left}> */}
        <div className={styles.ControlCard}>
          <h2 className={styles.ControlCardTitle}>Controller</h2>
          <button onClick={handleUav} className={styles.buttonStart} disabled={uavActive}>
            ▶Start UAV</button>
          <button onClick={stopUav} className={styles.buttonStop} disabled={!uavActive}>
            ⏹Stop UAV</button>
          <button onClick={handleCapture} className={styles.buttonCapture} disabled={!uavActive}>
            📸 Capture Image</button>
          <button onClick={handleReset} className={styles.buttonReset} disabled={uavActive}>
            🔁Reset Mission</button>
        </div>
        
        
        <div className={styles.center}>
          <div className={styles.card}>
            <h1 className={styles.status}>UAV Status: {status}</h1>
            <h2 className={styles.UAV_Desc}>🔋 Battery: {batteryLevel}%</h2>
            <h2 className={styles.UAV_Desc}>📡 Signal: Strong</h2>
            <h2 className={styles.UAV_Desc}>🧭 Mode: Auto</h2>
          </div>
        </div>

        
      {/* </div> */}


        <div className={styles.right}>
          <button onClick={handleEmergencyClick} className={styles.buttonEmergency}>🚨Emergency Button</button>  
        </div> 

      </div>

      {showConfirmation && (
        <div className={styles.confirmationBox}>
          <div className={styles.modal}>
          <p>Are you sure you want to activate emergency?</p>
          <button onClick={confirmEmergency} className={styles.confirmButton}>Yes</button>
          <button onClick={cancelEmergency} className={styles.cancelButton}>No</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Blog;
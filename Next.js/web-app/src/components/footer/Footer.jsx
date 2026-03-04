import React from 'react'
import styles from './footer.module.css'
import Image from "next/image"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©Anas Siddiqui.All rights reserved</div>
      <div className={styles.contain}>
        <Image src='/1.png' width={15} height={15} className={styles.icon} alt='facebook'></Image>
        <Image src='/2.png' width={15} height={15} className={styles.icon} alt='instagram'></Image>
        <Image src='/3.png' width={15} height={15} className={styles.icon} alt='twitter'></Image>
        <Image src='/4.png' width={15} height={15} className={styles.icon} alt='youtube'></Image>
      </div>
    </div>
  )
}

export default Footer
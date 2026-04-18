import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const Contact = () => {
  return (
    <div className={styles.container}>
        
      <h1 className={styles.title}>Contact Us</h1>

      <div className={styles.content}>

      <div className={styles.imgContainer}>
        <Image src='/contact.png' fill={true} alt='contact' className={styles.img}></Image>
      </div>
     
      <form className={styles.form}>
        <input type='text' placeholder='Name' className={styles.input}></input>
        <input type='text' placeholder='Username' className={styles.input}></input>
        <textarea
        className={styles.textArea}
          placeholder='Message'
          cols="30"
          rows="10"
        ></textarea>

        <Button url="#" text="SEND"></Button>

      </form>
      </div>


    </div>
  )
}

export default Contact
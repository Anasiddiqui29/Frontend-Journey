import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const Category = async ({params}) => {
  const { category } = await params // await the param as it is a promise
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{category}</h1>
      
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See more" url="#"></Button>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/port1.jpg" fill={true} alt='img' className={styles.img} />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See more" url="#"></Button>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/port1.jpg" fill={true} alt='img' className={styles.img} />
        </div>
      </div>
    </div>
  )
}

export default Category
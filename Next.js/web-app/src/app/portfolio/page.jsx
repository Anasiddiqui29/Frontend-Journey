import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

// The title names for every page which is the speciality for the next js
// Enables SEO
export const metadata = {
  title: "LemonUp Portfolio",
  description: "Description for Portfolio",
};


const Portfolio = () => {
  return (
    <div className={styles.container}>

      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/illustration" className={styles.item}>
          <span className={styles.title}>Illustration</span>
        </Link>

        <Link href="/portfolio/websites" className={styles.item}>
          <span className={styles.title}>Website</span>
        </Link>

        <Link href="/portfolio/applications" className={styles.item}>
          <span className={styles.title}>Application</span>
        </Link>
      </div>

    </div>
  )
}

export default Portfolio
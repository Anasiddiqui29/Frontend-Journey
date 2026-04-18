import React from 'react'
import styles from './page.module.css'
import Image from "next/image";
import Button from "@/components/Button/Button"

const About = () => {
  return (
    <div className={styles.container}>
      
      {/* <div className={styles.imgContainer}>
        <Image src="/abt.jpeg" fill={true} alt='img' className={styles.img}></Image>
        <div className={styles.imageText}>
          <h1 className={styles.imgTitle}>
            Digital StoryTeller
          </h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>

      <div className={styles.txtContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>

        <div className={styles.item}>
          <h1>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>

          <Button url="/contact" text="Contact"></Button>

        </div>
      </div> */}

      
      <h1 className={styles.title}>🍃Wind Alert</h1>
      
      <div className={styles.content}>
      <div className={styles.left}>
      
        <div className={styles.Card}>
          <div className={`${styles.status} ${styles.safe}`}>
            <p className={styles.text1}>📊 Current Wind Conditions: SAFE</p>
          </div>
        </div>

        <div className={styles.Card}>
          <div className={styles.msgs}>
              <p className={styles.msgText}>What to do next?</p>
              <br></br>
              <p className={styles.msgText}>You are good to go <b></b></p>
          </div>
          <div className={styles.msgs}>
            <p className={styles.msgText}>📢 Wind Alert: Crosswind fluctuations increasing</p>
        </div>
        </div>
      </div>

      <div className={styles.right}>
        <Image src="/Windy2.png" fill alt="wind" className={styles.image}/>
      </div>
      </div>

    </div>
  )
}

export default About
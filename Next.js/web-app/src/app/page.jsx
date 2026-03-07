import Image from "next/image";
import styles from "./page.module.css";
import Hero from 'public/hero.png'
import Button from "@/components/Button/Button"

export default function Home() {
  return (
   <div className={styles.container}>
    
    <div className={styles.item}>
      <h1 className={styles.title}>Better try our drinks for your taste.</h1>
      <p className={styles.desc}>
        Turning your idea into reality. We bring the best drinks around the world.
      </p>
      
      <Button url="/portfolio" text="See our Work"></Button>
      {/* <button className={styles.button}>See our Work</button> */}
    </div>

    <div className={styles.item}>
    <Image src={Hero} alt="" className={styles.image}></Image>
    </div>
   
   </div>
    
  );
}

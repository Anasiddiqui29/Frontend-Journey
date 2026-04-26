import Image from "next/image";
import styles from "./page.module.css";
import Hero from 'public/hero.png'
import Button from "@/components/Button/Button"

export default function Home() {
  return (
   <div className={styles.container}>
    
    <div className={styles.item}>
      <h1 className={styles.title}>Try Our Best Drinks</h1>
      <p className={styles.desc}>
        Future is here. Try our futuristic drink.
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

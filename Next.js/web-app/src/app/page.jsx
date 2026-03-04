import Image from "next/image";
import styles from "./page.module.css";
import Hero from 'public/hero.png'

export default function Home() {
  return (
   <div>
    
    <div className={styles.item}>
      <h1 className={styles.title}>Better try our drinks.</h1>
      <p1 className={styles.desc}>
        Turning your idea into reality. We bring the best drinks around the world.
      </p1>
    </div>

    <div className={styles.item}>
    <Image src={Hero} alt="" className={styles.image}></Image>
    </div>
   
   </div>
    
  );
}

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css";
const PIC_COUNT = 16;

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  function nextPic() {
    setCurrent((prev) => (prev + 1) % PIC_COUNT);
  }

  function prevPic() {
    setCurrent((prev) => (prev - 1 + PIC_COUNT) % PIC_COUNT);
  }
  return (
    <div className={styles.galleryContainer}>
      <div className={styles.pics}>
        <Image
          priority={true}
          src={`/art/${current}.jpg`}
          placeholder='blur'
          blurDataURL={`/art/${current}.jpg`}
          alt="My paintings"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            height: "70vh",
            width: "auto"
          }}
          width={300}
          height={400} />
      </div>
      <div className={styles.footer}>
        <div className={`${styles.scrollBtn} ${styles.prevPic}`} onClick={prevPic}>&#9664;</div>
        <Link scroll={true} href="#age" className={styles.scrollBtn}>
          &#9650;
        </Link>
        <Link scroll={true} href="#contact" className={styles.scrollBtn}>
          &#9660;
        </Link>
        <div className={`${styles.scrollBtn} ${styles.nextPic}`} onClick={nextPic}>&#9654;</div>
      </div>
    </div >
  );
}


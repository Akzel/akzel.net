import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
const PIC_COUNT = 30;

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  useEffect(() => {
    const preloadImages = () => {
      let images: string[] = [];
      for (let i = 0; i < PIC_COUNT; i++) {
        const img = new Image();
        img.src = `/art/${i}.jpg`;
        images.push(img.src);
      }
      setLoadedImages(images);
    };
    preloadImages();
  }, []);

  function showNextPicture() {
    setCurrent((prev) => (prev + 1) % PIC_COUNT);
  }

  function showPreviousPicture() {
    setCurrent((prev) => (prev - 1 + PIC_COUNT) % PIC_COUNT);
  }

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.pics}>
        <Image
          priority={true}
          src={loadedImages[current]}
          placeholder="blur"
          blurDataURL={loadedImages[current]}
          alt="My paintings"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ height: "70vh", width: "auto" }}
          quality={100}
          width={300}
          height={400}
        />
      </div>
      <div className={styles.footer}>
        <button
          className={`${styles.scrollBtn} ${styles.prevPic}`}
          onClick={showPreviousPicture}
          aria-label="Previous Picture"
        >
          &#9664;
        </button>
        <Link scroll={true} href="#age" className={styles.scrollBtn} aria-label="Scroll to Age Section">
          &#9650;
        </Link>
        <Link scroll={true} href="#contact" className={styles.scrollBtn} aria-label="Scroll to Contact Section">
          &#9660;
        </Link>
        <button
          className={`${styles.scrollBtn} ${styles.nextPic}`}
          onClick={showNextPicture}
          aria-label="Next Picture"
        >
          &#9654;
        </button>
      </div>
    </div>
  );
}

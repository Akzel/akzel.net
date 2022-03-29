import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Age from "../components/age";

export default function AgePage() {
  return (
    <>
      <main className={styles.main} id="age">
        <div className={styles.description}>
          <Image
            src="/wizard.png"
            width={100}
            height={150}
            alt="amazing picture of pixel art wizard"
          ></Image>
          {Age()}
        </div>

        <code className={styles.code}>
          lessthantwo|
          <a
            href="https://www.instagram.com/stories/highlights/17922727208146885/"
            target="_blank"
            rel="noreferrer"
          >
            {"<2"}
          </a>
        </code>
        <footer className={styles.footer}>
          <Link scroll={true} href="#Welcome">
            <a className={styles.scrollBtn}>&#9660;</a>
          </Link>
        </footer>
      </main>
    </>
  );
}

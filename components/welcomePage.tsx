import Link from "next/link";
import styles from "../styles/Home.module.css";
export default function Welcome() {
  return (
    <>
      {" "}
      <main className={styles.main} id="Welcome">
        <h1 className={styles.title}>
          Welcome to <a>Akzel.xyz</a>
        </h1>

        <a className={styles.card}>
          <h2>Looks pretty empty here.. </h2>
          <p>
            I plan on adding more stuff, for now this page serves to show off
            the scrolling feature
          </p>
        </a>

        <footer className={styles.footer}>
          <Link href="#age">
            <a className={styles.scrollBtn}>&#9650;</a>
          </Link>
          <Link scroll={true} href="#Contact">
            <a className={styles.scrollBtn}>&#9660;</a>
          </Link>
        </footer>
      </main>
    </>
  );
}

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
        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>Looks pretty empty here.. </h2>
            <p>
              I plan on adding more stuff, for now this page serves to show off
              the scrolling feature
            </p>
          </a>
        </div>{" "}
        <footer className={styles.footer}>
          <Link scroll={true} href="#age">
            &#9650;
          </Link>
          <Link scroll={true} href="#Contact">
            &#9660;
          </Link>
        </footer>
      </main>
    </>
  );
}

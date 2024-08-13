import styles from "../styles/Home.module.css";
import Link from "next/link";
import gallery from "./gallery"

export default function Art() {
  return (
    <main className={styles.body} id="art">
      {gallery()}

    </main>

  )
}



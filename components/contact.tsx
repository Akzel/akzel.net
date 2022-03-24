import Link from "next/link";
import styles from "../styles/Home.module.css";
import { SocialIcon } from "react-social-icons";
import React from "react";
import { useToasts } from "react-toast-notifications";

export default function Contact() {
  const { addToast } = useToasts();
  return (
    <>
      {" "}
      <main className={styles.main} id="Contact">
        <h1 className={styles.title}>
          Hit me <a>up!</a>
        </h1>
        <div className={styles.grid}>
          <a>
            <div className={styles.notify}>Copied!</div>
            <SocialIcon
              className={styles.social}
              network="discord"
              onClick={() => {
                navigator.clipboard.writeText("Akzel#6076");
                addToast("copied!: Akzel#6076", {
                  appearance: "success",
                  autoDismiss: true,
                  autoDismissTimeout: 1000,
                });
              }}
            />
            <SocialIcon
              className={styles.social}
              network="email"
              onClick={() => {
                navigator.clipboard.writeText("axel@akzel.xyz");
                addToast("copied!: axel@akzel.xyz", {
                  appearance: "success",
                  autoDismiss: true,
                  autoDismissTimeout: 1000,
                });
              }}
            />
            <SocialIcon
              className={styles.social}
              url="https://www.instagram.com/axel_____________/"
            />
            <SocialIcon
              className={styles.social}
              url="https://www.linkedin.com/in/axel-magn%C3%BAsson-912528227/"
            />
          </a>
        </div>{" "}
        <footer className={styles.footer}>
          <Link scroll={true} href="#Welcome">
            &#9650;
          </Link>
        </footer>
      </main>
    </>
  );
}

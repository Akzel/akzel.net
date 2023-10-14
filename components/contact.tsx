import Link from "next/link";
import styles from "../styles/Home.module.css";
import { SocialIcon } from "react-social-icons";
import React from "react";

export default function Contact() {
  return (
    <>
      <main className={styles.body} id="Contact">
        <div className={styles.content}>
        <div className={(styles.alertBox, styles.orange)} id="alert"></div>
          <div className={styles.title}>
            social <span className={styles.subtitle}>stuff</span>
            <div>
              <SocialIcon
                className={styles.social}
                network="discord"
                onClick={() => {
                  copyStuff("Akzel#6076");
                }}
              />
              <SocialIcon
                className={styles.social}
                network="email"
                url="mailto:axel@akzel.net?Subject=Hello!"
              />

              <SocialIcon
                className={styles.social}
                url="https://www.instagram.com/akzel_____/"
              />
              <SocialIcon
                className={styles.social}
                url="https://www.linkedin.com/in/akzeldotnet/"
              />
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <Link scroll={true} href="#age">
            <a className={styles.scrollBtn}>&#9650;</a>
          </Link>
        </div>
      </main>
    </>
  );
}

function copyStuff(text: string) {
  if (typeof window !== "undefined") {
    navigator.clipboard.writeText(text);
    const alertBox = document.getElementById("alert");
    if (alertBox) {
      alertBox.innerHTML = "<h1>Copied!: " + text + "</h1>";
      setTimeout(function () {
        alertBox.innerHTML = "";
      }, 500);
    }
  }
}

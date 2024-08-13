import Link from "next/link";
import styles from "../styles/Home.module.css";
import { SocialIcon } from "react-social-icons";
import React from "react";
import Image from "next/image";

export default function Contact() {
  return (
    <main className={styles.body} id="contact">
      <div className={styles.content}>
        <div className={styles.wizard}>
          <Image
            src="/wizard.png"
            width={100}
            height={150}
            alt="amazing picture of pixel art wizard (which I made)"
          />
        </div>

        <div className={styles.title}>
          <h1 className={(styles.alertBox, styles.orange)} id="alert">Contact</h1>
          <div className={styles.socialContainer}>
            <SocialIcon
              className={styles.social}
              network="discord"
              onClick={() => {
                copyStuff("akzel.net");
              }}
            />
            <SocialIcon
              className={styles.social}
              network="email"
              url="mailto:axel@akzel.net?Subject=Hello!"
            />

            <SocialIcon
              className={styles.social}
              url="https://www.instagram.com/akzeldotnet/"
            />
            <SocialIcon
              className={styles.social}
              url="https://www.linkedin.com/in/akzeldotnet/"
            />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Link scroll={true} href="#art" className={styles.scrollBtn}>
          &#9650;
        </Link>
      </div>
    </main>

  );
}

function copyStuff(text: string) {
  if (typeof window !== "undefined") {
    navigator.clipboard.writeText(text);
    const alertBox = document.getElementById("alert");
    if (alertBox) {
      alertBox.innerHTML = "Copied:" + text + " to clipboard (discord username)";
      setTimeout(function() {
        alertBox.innerHTML = "Contact";
      }, 3000);
    }
  }
}

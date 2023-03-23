import Link from "next/link";
import styles from "../styles/Home.module.css";
import { SocialIcon } from "react-social-icons";
import React from "react";

export default function Contact() {
  if (typeof window !== "undefined") {
    return (
      <div>
        {" "}
        <main className={styles.main} id="Contact">
          <h1 className={styles.title}>
            Get in <a>touch!</a>
          </h1>
          <div>
            <SocialIcon
              className={styles.social}
              network="discord"
              onClick={() => {
                copyStuff("Akzel#6076");
              }}
            ></SocialIcon>{" "}
            <a href="mailto:axel@akzel.xyz?Subject=Hello!">
              <SocialIcon
                className={styles.social}
                network="email"
              ></SocialIcon>
            </a>
            <SocialIcon
              className={styles.social}
              url="https://www.instagram.com/akzel_____/"
            ></SocialIcon>
            <SocialIcon
              className={styles.social}
              url="https://www.linkedin.com/in/axel-magn%C3%BAsson-912528227/"
            ></SocialIcon>
          </div>
          <footer className={styles.footer}>
            <Link scroll={true} href="#Age">
              <a className={styles.scrollBtn}>&#9650;</a>
            </Link>
          </footer>
          <div className={(styles.alertBox, styles.orange)} id="alert"></div>
        </main>
      </div>
    );
  } else {
    return <h1>oopsie...</h1>;
  }
}

function copyStuff(text: string) {
  navigator.clipboard.writeText(text);
  document.getElementById("alert")!.innerHTML =
    "<h1>Copied!: " + text + "</h1>";
  setTimeout(function () {
    document.getElementById("alert")!.innerHTML = "";
  }, 500);
}

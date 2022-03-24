import Link from "next/link";
import styles from "../styles/Home.module.css";
import { SocialIcon } from "react-social-icons";
import React from "react";

export default function Contact() {
  if (typeof window !== "undefined") {
    return (
      <>
        {" "}
        <main className={styles.main} id="Contact">
          <h1 className={styles.title}>
            Get in <a>touch!</a>
          </h1>

          <a>
            <SocialIcon
              className={styles.social}
              network="discord"
              onClick={() => {
                copyStuff("Akzel#6076");
              }}
            ></SocialIcon>

            <SocialIcon
              className={styles.social}
              network="email"
              onClick={() => {
                copyStuff("axel@akzel.xyz");
              }}
            ></SocialIcon>

            <SocialIcon
              className={styles.social}
              url="https://www.instagram.com/axel_____________/"
            ></SocialIcon>
            <SocialIcon
              className={styles.social}
              url="https://www.linkedin.com/in/axel-magn%C3%BAsson-912528227/"
            ></SocialIcon>
          </a>

          <footer className={styles.footer}>
            <Link scroll={true} href="#Welcome">
              &#9650;
            </Link>
          </footer>
          <div className={styles.alertBox}>
            <span id="alert" className={styles.orange}>
              &nbsp;
            </span>
          </div>
        </main>
      </>
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

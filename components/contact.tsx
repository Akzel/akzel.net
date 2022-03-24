import Link from "next/link";
import styles from "../styles/Home.module.css";
import { SocialIcon } from "react-social-icons";
import React from "react";

export default function Contact() {
  const alertElement = document.getElementById("alert");
  if (alertElement === null) {
    alert("oops");
  } else {
    // since you've done the nullable check
    // TS won't complain from this point on
    alertElement.nodeName; // <- no error
  }
  return (
    <>
      {" "}
      <main className={styles.main} id="Contact">
        <h1 className={styles.title}>
          Get in <a>touch!</a>
        </h1>
        <div className={styles.grid}>
          <a>
            <div className={styles.notify}>Copied!</div>
            <SocialIcon
              className={styles.social}
              network="discord"
              onClick={() => {
                navigator.clipboard.writeText("Akzel#6076");
                alertElement!.innerHTML = "<h1>Copied!: Akzel#6076</a>";
                setTimeout(function () {
                  alertElement!.innerHTML = "";
                }, 300);
              }}
            ></SocialIcon>

            <SocialIcon
              className={styles.social}
              network="email"
              onClick={() => {
                navigator.clipboard.writeText("axel@akzel.xyz");
                alertElement!.innerHTML = "<h1>Copied!: axel@akzel.xyz</a>";
                setTimeout(function () {
                  alertElement!.innerHTML = "";
                }, 300);
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
        </div>{" "}
        <footer className={styles.footer}>
          <Link scroll={true} href="#Welcome">
            &#9650;
          </Link>
        </footer>
        <span id="alert" className={styles.orange}></span>
      </main>
    </>
  );
}

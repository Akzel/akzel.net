import type { NextPage } from "next";
import Head from "next/head";
import AgePage from "../components/agePage";
import Contact from "../components/contact";
import styles from "../styles/Home.module.css";
import { Analytics } from '@vercel/analytics/react'
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hi.</title>
        <meta name="description" content="Made by Axel Magnússon" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
    
      </Head>
      <div className={styles.rootPage}>
      <AgePage />
      <Contact />
      <Analytics />
      </div>
    </>
  );
};

export default Home;

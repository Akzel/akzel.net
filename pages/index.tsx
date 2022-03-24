import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import AgePage from "../components/agePage";
import Welcome from "../components/welcomePage";
import Contact from "../components/contact";

const customToast = (children: React.ReactNode) => (
  <div
    style={{
      backgroundColor: "#121212",
      color: "orange",
      padding: "0.5rem 2rem 0.5rem",
      margin: "1rem",
      border: "1px solid",
      borderRadius: "5%",
    }}
  >
    {children}
  </div>
);

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Akzel.xyz</title>
        <meta name="description" content="Made by Axel Magnússon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AgePage></AgePage>
      <Welcome></Welcome>
      <Contact></Contact>
    </div>
  );
};

export default Home;

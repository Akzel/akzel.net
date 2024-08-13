import type { NextPage } from "next";
import Head from "next/head";
import AgePage from "../components/agePage";
import Contact from "../components/contact";
import Art from "../components/art"
import { Analytics } from '@vercel/analytics/react'
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hi.</title>
        <meta name="description" content="Made by Axel Magnússon" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AgePage />
      <Art />
      <Contact />
      <Analytics />
    </>
  );
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import AgePage from "../components/agePage";
import LoL from "../components/LoLPage";
import Contact from "../components/contact";
import { addNames } from "../components/addNames";

const SummonerEndpoint = `https://eun1.api.riotgames.com/lol/league/v4/entries/by-summoner/F1FFlvbNy2brAjyK3dvhQvCpTj-Z8r4DArTuHWgf_KSpmjU?api_key=${process.env.RIOT_API_KEY}`;
const masteryEndpoint = `https://eun1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/F1FFlvbNy2brAjyK3dvhQvCpTj-Z8r4DArTuHWgf_KSpmjU?api_key=${process.env.RIOT_API_KEY}`;
// const championEndpoint = `http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json`;

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const [summonerRes, masteryRes] = await Promise.all([
    fetch(SummonerEndpoint),
    fetch(masteryEndpoint),
  ]);
  const [summoner, masteryNoNames] = await Promise.all([
    summonerRes.json(),
    masteryRes.json(),
  ]);

  const mastery = await addNames(masteryNoNames);

  return {
    props: {
      summoner,
      mastery,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 30, // In seconds
  };
}

const Home: NextPage = ({ summoner, mastery }: any) => {
  // for (var i = 0; mastery.list.length(); i++)
  return (
    <div>
      <Head>
        <title>Akzel.xyz</title>
        <meta name="description" content="Made by Axel Magnússon" />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <AgePage />
      <LoL summoner={summoner} mastery={mastery} />
      <Contact />
    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import AgePage from "../components/agePage";
import Contact from "../components/contact";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hi.</title>
        <meta name="description" content="Made by Axel Magnússon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AgePage />
      <Contact />
    </div>
  );
};

export default Home;
// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
// export async function getStaticProps() {
//   const [summonerRes, masteryRes, championsRes] = await Promise.all([
//     fetch(SummonerEndpoint),
//     fetch(masteryEndpoint),
//     fetch(championEndpoint),
//   ]);
//   const [summoner, mastery, champions] = await Promise.all([
//     summonerRes.json(),
//     masteryRes.json(),
//     championsRes.json(),
//   ]);
//
//   var solo: any = null;
//   var flex: any = null;
//
//   for (var i = 0; i < summoner.length; i++) {
//     if (summoner[i].queueType == "RANKED_SOLO_5x5") {
//       solo = summoner[i];
//     }
//     if (summoner[i].queueType == "RANKED_FLEX_SR") {
//       flex = summoner[i];
//     }
//   }
//
//   for (var i = 0; i < mastery.length; i++) {
//     for (var j = 0; j < Object.keys(champions.data).length; j++) {
//       if (
//         mastery[i].championId ==
//         champions.data[Object.keys(champions.data)[j]].key
//       ) {
//         mastery[i].championName =
//           champions.data[Object.keys(champions.data)[j]].name;
//         mastery[i].nospaceName = champions.data[
//           Object.keys(champions.data)[j]
//         ].name.replace(/ /g, "");
//         console.log(champions.data[Object.keys(champions.data)[j]].image);
//         mastery[i].championImage =
//           "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
//           champions.data[Object.keys(champions.data)[j]].image.full.slice(
//             0,
//             -4
//           ) +
//           "_0.jpg";
//         console.log("MATCHED", mastery[i]);
//         mastery[
//           i
//         ].lolalytics = `https://u.gg/lol/profile/eun1/akzel/champion-stats/${mastery[
//           i
//         ].nospaceName.toLowerCase()}`;
//       }
//
//       // mastery[i].championImage = champions.data[mastery[i].championId].image.full;
//       // mastery[i].championName = champion.name;
//       // mastery[i].imageLocation = `/static/${nospaceName}_0.jpg`;
//       // mastery[i].lolalytics = `https://u.gg/lol/profile/eun1/akzel/champion-stats/${nospaceName.toLowerCase()}`;
//     }
//   }
//
//   return {
//     props: {
//       solo,
//       flex,
//       mastery,
//     },
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every 10 seconds
//     // revalidate: 30, // In seconds
//   };
// }

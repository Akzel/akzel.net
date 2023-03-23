import type { NextPage } from "next";
import Head from "next/head";
import AgePage from "../components/agePage";
import LoL from "../components/LoLPage";
import Contact from "../components/contact";



const SummonerEndpoint = `https://eun1.api.riotgames.com/lol/league/v4/entries/by-summoner/G6Y_QbNtK_sFxzr6x4ywui12MzlA8vMAvWvSuqWG6qINzMw?api_key=${process.env.RIOT_API_KEY}`;
const masteryEndpoint = `https://eun1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/G6Y_QbNtK_sFxzr6x4ywui12MzlA8vMAvWvSuqWG6qINzMw?api_key=${process.env.RIOT_API_KEY}`;
const championEndpoint = `http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json`;


// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const [summonerRes, masteryRes, championsRes] = await Promise.all([
    fetch(SummonerEndpoint),
    fetch(masteryEndpoint),
    fetch(championEndpoint),
  ]);
  const [summoner, mastery, champions] = await Promise.all([
    summonerRes.json(),
    masteryRes.json(),
    championsRes.json(),
  ]);

  var solo: any = null;
  var flex: any = null;

  for (var i = 0; i < summoner.length; i++) {
    if (summoner[i].queueType == "RANKED_SOLO_5x5") {
      solo = summoner[i];
    }
    if (summoner[i].queueType == "RANKED_FLEX_SR") {
      flex = summoner[i];
    }
  }

  for (var i = 0; i < mastery.length; i++) {
    for (var j = 0; j < Object.keys(champions.data).length; j++) {
      if (mastery[i].championId == champions.data[Object.keys(champions.data)[j]].key) {
        
        mastery[i].championName = champions.data[Object.keys(champions.data)[j]].name;
        mastery[i].nospaceName = champions.data[Object.keys(champions.data)[j]].name.replace(/ /g, "");
        console.log(champions.data[Object.keys(champions.data)[j]].image)
        mastery[i].championImage = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+champions.data[Object.keys(champions.data)[j]].image.full.slice(0, -4)+"_0.jpg";
        console.log("MATCHED", mastery[i]);
        mastery[i].lolalytics = `https://u.gg/lol/profile/eun1/akzel/champion-stats/${nospaceName.toLowerCase()}`;
      }
   
    // mastery[i].championImage = champions.data[mastery[i].championId].image.full;
    // mastery[i].championName = champion.name;
    // mastery[i].imageLocation = `/static/${nospaceName}_0.jpg`;
    // mastery[i].lolalytics = `https://u.gg/lol/profile/eun1/akzel/champion-stats/${nospaceName.toLowerCase()}`;
  }
}

  return {
    props: {
      solo,
      flex,
      mastery,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 30, // In seconds
  };
}

const Home: NextPage = ({ solo, flex, mastery }: any) => {
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
      <LoL solo={solo} flex={flex} mastery={mastery} />
      <Contact />
    </div>
  );
};

export default Home;

const championNames = [
  { id: 266, name: "Aatrox" },
  { id: 103, name: "Ahri" },
  { id: 84, name: "Akali" },
  { id: 166, name: "Akshan" },
  { id: 12, name: "Alistar" },
  { id: 32, name: "Amumu" },
  { id: 34, name: "Anivia" },
  { id: 1, name: "Annie" },
  { id: 523, name: "Aphelios" },
  { id: 22, name: "Ashe" },
  { id: 136, name: "Aurelion Sol" },
  { id: 268, name: "Azir" },
  { id: 432, name: "Bard" },
  { id: 53, name: "Blitzcrank" },
  { id: 63, name: "Brand" },
  { id: 201, name: "Braum" },
  { id: 51, name: "Caitlyn" },
  { id: 164, name: "Camille" },
  { id: 69, name: "Cassiopeia" },
  { id: 31, name: "Cho'Gath" },
  { id: 42, name: "Corki" },
  { id: 122, name: "Darius" },
  { id: 131, name: "Diana" },
  { id: 119, name: "Draven" },
  { id: 36, name: "Dr. Mundo" },
  { id: 245, name: "Ekko" },
  { id: 60, name: "Elise" },
  { id: 28, name: "Evelynn" },
  { id: 81, name: "Ezreal" },
  { id: 9, name: "Fiddlesticks" },
  { id: 114, name: "Fiora" },
  { id: 105, name: "Fizz" },
  { id: 3, name: "Galio" },
  { id: 41, name: "Gangplank" },
  { id: 86, name: "Garen" },
  { id: 150, name: "Gnar" },
  { id: 79, name: "Gragas" },
  { id: 104, name: "Graves" },
  { id: 887, name: "Gwen" },
  { id: 120, name: "Hecarim" },
  { id: 74, name: "Heimerdinger" },
  { id: 420, name: "Illaoi" },
  { id: 39, name: "Irelia" },
  { id: 427, name: "Ivern" },
  { id: 40, name: "Janna" },
  { id: 59, name: "Jarvan IV" },
  { id: 24, name: "Jax" },
  { id: 126, name: "Jayce" },
  { id: 202, name: "Jhin" },
  { id: 222, name: "Jinx" },
  { id: 145, name: "Kai'Sa" },
  { id: 429, name: "Kalista" },
  { id: 43, name: "Karma" },
  { id: 30, name: "Karthus" },
  { id: 38, name: "Kassadin" },
  { id: 55, name: "Katarina" },
  { id: 10, name: "Kayle" },
  { id: 141, name: "Kayn" },
  { id: 85, name: "Kennen" },
  { id: 121, name: "Kha'Zix" },
  { id: 203, name: "Kindred" },
  { id: 240, name: "Kled" },
  { id: 96, name: "Kog'Maw" },
  { id: 7, name: "LeBlanc" },
  { id: 64, name: "Lee Sin" },
  { id: 89, name: "Leona" },
  { id: 876, name: "Lillia" },
  { id: 127, name: "Lissandra" },
  { id: 236, name: "Lucian" },
  { id: 117, name: "Lulu" },
  { id: 99, name: "Lux" },
  { id: 54, name: "Malphite" },
  { id: 90, name: "Malzahar" },
  { id: 57, name: "Maokai" },
  { id: 11, name: "Master Yi" },
  { id: 21, name: "Miss Fortune" },
  { id: 62, name: "Wukong" },
  { id: 82, name: "Mordekaiser" },
  { id: 25, name: "Morgana" },
  { id: 267, name: "Nami" },
  { id: 75, name: "Nasus" },
  { id: 111, name: "Nautilus" },
  { id: 518, name: "Neeko" },
  { id: 76, name: "Nidalee" },
  { id: 56, name: "Nocturne" },
  { id: 20, name: "Nunu & Willump" },
  { id: 2, name: "Olaf" },
  { id: 61, name: "Orianna" },
  { id: 516, name: "Ornn" },
  { id: 80, name: "Pantheon" },
  { id: 78, name: "Poppy" },
  { id: 555, name: "Pyke" },
  { id: 246, name: "Qiyana" },
  { id: 133, name: "Quinn" },
  { id: 497, name: "Rakan" },
  { id: 33, name: "Rammus" },
  { id: 421, name: "Rek'Sai" },
  { id: 526, name: "Rell" },
  { id: 888, name: "Renata Glasc" },
  { id: 58, name: "Renekton" },
  { id: 107, name: "Rengar" },
  { id: 92, name: "Riven" },
  { id: 68, name: "Rumble" },
  { id: 13, name: "Ryze" },
  { id: 360, name: "Samira" },
  { id: 113, name: "Sejuani" },
  { id: 235, name: "Senna" },
  { id: 147, name: "Seraphine" },
  { id: 875, name: "Sett" },
  { id: 35, name: "Shaco" },
  { id: 98, name: "Shen" },
  { id: 102, name: "Shyvana" },
  { id: 27, name: "Singed" },
  { id: 14, name: "Sion" },
  { id: 15, name: "Sivir" },
  { id: 72, name: "Skarner" },
  { id: 37, name: "Sona" },
  { id: 16, name: "Soraka" },
  { id: 50, name: "Swain" },
  { id: 517, name: "Sylas" },
  { id: 134, name: "Syndra" },
  { id: 223, name: "Tahm Kench" },
  { id: 163, name: "Taliyah" },
  { id: 91, name: "Talon" },
  { id: 44, name: "Taric" },
  { id: 17, name: "Teemo" },
  { id: 412, name: "Thresh" },
  { id: 18, name: "Tristana" },
  { id: 48, name: "Trundle" },
  { id: 23, name: "Tryndamere" },
  { id: 4, name: "Twisted Fate" },
  { id: 29, name: "Twitch" },
  { id: 77, name: "Udyr" },
  { id: 6, name: "Urgot" },
  { id: 110, name: "Varus" },
  { id: 67, name: "Vayne" },
  { id: 45, name: "Veigar" },
  { id: 161, name: "Vel'Koz" },
  { id: 711, name: "Vex" },
  { id: 254, name: "Vi" },
  { id: 234, name: "Viego" },
  { id: 112, name: "Viktor" },
  { id: 8, name: "Vladimir" },
  { id: 106, name: "Volibear" },
  { id: 19, name: "Warwick" },
  { id: 498, name: "Xayah" },
  { id: 101, name: "Xerath" },
  { id: 5, name: "Xin Zhao" },
  { id: 157, name: "Yasuo" },
  { id: 777, name: "Yone" },
  { id: 83, name: "Yorick" },
  { id: 350, name: "Yuumi" },
  { id: 154, name: "Zac" },
  { id: 238, name: "Zed" },
  { id: 221, name: "Zeri" },
  { id: 115, name: "Ziggs" },
  { id: 26, name: "Zilean" },
  { id: 142, name: "Zoe" },
  { id: 143, name: "Zyra" },
];

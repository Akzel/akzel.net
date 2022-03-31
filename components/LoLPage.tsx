import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

interface gameDataProps {
  leagueId: string;
  queueType: string;
  tier: string;
  rank: string;
  summonerId: string;
  summonerName: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;
}

export default function LoL({
  summoner,
  mastery,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const flex: gameDataProps = summoner[0];
  const solo: gameDataProps = summoner[1];
  // console.log(mastery);
  if (flex) {
    return (
      <>
        {" "}
        <main className={styles.main} id="LoL">
          <h1 className={styles.title}>
            I really like <br></br>
            <a>League of legends</a>
          </h1>
          <br></br>
          <a className={styles.subtitle}>These are my ranks currently</a>
          <div className={styles.grid}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://u.gg/lol/profile/eun1/akzel/overview"
            >
              <div className={styles.card}>
                <h1>SoloQueue</h1>
                <ul>
                  <li>
                    {solo.tier} {solo.rank} -- {solo.leaguePoints}LP
                  </li>
                  <li>
                    {solo.wins}W/{solo.losses}L
                  </li>
                </ul>
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://u.gg/lol/profile/eun1/akzel/overview"
            >
              <div className={styles.card}>
                <h1>FlexQueue</h1>
                <ul>
                  <li>
                    {flex.tier} {flex.rank} -- {flex.leaguePoints}LP
                  </li>
                  <li>
                    {flex.wins}W/{flex.losses}L
                  </li>
                </ul>
              </div>
            </a>
          </div>
          <a className={styles.subtitleX}>These are my most played champions</a>
          <div className={styles.champgrid}>
            {mastery.slice(0, 6).map((champ: any) => {
              const {
                championId,
                championName,
                championPoints,
                imageLocation,
                lolalytics,
              } = champ;

              return (
                <div key={championId} className={styles.champcard}>
                  <a href={lolalytics} target="_blank" rel="noreferrer">
                    <div className={styles.champName}>
                      <strong>{championName}</strong>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imageLocation}
                      alt={championName}
                      className={styles.image}
                    ></img>
                    <div className={styles.champMastery}>
                      mastery points: <strong>{championPoints}</strong>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>

          <footer className={styles.footer}>
            <Link href="#age">
              <a className={styles.scrollBtn}>&#9650;</a>
            </Link>
            <Link scroll={true} href="#Contact">
              <a className={styles.scrollBtn}>&#9660;</a>
            </Link>
          </footer>
        </main>
      </>
    );
  } else {
    return (
      <>
        {" "}
        <main className={styles.main} id="LoL">
          <h1 className={styles.title}>
            I really like <br></br>
            <a>League of legends</a>
          </h1>
          <br></br>
          <a className={styles.subtitle}>
            My api key for the riot api has expired...
          </a>
          <div className={styles.grid}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://u.gg/lol/profile/eun1/akzel/overview"
            >
              <div className={styles.card}>
                <h1>Here is a link to my u.gg profile</h1>
              </div>
            </a>
          </div>

          <footer className={styles.footer}>
            <Link href="#age">
              <a className={styles.scrollBtn}>&#9650;</a>
            </Link>
            <Link scroll={true} href="#Contact">
              <a className={styles.scrollBtn}>&#9660;</a>
            </Link>
          </footer>
        </main>
      </>
    );
  }
}

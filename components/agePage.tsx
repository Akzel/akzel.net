import styles from "../styles/Home.module.css";
import { Listbox } from "@headlessui/react";
import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

var DOG = "🐕";
var DOWN_ARROW = "▾";

export default function AgePage() {
  return (
    <main className={styles.main} id="age">
      <div className={styles.title}>
        <Image
          src="/wizard.png"
          width={100}
          height={150}
          alt="amazing picture of pixel art wizard (which I made)"
        >
        </Image>
        <br></br>
        {ageBuilder()}
      </div>
      <footer className={styles.footer}>
        <Link scroll={true} href="#Contact">
          <a className={styles.scrollBtn}>&#9660;</a>
        </Link>
      </footer>
    </main>
  );
}

function ageBuilder() {
  const measureList = [
    { divisor: 1000, name: "seconds", fixed: 2 },
    { divisor: 60000, name: "minutes", fixed: 3 },
    { divisor: 3600000, name: "hours", fixed: 5 },
    { divisor: 86400000, name: "days", fixed: 6 },
    { divisor: 31556952000, name: "years", fixed: 9 },
    { divisor: 315360000000, name: "decades", fixed: 10 },
    { divisor: 3155760000000, name: "centuries", fixed: 11 },
    { divisor: 31556952000000, name: "millennia", fixed: 12 },
    { divisor: 4508136000, name: "dog years", fixed: 8, note: `${DOG}` },
  ];
  const date: number = Date.now();
  const birth: number = 880710600000;
  const [measure, setMeasure] = useState(measureList[4]);
  const updateMeasure = (newMeasure: any) => {
    setMeasure(newMeasure);
  };

  const [currentTime, setCurrentTime] = useState(
    date ? new Date(date).getTime() : Date.now(),
  );
  const [age, setAge] = useState("0");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().getTime());
      setAge(((currentTime - birth) / measure.divisor).toFixed(measure.fixed));
    }, 10);
    return () => clearInterval(interval);
  });

  return (
    <>
      Existing for<br></br>
      {age}
      <Listbox value={measure} onChange={updateMeasure} as="div">
        <Listbox.Button as="a" className={styles.ageBtn}>
          {measure.name}
          {DOWN_ARROW}
        </Listbox.Button>
        <span id="dog">{measure.name == "dog years" ? DOG : ""}</span>
        <Listbox.Options className="flex flex-column " as="div">
          {measureList.map((m) => (
            <Listbox.Option
              key={m.divisor}
              value={m}
              as="div"
              className={(measure.name === m.name
                ? styles.orange
                : styles.white,
                styles.clickMe)}
            >
              {m.name} {m.note ? m.note : ""}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </>
  );
}

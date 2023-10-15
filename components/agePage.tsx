import styles from "../styles/Home.module.css";
import { Listbox, Transition } from "@headlessui/react";
import { useEffect, useState } from "react";

import Link from "next/link";

export default function AgePage() {
  return (
    <main className={styles.body} id="age">
      <div className={styles.content}>
        {AgeBuilder()}
      </div>
      <div className={styles.footer}>
        <Link scroll={true} href="#Contact">
          <a className={styles.scrollBtn}>&#9660;</a>
        </Link>
      </div>
    </main>
  );
}

function AgeBuilder() {
  const measureList = [
    { divisor: 1000, name: "seconds", fixed: 1 },
    { divisor: 60000, name: "minutes", fixed: 3 },
    { divisor: 3600000, name: "hours", fixed: 5 },
    { divisor: 86400000, name: "days", fixed: 6 },
    { divisor: 604800000, name: "weeks", fixed: 7 },
    { divisor: 2629800000, name: "months", fixed: 8 },
    { divisor: 31557600000, name: "years", fixed: 9 },
    { divisor: 5700000, name: "Bug's Life™s", fixed: 5, note: "🪳" },
    { divisor: 4508136000, name: "dog years", fixed: 8, note: "🐕" },
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
  const [age, setAge] = useState(
    ((new Date().getTime() - birth) / measure.divisor).toFixed(measure.fixed),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().getTime());
      setAge(((currentTime - birth) / measure.divisor).toFixed(measure.fixed));
    }, 10);
    return () => clearInterval(interval);
  });

  return (
    <Listbox
      value={measure}
      onChange={updateMeasure}
      as="div"
      className={styles.ageContent}
    >
      {({ open }) => (
        <>
          {open || (
            <>
              <div className={styles.title}>
                <h1>hi, my name is Axel</h1>
                <h2>I&apos;ve been here for</h2>
              </div>
              <div id={styles.timer}>{age}</div>
              <Listbox.Button as="div" className={styles.ageBtn}>
                <span id={styles.dog}>
                  {measure.note}
                </span>
                {measure.name}
                <span id={styles.dog}>
                  {measure.note}
                </span>
              </Listbox.Button>
            </>
          )}

          {open && (
            <Listbox.Options className={styles.listyBoy} as="div">
              {measureList.map((m) => (
                <Listbox.Option
                  key={m.divisor}
                  value={m}
                  as="div"
                  className={styles.clickMe}
                >
                  {m.name} {m.note ? m.note : ""}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          )}
        </>
      )}
    </Listbox>
  );
}

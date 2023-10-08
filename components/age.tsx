import { Listbox } from "@headlessui/react";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Age() {
  const measureList = [
    { divby: 1000, name: "seconds", fixed: 2 },
    { divby: 60000, name: "minutes", fixed: 3 },
    { divby: 3600000, name: "hours", fixed: 5 },
    { divby: 86400000, name: "days", fixed: 6 },
    { divby: 31556952000, name: "years", fixed: 9 },
    { divby: 315360000000, name: "decades", fixed: 10 },
    { divby: 3155760000000, name: "centuries", fixed: 11 },
    { divby: 31556952000000, name: "millennia", fixed: 12 },
    { divby: 4508136000, name: "dog years", fixed: 8 },
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
      setAge(((currentTime - birth) / measure.divby).toFixed(measure.fixed));
    }, 10);
    return () => clearInterval(interval);
  });
  return (
    <>
      <h1>
        Axel is {age}{" "}
        <Listbox value={measure} onChange={updateMeasure} as="div">
          <Listbox.Button as="a">
            <a className={styles.ageBtn}>{measure.name}&#9662;</a>
            old &#128128;
          </Listbox.Button>
          <Listbox.Options className="flex flex-column " as="div">
            {measureList.map((m) => (
              <Listbox.Option
                key={m.divby}
                value={m}
                as="div"
                className={(measure.name === m.name
                  ? styles.orange
                  : styles.white,
                  styles.clickMe)}
              >
                {m.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
        {" "}
      </h1>
    </>
  );
}

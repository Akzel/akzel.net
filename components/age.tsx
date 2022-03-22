import { Fragment, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { Listbox } from "@headlessui/react";

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
  ];
  const date: number = Date.now();
  const birth: number = 880710600000;
  const [measure, setMeasure] = useState(measureList[0]);
  const [currentTime, setCurrentTime] = useState(
    date ? new Date(date).getTime() : Date.now()
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
        <Listbox value={measure} onChange={setMeasure} as="a">
          <Listbox.Button as="a">
            <a className={styles.red}>{measure.name}</a>&#9662; old &#128128;
          </Listbox.Button>
          <Listbox.Options className="flex flex-column ">
            {measureList.map((m) => (
              <Listbox.Option
                key={m.divby}
                value={m}
                as="div"
                className={measure.name === m.name ? styles.red : styles.white}
              >
                {m.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>{" "}
        {/* {measure.divby} */}
      </h1>
    </>
  );
}

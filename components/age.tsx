import { Fragment, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { Listbox } from "@headlessui/react";

export default function age() {
  const measureList = [
    { divby: 60000, name: "minutes", fixed: 3 },
    { divby: 3600000, name: "hours", fixed: 5 },
    { divby: 86400000, name: "days", fixed: 6 },
    { divby: 31556952000, name: "years", fixed: 9 },
  ];
  const date: number = Date.now();
  const birth: number = 880709400000;
  const [measure, setMeasure] = useState(measureList[0]);
  const [currentTime, setCurrentTime] = useState(
    date ? new Date(date).getTime() : Date.now()
  );
  const [age, setAge] = useState("0");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().getTime());
      setAge(((currentTime - birth) / measure.divby).toFixed(measure.fixed));
    }, 60);
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
              <Listbox.Option key={m.divby} value={m} as="div">
                {({ active, selected }) => (
                  <li
                    className={`${
                      active ? "bg-blue-500 text-white" : "bg-white text-black"
                    }`}
                  >
                    {selected}
                    {m.name}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>{" "}
        {/* {measure.divby} */}
      </h1>
    </>
  );
}

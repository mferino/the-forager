"use client";

import React from "react";
import styles from "./page.module.css";

import Highlighter from "@/components/highlighter";

export default function Home() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [text, setText] = React.useState("");
  const [data, setData] = React.useState({
    maxStreak: 0,
    matchStr: "",
  });

  React.useEffect(() => {
    const currentInputRef = inputRef.current;

    if (currentInputRef) {
      currentInputRef.focus();

      const handleBlur = () => {
        currentInputRef.focus();
      };

      currentInputRef.addEventListener("blur", handleBlur);

      return () => {
        currentInputRef.removeEventListener("blur", handleBlur);
      };
    }
  }, []);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const str = e.currentTarget.value;

    const domain = "http://localhost:3000";
    const apiRoute = "/api";
    const res = await fetch(`${domain}${apiRoute}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(str),
    });
    const resData = await res.json();
    setData(resData);
    setText(str);
  }

  return (
    <div className={styles.maxWidthWrapper}>
      <input onChange={handleChange} ref={inputRef} />
      <div className={styles.textWrapper}>
        <div
          style={{ marginBottom: text === "" ? "0rem" : "1.5rem" }}
          className={styles.highlighterWrapper}
        >
          <Highlighter text={text} search={data?.matchStr} />
        </div>
        <div>Longest even or odd streak: {data?.maxStreak}</div>
      </div>
    </div>
  );
}

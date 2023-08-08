"use client";

import React from "react";
import styles from "./page.module.css";

import Highlighter from "@/components/highlighter";

export default function Home() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    const currentInputRef = inputRef.current;

    if (currentInputRef) {
      currentInputRef.focus();

      const handleBlur = () => {
        currentInputRef.focus();
      }

      currentInputRef.addEventListener("blur", handleBlur);

      return () => {
        currentInputRef.removeEventListener("blur", handleBlur);
      }
    }
  }, [])

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const str = e.currentTarget.value;
    console.log(str, " :: str");
    // const res = await fetch("http://localhost:3000/api", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(str),
    // });
    // const maxStreak = await res.json();
    // console.log(maxStreak, " :: inputValues");
    // console.log(inputRef?.current?.value, " :: inputRef.current");
    setText(str)
  }

  return (
    <div className={styles.maxWidthWrapper}>
      <input onChange={handleChange} ref={inputRef} />
      <div className={styles.text}>{text}</div>
      <Highlighter text={"Is this working"} search={"working"} />
    </div>
  );
}

"use client"

import React from "react";
import styles from "./page.module.css";

export default function Home() {
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  }, [])

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const str = e.currentTarget.value;
    console.log(str, " :: str");
    const res = await fetch('localhost:3000/api', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(str)
    });
    const maxStreak = await res.json();
    console.log(maxStreak, " :: inputValues");
    setValue(str);
  }

  return (
    <div className={styles.maxWidthWrapper}>
      <div className={styles.header}>Hello</div>
      <input value={value} onChange={handleChange} ref={inputRef} />
    </div>
  );
}

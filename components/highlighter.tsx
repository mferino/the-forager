import React from "react";
import styles from "./highlighter.module.css";

interface HighlighterProps {
  text: string;
  search: string;
}

export default function Highlighter({ text, search }: HighlighterProps) {
  const parts = text.split(new RegExp(`(${search})`, "gi"));

  return (
    <span>
      {parts.map((part, i) =>
        part.toLowerCase() === search.toLowerCase() ? (
          <div key={i} className={styles.highlightedText}>
            {part}
          </div>
        ) : (
          part
        )
      )}
    </span>
  );
}

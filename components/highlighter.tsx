import React from "react";
import styles from "./highlighter.module.css";

interface HighlighterProps {
  text: string;
  search: string;
}

export default function Highlighter({ text, search }: HighlighterProps) {
  const index = text.toLowerCase().indexOf(search.toLowerCase());

  const before = text.slice(0, index);
  const matched = text.slice(index, index + search.length);
  const after = text.slice(index + search.length);

  return (
    <div>
      {before}
      <span className={styles.highlightedText}>{matched}</span>
      {after}
    </div>
  );
}

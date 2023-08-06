import React from "react";
import styles from "../styles/header.module.scss";
export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.mid}>Mid Section</div>
      <div className={styles.search}>Search Component</div>
    </div>
  );
}

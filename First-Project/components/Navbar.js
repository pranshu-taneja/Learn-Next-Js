// Remeber to use Capital letter for the name of the component

import React from "react";
import Link from "next/link";
import styles from "@/styles/navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <li className={styles.navbar}>
        <ul className={styles.navtext}>
          <Link href="/">Home</Link>
        </ul>
        <ul className={styles.navtext}>
          <Link href="/about">About</Link>
        </ul>
      </li>
    </div>
  );
}

export default Navbar;

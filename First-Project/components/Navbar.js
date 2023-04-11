// Remeber to use Capital letter for the name of the component

import React from "react";
import Link from "next/link";
import styles from "@/styles/navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <li className={styles.navbar}>
        <ul>
          <Link className={styles.navtext} href="/">
            Home
          </Link>
        </ul>
        <ul>
          <Link className={styles.navtext} href="/about">
            About
          </Link>
        </ul>
      </li>
    </div>
  );
}

export default Navbar;

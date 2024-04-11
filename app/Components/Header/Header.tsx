"use client";
import styles from "./page.module.css";
import Link from "next/link";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Nav />
        <Link href="/">
          <img
            className={styles.header_logo}
            src="/logos/Logo TKD Light.png"
            alt="Logo du club"
          ></img>
        </Link>
      </header>
    </>
  );
};

export default Header;

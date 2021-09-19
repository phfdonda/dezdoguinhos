import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import patinha from "../public/pata.svg";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dez Doguinhos</title>
        <meta
          name="Dez Doguinhos precisam de um lar"
          content="Site para encontrar adotantes e doadores"
        />
        <link rel="icon" href="/pata.ico" />
      </Head>

      <header>
        <Image
          className="patinha"
          height={50}
          width={50}
          src={patinha}
          alt="Patinha"
        ></Image>
        <h1>Dez Doguinhos</h1>
      </header>

      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;

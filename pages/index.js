import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState([""]);
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/").then((response) => {
      setData(response.data.results);
      console.log(data);
    });
  }, [data]);

  return (
    <div>
      <div className="container">
        <img src="/logo.png"></img>
      </div>
      <div className="menu">
        <ul className="list">
          <li className={styles.nav__item}>About</li>
          <li className={styles.nav__item}>Docs</li>
        </ul>
      </div>

      <div className="title">
        <h1> The Rick and Morty </h1>
      </div>

      <ul className="grid">
        {data.map((result) => {
            const {id , name, image}= result;
               return   (
                <li key={id}>
                    
                <h1>{result.name}</h1>
              </li>
               )
         
                })}
      </ul>
    </div>
  );
}

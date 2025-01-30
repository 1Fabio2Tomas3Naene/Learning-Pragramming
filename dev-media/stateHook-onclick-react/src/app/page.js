'use client';
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [valorInicial, setValorInicial] = useState(0)
  function NumeroAleatorio(){
    const novoValor = Math.floor(Math.random() * (100 - 1) +1);
    setValorInicial(novoValor);
  }
  return (
   <main className={styles.containerPrincipal}>
     <article className={styles.containerBotao}>
      <h1>Numero Aleatorio</h1>
      <h2>{valorInicial}</h2>
      <p>Click no botão abaixo para gerar um número aleatório</p>
      <button onClick={NumeroAleatorio} className={styles.botao}>Gerar numero</button>
    </article>
   </main>
  );
}

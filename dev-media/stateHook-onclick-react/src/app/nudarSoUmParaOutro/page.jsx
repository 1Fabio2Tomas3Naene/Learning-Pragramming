'use client';
import { useState } from "react";
import estilos from './page.module.css';
import ArrayAlvos from "./alvos";

export default function DoisItensMudar(){
   const [primeiroAlvo, setPrimeiroAlvo] = useState('dirigir um estudo biblico');
   function AlvosAleatorios(){
    const Alvos = ArrayAlvos[Math.floor(Math.random() * ArrayAlvos.length)];
    setPrimeiroAlvo(Alvos);
   };
    return(
        <main className={estilos.containerPrincipal}>
            <article className={estilos.containerAlvos}>
                <h1 className={estilos.alvo}>{primeiroAlvo}</h1>
                <button  onClick={AlvosAleatorios} className={estilos.botao}>Trocar alvo</button>
            </article>
        </main>
    )
}
'use client';
import { useState } from "react";
import estilos from './page.module.css';

export default function AbrirFechar(){
    const [condicao, setCondicao] = useState(false);
    const [abrir, setAbrir] = useState('Abrir');
    function alterar(){
        if(condicao === true){
            setCondicao(false);
            setAbrir('Abrir')
        }
        else{
            setCondicao(true);
            setAbrir('Fechar');
        };
    };
    return(
        <main className={estilos.containerPrincipal}>
        <article className={estilos.containerBotao}>
             <button onClick={alterar} className={estilos.botao}>{abrir}</button>
        </article>
        </main>
    )
};
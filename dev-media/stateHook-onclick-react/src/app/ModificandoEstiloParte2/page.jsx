'use client';
import { useState } from "react";
import estilos from './page.module.css';

export default function ModificandoEstilos(){
    const Vermelho = estilos.bgVermelho;
    const Azul = estilos.bgAzul

    const [alterarCor, setAlterarCor] = useState(true);
   
    function MudarCorFundo(){
       setAlterarCor(!alterarCor);
    };
    return(
        <main className={estilos.containerPrincipal}>
            <article className={estilos.containerBg}>
                <h1 className={estilos.containerBgTitulo}>Alterando estilo do elemento</h1>
                <div className={alterarCor ? Vermelho : Azul}></div>
                <p className={estilos.containerBgParagrafo}>Clique no botão para alterar o estilo do elemento acima.</p>
                <button onClick={MudarCorFundo} className={estilos.containerBgBotao}>Alterar cor</button>
            </article>
        </main>
    )
}
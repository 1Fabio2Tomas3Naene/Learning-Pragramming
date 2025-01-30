'use client';
import { useState } from "react";
import estilos from './page.module.css';

export default function ModificandoEstilos(){
    const [alterarCor, setAlterarCor] = useState(false);
    const [bgInicial, setBgInicial] = useState(estilos.bgVermelho);
    function MudarCorFundo(){
        if(alterarCor === true){
            setAlterarCor(false);
            setBgInicial(estilos.bgVermelho)
        }
        else{
            setAlterarCor(true);
            setBgInicial(estilos.bgAzul)
        }
    };
    return(
        <main className={estilos.containerPrincipal}>
            <article className={estilos.containerBg}>
                <h1 className={estilos.containerBgTitulo}>Alterando estilo do elemento</h1>
                <div className={bgInicial}></div>
                <p className={estilos.containerBgParagrafo}>Clique no botão para alterar o estilo do elemento acima.</p>
                <button onClick={MudarCorFundo} className={estilos.containerBgBotao}>Alterar cor</button>
            </article>
        </main>
    )
}
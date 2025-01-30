'use client';
import { useState } from "react";
import Image from "next/image";
import Logo from './img/barbearia.png';
import estilos from './page.module.css';
import { FaRegMoon } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";


export default function BarbeariaDarkMode(){
    const [tema, setTema] = useState(false);
    function AlterarTema(){
        setTema(!tema);
    }

    return(
        <div className={tema ? estilos.darkMode : estilos.lightMode}>
        <header className={estilos.containerTopo}>
            <article className={estilos.containerTopoLarguraLimite}>
                <Image src={Logo} alt="Logo" title="Logo" className={estilos.containerTopoLarguraLimiteImagem}/>
                <button onClick={AlterarTema} className={estilos.containerTopoLarguraLimiteBotao}>{tema ? <span className={estilos.containerTopoLarguraLimiteModeTexto}><FiSun className={estilos.containerTopoLarguraLimiteIcone}/> light</span> : <span className={estilos.containerTopoLarguraLimiteModeTexto}><FaRegMoon className={estilos.containerTopoLarguraLimiteIcone}/> dark</span>}</button>
            </article>
        </header>
        <main className={estilos.containerPrincipal}>
            <section className={estilos.containerBanner}></section>
            <section className={estilos.containerInfo}>
                <article className={estilos.info}>
                <h1 className={estilos.containerInfoTitulo}>Bem-vindo a barbet shop</h1>
                <span className={estilos.containerInfoDestaque}>Nossa barbearia sempre oferece proficionais de qualidade e estamos prontos para lidar com as suas maiores expectatinas</span>
                <p className={estilos.containerInfoParadrafo}>Nossos servicos sao dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demostrou o talento de mestres barbeiros em varios concursos de estilos. Deixe nosso barbeiro ser o seu estilista pessoal e voce nunca ficara desapontado.</p>
                <p className={estilos.containerInfoAssinatura}>S. Kelly</p>
                </article>
            </section>
        </main>
        </div>
    )
}
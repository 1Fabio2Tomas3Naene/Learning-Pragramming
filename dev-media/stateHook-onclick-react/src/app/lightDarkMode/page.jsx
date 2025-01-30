'use client';
import { useState } from 'react';
import estilos from './page.module.css';
import { FaRegMoon } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";

export default function LightDarkMode(){
    const [alterarModePage, setAlterarModePage] = useState(false);
    function TrocarModePage(){
        setAlterarModePage(!alterarModePage);
    }
    return(
       <div className={alterarModePage ? estilos.darkMode : estilos.lightMode}>
        <header className={estilos.containerTopo}>
            <article className={estilos.containerDarkLightMode}>
            <h1 className={estilos.containerDarkLightModeTitulo}>Coffe Shop</h1>
            <button onClick={TrocarModePage} className={estilos.containerDarkLightModeBotao}>{alterarModePage ? <FiSun className={estilos.Mode}/> : <FaRegMoon className={estilos.Mode}/>}</button>
            </article>
        </header>
        <main className={estilos.containerPrincipal}>
            <section className={estilos.containerInfo}>
                <h2 className={estilos.containerInfoSubtitulo}>A melhor cafeteria do Brasil</h2>
                <p className={estilos.containerInfoParagrafo}>Venha conhecer a melhor cafeteria do Brasil! Localizada no coração de São Paulo, oferecemos cafés artesanais de alta qualidade e um ambiente acolhedor. Desfrute de nossas bebidas exclusivas e deliciosos acompanhamentos enquanto relaxa em um espaço único. Esperamos por você para uma experiência inesquecível!</p>
                <button className={estilos.containerInfoBotao}>Nossas Lojas</button>
            </section>
        </main>
       </div>
    )
}
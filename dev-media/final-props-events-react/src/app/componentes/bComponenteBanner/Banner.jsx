import React from "react";
import Image from "next/image";
import Banner from '../../../../public/img/banner.jpg';
import estilos from './Banner.module.css';

export default function ComponenteBanner(){
    return(
        <section className={estilos.container_banner}>
            <div className={estilos.card}>
                <Image src={Banner} alt="Equipe" title="Equipe" className={estilos.img_banner}/>
            </div>
            <div className={estilos.card}>
                <span className={estilos.slogan}>BRANDING / UI / UX / TECNOLOGIA</span>
                <h2 className={estilos.subtitulo}>Agência de Branding <br /> <span className={estilos.destaque}>e design digital </span></h2>
            </div>
        </section>
    )
}
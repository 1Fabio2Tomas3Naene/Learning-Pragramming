import React from 'react';
import estilos from './Topo.module.css';
import Image from 'next/image';
import Logo from '../../../../public/img/logo.png';
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";


export default function ComponenteTopo(props){
    return(
        <div className={props.estado ? estilos.dark_mode : estilos.light_mode}>
            <header className={estilos.comtainerTopo}>
            <Image src={Logo} alt='Logotipo' title="Logotipo" className={estilos.imag_logo}/>
            <button onClick={props.funcao_onclick} className={estilos.Botao}>{props.estado ? <span className={estilos.texto_label}><LuSun className={estilos.Icone}/> light mode</span> : <span className={estilos.texto_label}> <FaMoon className={estilos.Icone}/> dark mode</span>}</button>
        </header>
        </div>
    )
};
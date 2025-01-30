'use client';
import { useState } from "react";
import estilos from './page.module.css';
import MenuSanduicheMenu from "../menuSanduicheMenu/page";
import { RiCloseLargeFill } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";


export default function MenuSanduicheHome(){
    const [menuAbrirFechar, setMenuAbrirFechar] = useState(false);
    function Menu(){
        setMenuAbrirFechar(!menuAbrirFechar);
    };
    return(
      <main className={estilos.containerPrincipal}>
         <header className={estilos.containerHeader}>
            <button onClick={Menu} className={estilos.containerHeaderBotaoMenu}>{menuAbrirFechar ? <RiCloseLargeFill /> : <CiMenuBurger />}</button>
        </header>
        {menuAbrirFechar && (<MenuSanduicheMenu />)}
      </main>
    )
}
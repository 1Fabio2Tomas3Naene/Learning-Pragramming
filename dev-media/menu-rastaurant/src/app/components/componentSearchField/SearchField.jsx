import React from "react";
import Image from "next/image";
import Lupa from "../../../../public/images/lupa.png";
import styles from "./SearchField.module.css";

export default function ComponentSearchField(props){
    return(
        <div className={styles.search}>
            <div className={styles.search_field}>
                 <Image src={Lupa} alt="Lupa" className={styles.img}/>
                 <input 
                 value={props.textoDigitadoState}
                 onChange={(Event) => props.funcaoFiltarPorTextoDiogitado(Event.target.value)}
                 type="text" placeholder="Pesquise aqui um dos pratos do nosso cardápio" className={styles.input}/>
                 </div>
        </div>
    )
}
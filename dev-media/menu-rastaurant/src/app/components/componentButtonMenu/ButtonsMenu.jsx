import React from "react";
import Image from "next/image";
import styles from './ButtonsMenu.module.css';
import Entradas from '../../../../public/images/entrada.png';
import Massas from '../../../../public/images/massa.png';
import Carnes  from '../../../../public/images/carne.png';
import Bedidas from '../../../../public/images/bebidas.png';
import Saladas from '../../../../public/images/salada.png';
import Sobremesas from '../../../../public/images/sobremesa.png';

export default function ComponentButtonMenu(props){
    return(
        <div className={styles.buttons_menu}>
            <div className={styles.container_buttons}>
                <button onClick={()=> props.funcaoFiltarCategoria('Entradas')} className={props.botaoClicadoAcenter === 'Entradas' ? styles.botaoAceso : styles.botaoDesligadio } > <Image src={Entradas} alt='Entradas' title='Entradas' className={styles.img}/> <span className={styles.name}>Entradas</span></button>
                <button onClick={()=> props.funcaoFiltarCategoria('Massas')} className={props.botaoClicadoAcenter === 'Massas' ? styles.botaoAceso : styles.botaoDesligadio}><Image src={Massas} alt='Massas' title='Massas' className={styles.img}/> <span className={styles.name}>Massas</span></button>
                <button onClick={()=> props.funcaoFiltarCategoria('Carnes')} className={props.botaoClicadoAcenter === 'Carnes' ? styles.botaoAceso : styles.botaoDesligadio }><Image src={Carnes} alt='Carnes' title='Carnes' className={styles.img}/> <span className={styles.name}>Carnes</span></button>
                <button onClick={()=> props.funcaoFiltarCategoria('Bebidas')} className={props.botaoClicadoAcenter === 'Bebidas' ? styles.botaoAceso : styles.botaoDesligadio }><Image src={Bedidas} alt='Bedidas' title='Bedidas' className={styles.img}/> <span className={styles.name}>Bedidas</span></button>
                <button onClick={()=> props.funcaoFiltarCategoria('Saladas')} className={props.botaoClicadoAcenter === 'Saladas' ? styles.botaoAceso : styles.botaoDesligadio }><Image src={Saladas} alt='Saladas' title='Saladas' className={styles.img}/> <span className={styles.name}>Saladas</span></button>
                <button onClick={()=> props.funcaoFiltarCategoria('Sobremesas')} className={props.botaoClicadoAcenter === 'Sobremesas' ? styles.botaoAceso : styles.botaoDesligadio }><Image src={Sobremesas} alt='Sobremesas' title='Sobremesas' className={styles.img}/> <span className={styles.name}>Sobremesas</span></button>
            </div>
        </div>
    )
}
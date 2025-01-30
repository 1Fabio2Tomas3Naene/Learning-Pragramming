import React from "react";
import Image from "next/image";
import styles from "./Cards.module.css";

export default function CardComponent(props){
    return(
            <div className={styles.card}>
                <div className={styles.container_img}>
                    <Image src={props.imagem} alt={props.nome} title={props.nome} className={styles.img}/>
                </div>
                <div className={styles.container_conteudo}>
                    <h3 className={styles.nome}>{props.nome}</h3>
                    <small className={styles.categoria}>{props.categoria}</small>
                    <p className={styles.descricao}>{props.descricao}</p>
                    <span className={styles.preco}>R$ {props.preco}</span>
                </div>
            </div>
    )
}
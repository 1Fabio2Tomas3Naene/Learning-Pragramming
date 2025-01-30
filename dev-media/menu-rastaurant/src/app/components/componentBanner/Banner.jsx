import React from "react";
import styles from './Banner.module.css';

export default function ComponentBanner(){
    return(
        <div className={styles.banner}>
            <header className={styles.container_header}>
            <div className={styles.content}>
                <h1 className={styles.title}>RESTAURANT</h1>
                <p className={styles.paragrapho}>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p>
            </div>
        </header>
        </div>
    )
}
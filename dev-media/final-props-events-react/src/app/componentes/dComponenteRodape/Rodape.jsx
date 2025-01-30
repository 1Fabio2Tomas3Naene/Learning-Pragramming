import React from 'react';
import estilos from './Rodape.module.css';

export default function ComponenteRodate(props){
    return(
        <div className={props.estado ? estilos.dark_mode : estilos.light_mode}>
            <footer className={estilos.container_rodape}>
            <p className={estilos.paragrafo}>Copyright 2022 <span className={estilos.destaque}>Fabio Tomas Naene</span></p>
        </footer>
        </div>
    )
};
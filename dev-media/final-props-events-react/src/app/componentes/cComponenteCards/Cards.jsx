import React from "react";
import estilos from './Cards.module.css'

export default  function ComponenteCard(props){
    return(
        <div className={props.estado ? estilos.dark_mode : estilos.light_mode}>
            <div className={estilos.card}>
                <span className={estilos.card_data}>{props.data}</span>
                <h3 className={estilos.card_titulo}>{props.titulo}</h3>
                <span className={estilos.card_empresa}>{props.empresa}</span>
                <p className={estilos.card_paragrafo}>{props.paragrafo}</p>
            </div>
            </div>
    )
}
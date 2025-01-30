import React from "react";
import estilos from './Experiencias.module.css';

export default function ComponenteExperiencias(props){
    return(
            <div className={props.estado ? estilos.dark_mode : estilos.light_mode}>
                <div className={estilos.container_experirncias_apresentacao}>
                <h3 className={estilos.container_experirncias_apresentacao_titulo}>Experiências De Trabalho</h3>
                <span className={estilos.container_experirncias_apresentacao_larja}></span>
                <p className={estilos.container_experirncias_apresentacao_paragrafo}>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de Sites e Marketing Digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.</p>
            </div>
            </div>
    )
}
import Image from "next/image";
import estilos from './Informacoe.module.css';

export default function ComponenteInformacoes(props){
    return(
        <div className={estilos.Card}>
            <h3 className={estilos.subtitulo}>Informacoes</h3>
            <div className={estilos.informacao}>
                {props.children}
            </div>
        </div>
    )
}

import Image from "next/image";
import estilos from './Clientes.module.css';

export default function ComponentesClientesFalando(props){
    return(
        <>
        <div className={estilos.Card}>
                <Image src={props.Imagem} alt={props.Nome} title={props.Nome} className={estilos.Img}/>
                <span className={estilos.nome}>{props.Nome}</span>
                <p className={estilos.comentarios}>{props.Comentario}</p>
            </div>
        </>
    )
}
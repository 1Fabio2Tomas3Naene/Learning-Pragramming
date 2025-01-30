import estilos from '../page.module.css';
import Image from 'next/image';
export default function CardProduto(props) {
  return (
      <div className={estilos.Card}>
        <Image src ={props.imagem} alt={props.nome} title={props.nome} className={estilos.img}/>
        <h3>{props.nome}</h3>
        <p>R$ {props.preco}</p>
        <small>{props.categoria}</small>
        <button>Adicionar</button>
    </div>
  );
}
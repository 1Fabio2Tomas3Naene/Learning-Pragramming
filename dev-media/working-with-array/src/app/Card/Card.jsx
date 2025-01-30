import estilos from './Card.module.css'
import Image from 'next/image';
import xbox from '../../../public/img/xbox-logo.png';
import playstation from '../../../public/img/playstation-logo.jpg';
import nintendo from '../../../public/img/nintendo-logo.jpg';

export default function Card(props){
    return(
        <div className={estilos.cards}>
            <Image src={props.plataforma === 'xbox' ? xbox : props.plataforma === 'playstation' ? playstation : nintendo} alt={props.nome} title={props.nome} className={estilos.img}/>
            <div className={estilos.texto}>{props.nome}</div>
        </div>
    )
};
import estilos from './Card.module.css';
import Image from 'next/image';

import { PiPlantBold } from "react-icons/pi";
import { MdAir } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { FaWater } from "react-icons/fa";

export default function SignosCard({signo, imagem, inicio, fim, elemento}){
    return(
        <div  className={elemento === "agua" ?
            estilos.signoAgua :
            elemento === "fogo" ?
            estilos.signoFogo :
            elemento === "terra" ?
            estilos.signoTerra :
            elemento === "ar" &&
            estilos.signoAr
        }>
            <div className={estilos.Card}>
            <div className={estilos.tipoSigno}>
            <h3 className={estilos.Titulo}>{signo}</h3>
            {
            elemento === "agua" ? (<FaWater className={estilos.icon}/>)
                : elemento === "fogo" ? ( <FaFire className={estilos.icon}/> )
                : elemento === "terra" ? ( <PiPlantBold className={estilos.icon}/> )
                : elemento === "ar" && ( <MdAir className={estilos.icon}/>)
            }
            </div>
            <div className={estilos.divImg}>
            <Image src={imagem} alt={signo} title={signo} className={estilos.img}/>
            </div>
            <span className={estilos.data}>{inicio} - {fim}</span>
        </div>
            </div>
    )
}
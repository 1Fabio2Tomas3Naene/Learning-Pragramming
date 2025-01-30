import Link from "next/link";
import estilos from './BotaoVoltar.module.css'

export default function BotaoVoltar(){
    return(
        <Link href='/' target='_self' className={estilos.LinkVoltar}>Voltar</Link>
    )
}
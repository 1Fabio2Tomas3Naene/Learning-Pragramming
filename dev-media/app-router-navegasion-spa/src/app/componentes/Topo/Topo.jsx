import Link from "next/link";
import estilos from './Topo.module.css';


export default function Topo(){
    return(
        <header className={estilos.containerHeader}>
           <div className={estilos.containerTopo}>
           <h1 className={estilos.containerTopoTitulo}>Navegação React</h1>
            <nav className={estilos.containerTopoNavegacao}>
                <Link href='/frontEnd' target="_self" className={estilos.containerTopoNavegacaoLink1}>Front-end</Link>
                <Link href='/backEnd' target="_self" className={estilos.containerTopoNavegacaoLink2}>Back-end</Link>
                <Link href='/mobile' target="_self" className={estilos.containerTopoNavegacaoLink3}>Mobile</Link>
            </nav>
           </div>
        </header>
    )
}
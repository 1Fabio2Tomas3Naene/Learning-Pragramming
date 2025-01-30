import Image from "next/image";
import Link from "next/link";
import Imagem1 from '@/pages/ImgOtica/imagem1.png';
import estilos from './Topo.module.css';


export default function AcomponenteTopo(){
    return(
        <header className={estilos.containerHeader}>
           <div className={estilos.containerTopo}>
           <Image src={Imagem1} alt="Logotico Otica" title="Logotipo Otica" className={estilos.containerTopoImagem}/>

           <nav className={estilos.containerTopoNavegacao}>
            <ul className={estilos.containerTopoNavegacaoLista}>
                <li><Link href="#produtos">PRODUTOS</Link></li>
                <li><Link href="#sobre">SOBRE</Link></li>
                <li><Link href="#contato">CONTATO</Link></li>
            </ul>
           </nav>

           </div>
        </header>
    )
};
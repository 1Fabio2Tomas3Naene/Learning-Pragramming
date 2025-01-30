import Image from "next/image";
import Link from "next/link";
import Estilos from './Topo.module.css';
import Logo from '../img/logo.png';


export default function Topo(){
    return(
        <header className={Estilos.ContainerTopo}>
            <div className={Estilos.ContainerTopoLarguraLimites}>
            <Image src={Logo} alt="Logotipo" title="Logotipo" className={Estilos.ContainerTopoLogo}/>
            <nav className={Estilos.ContainerTopoNav}>
                <Link href='/' className={Estilos.ContainerTopoNavLink}>HOME</Link>
                <Link href='/bComponenteSabores' className={Estilos.ContainerTopoNavLink}>SABORES</Link>
                <Link href='/cComponenteSobre' className={Estilos.ContainerTopoNavLink}>SOBRE</Link>
            </nav>
            </div>
        </header>
    )
}

import Image from "next/image";
import Logo from '../img/logo.png';
import Estilos from './Rodape.module.css';

export default function ComponenteRodape(){
    return(
        <footer className={Estilos.ContainerRodape}>
            <div className={Estilos.SecaoCards}>
            <Image src={Logo} alt="Logotipo" title="Logotipo" className={Estilos.ContainerRodapeLogo}/>
            <div className={Estilos.ContainerRodapeCard}>
                <h3 className={Estilos.ContainerRodapeCardSubtitulo}>ENDEREÇO</h3>
                <p className={Estilos.ContainerRodapeCardParagrafo}>Av. Bernardino de Campos, 98</p>
                <p className={Estilos.ContainerRodapeCardParagrafo}>São Paulo, SP 12345-678</p>
            </div>
            <div className={Estilos.ContainerRodapeCard}>
                <h3 className={Estilos.ContainerRodapeCardSubtitulo}>CONTATO</h3>
                <p className={Estilos.ContainerRodapeCardParagrafo}>info@meusite.com</p>
                <p className={Estilos.ContainerRodapeCardParagrafo}>Tel: (11) 3456-7890</p>
            </div>
            <div className={Estilos.ContainerRodapeCard}>
                <h3 className={Estilos.ContainerRodapeCardSubtitulo}>HORÁRIOS</h3>
                <p className={Estilos.ContainerRodapeCardParagrafo}>ABERTO TODOS OS DIAS</p>
                <p className={Estilos.ContainerRodapeCardParagrafo}>10:00 - 22:00</p>
            </div>
            </div>
            <p className={Estilos.ContainerRodapeCardParagrafo}>Gelateria. Orgulhosamente desenvolvido por <span className={Estilos.ContainerRodapeDestaque}>Fábio Tomás Naene</span></p>
        </footer>
    )
}
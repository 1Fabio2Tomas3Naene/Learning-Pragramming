import Link from "next/link";
import estilos from './mobile.module.css';
import BotaoVoltar from "../componentes/BotaoVoltar/BotaoVoltar";

export default function mobile(){
    return(
        <div className={estilos.containerMain}>
            <div className={estilos.containerTexto}>
                <h3 className={estilos.containerTextoSubtitulo}>React Native</h3>
                <p className={estilos.containerTextoParagrafo}>React Native é um framework de desenvolvimento de aplicativos móveis que permite a criação de aplicativos nativos usando JavaScript e React. Ele permite o desenvolvimento de aplicativos para iOS e Android usando uma base de código compartilhada, proporcionando uma experiência de desenvolvimento eficiente e rápida. Com React Native, os desenvolvedores podem criar aplicativos móveis robustos e de alto desempenho de forma simplificada.</p>
                   <Link href="https://www.devmedia.com.br/carreira-programador/?slug=mobile" target="_blank" className={estilos.Link}> Guia de Back-end</Link>
                   <BotaoVoltar/>
            </div>
        </div>
    )
}
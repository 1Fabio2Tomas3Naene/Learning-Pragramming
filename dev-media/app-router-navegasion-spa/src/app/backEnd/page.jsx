import estilos from './backEnd.module.css';
import Link from 'next/link';
import BotaoVoltar from '../componentes/BotaoVoltar/BotaoVoltar';

export default function backEnd(){
    return(
        <div className={estilos.containerMain}>
            <div className={estilos.containerTexto}>
                <h3 className={estilos.containerTextoSubtitulo}>Node.JS</h3>
                <p className={estilos.containerTextoParagrafo}>Node.js é uma plataforma de desenvolvimento que permite a execução de código JavaScript no lado do servidor. Baseado no motor V8 do Google Chrome, o Node.js é conhecido por sua eficiência e escalabilidade. Ele é amplamente utilizado para construir aplicativos web, APIs e serviços em tempo real. Com uma vasta gama de bibliotecas e um ecossistema robusto, o Node.js é uma escolha popular para desenvolvedores que buscam criar aplicativos rápidos e escaláveis.</p>
                   <Link href="https://www.devmedia.com.br/carreira-programador/?slug=back-end" target="_blank" className={estilos.Link}> Guia de Back-end</Link>
                   <BotaoVoltar/>
            </div>
        </div>
    )
}
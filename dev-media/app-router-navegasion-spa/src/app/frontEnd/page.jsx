import estilos from './frontEnd.module.css';
import Link from 'next/link';
import BotaoVoltar from '../componentes/BotaoVoltar/BotaoVoltar';

export default function(){
    return(
        <div className={estilos.containerPrimcipal}>
            <div className={estilos.containerContaudo}>
                <h2 className={estilos.containerContaudoSubtitulo}>React.JS</h2>
                <p className={estilos.containerContaudoParagrafo}> O React.js é uma biblioteca JavaScript utilizada para construir interfaces de usuário interativas e eficientes. Ele é amplamente adotado devido à sua abordagem baseada em componentes e à facilidade de criar aplicativos escaláveis. O React permite o desenvolvimento de Single Page Applications (SPAs) de forma eficiente e flexível.</p>
                   <Link href="https://www.devmedia.com.br/carreira-programador/?slug=front-end" target="_blank" className={estilos.Link}> Guia de frot-end</Link>
                   <BotaoVoltar/>
                    </div>
                    </div>
    );
}
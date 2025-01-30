import Image from "next/image";
import estilos from './Contato.module.css';
import Imagem9 from '@/pages/ImgOtica/imagem9.png';
import Imagem10 from '@/pages/ImgOtica/imagem10.png';
import Imagem11 from '@/pages/ImgOtica/imagem11.png';
import Imagem12 from '@/pages/ImgOtica/imagem12.png';
import Imagem13 from '@/pages/ImgOtica/imagem13.png';
import Imagem14 from '@/pages/ImgOtica/imagem14.png';

export default function EcomponenteContato(){
    return(
        <section id="contato" className={estilos.containerPrincipal}>
            <div className={estilos.containerRedes}>
            <div className={estilos.containerFaleConosco}>
                <h6 className={estilos.containerFaleConoscoSubtitulo}>Fale conosco</h6>
                <p className={estilos.containerFaleConoscoParagrafo}>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                </div>
                <div className={estilos.containerRedesDivisao}>
                    <div className={estilos.secaoContatoContatos}>
                            <h3 className={estilos.secaoContatoSubtitulo}>Contato</h3>
                            <p className={estilos.secaoContatoParagrafo}><Image src={Imagem9} alt="" title="" className={estilos.secaoContatoImagem}/>Nova Iguaçu, RJ</p>
                            <p className={estilos.secaoContatoParagrafo}><Image src={Imagem10} alt="" title="" className={estilos.secaoContatoImagem}/>(21) 9999-9999</p>
                            <p className={estilos.secaoContatoParagrafo}><Image src={Imagem11} alt="" title="" className={estilos.secaoContatoImagem}/>contato@oticavida.com</p>
                        </div>
                        <div className={estilos.secaoContatoContatos}>
                            <h3 className={estilos.secaoContatoSubtitulo}>Nossas Redes Sociais</h3>
                            <p className={estilos.secaoContatoParagrafo}><Image src={Imagem12} alt="" title="" className={estilos.secaoContatoImagem}/>/OticaVida</p>
                            <p className={estilos.secaoContatoParagrafo}><Image src={Imagem13} alt="" title="" className={estilos.secaoContatoImagem}/>@oticavidarj</p>
                            <p className={estilos.secaoContatoParagrafo}><Image src={Imagem14} alt="" title="" className={estilos.secaoContatoImagem}/>@oticavidarj</p>
                        </div>
                </div>
            </div>
        </section>
    )
}




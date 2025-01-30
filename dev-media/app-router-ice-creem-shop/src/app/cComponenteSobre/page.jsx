import Image from "next/image";
import Estilos from './Sobre.module.css';
import Imagem1 from '../img/sobre-image.jpg';
import Imagem2 from '../img/sorveteria.jpg';


export default function ComponenteSobre(){
    return(
        <>
        <section className={Estilos.SecaoBanner}>
            <h3 className={Estilos.SecaoBannerSubtitulo}>A GELATERIA</h3>
        </section>
        <section className={Estilos.SecaoSobre}>
            <div className={Estilos.SecaoSobreInfo}>
                <h3 className={Estilos.SecaoSobreInfoSubtitulo}>Sobre Nós</h3>
                <span className={Estilos.SecaoSobreInfoDestaque}>Nós simplesmente amamos sorvete!</span>
                <p className={Estilos.SecaoSobreInfoParagrafo}>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
                <p className={Estilos.SecaoSobreInfoParagrafo}>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
            </div>
            <div className={Estilos.SecaoImagens}>
                <Image src={Imagem1} alt="Sobre nos" title="Sobre nos" className={Estilos.SecaoImagensImagem}/>
                <Image src={Imagem2} alt="sorveteria" title="sorveteria" className={Estilos.SecaoImagensImagem}/>
            </div>
        </section>
        </>
    )
}
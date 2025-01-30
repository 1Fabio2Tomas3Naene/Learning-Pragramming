import Estilos from './Sabores.module.css';
import Image from 'next/image';
import Imagem1 from '../img/sabor-oreo.jpg';
import Imagem2 from '../img/sabor-pistache.png';
import Imagem3 from '../img/sabor-cookies-avela.png';
import Imagem4 from '../img/sorbet-kiwi.png';
import Imagem5 from '../img/sorbet-morango.png';
import Imagem6 from '../img/sorbet-limao.png';


export default function Sabores(){
    return(
       <>
        <section className={Estilos.SecaoBanner}>
            <h3 className={Estilos.SecaoBannerSubtitulo}>NOSSOS SABORES</h3>
        </section>
        <section className={Estilos.SecaoSabores}>
            <h3 className={Estilos.SecaoSaboresSubtitulo}>SABORES DE SORVETE</h3>
            <div className={Estilos.ContainerSabores}>
            <div className={Estilos.Card}>
                <Image src={Imagem1} alt='Sorvete de Oreo' title='Sorvete de Oreo' className={Estilos.CardImagem}/>
                <span className={Estilos.CardDescricao}>Sorvete de Oreo</span>
                <p className={Estilos.CardParagrafo}>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
            </div>
            <div className={Estilos.Card}>
                <Image src={Imagem2} alt='Sorvete Pistache' title='Sorvete Pistache' className={Estilos.CardImagem}/>
                <span className={Estilos.CardDescricao}>Sorvete Pistache</span>
                <p className={Estilos.CardParagrafo}>Cremoso sorvete sabor pistache com pedacinhos de sement</p>
            </div>
            <div className={Estilos.Card}>
                <Image src={Imagem3} alt='Sorvete Cookies & Avelã' title='Sorvete Cookies & Avelã' className={Estilos.CardImagem}/>
                <span className={Estilos.CardDescricao}>Sorvete Cookies & Avelã</span>
                <p className={Estilos.CardParagrafo}>O nosso melhor sorvete. Você vai adorar o sabor.</p>
            </div>
            <div className={Estilos.Card}>
                <Image src={Imagem4} alt='Sorvete de Kiwi' title='Sorvete de Kiwi' className={Estilos.CardImagem}/>
                <span className={Estilos.CardDescricao}>Sorvete de Kiwi</span>
                <p className={Estilos.CardParagrafo}>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
            </div>
            <div className={Estilos.Card}>
                <Image src={Imagem5} alt='Sorvete de Morango' title='Sorvete de Morango' className={Estilos.CardImagem}/>
                <span className={Estilos.CardDescricao}>Sorvete de Morango</span>
                <p className={Estilos.CardParagrafo}>Sorvete de morango gourmet. Tradicional e saboroso.</p>
            </div>
            <div className={Estilos.Card}>
                <Image src={Imagem6} alt='Sorvete de Limão Siciliano' title='Sorvete de Limão Siciliano' className={Estilos.CardImagem}/>
                <span className={Estilos.CardDescricao}>Sorvete de Limão Siciliano</span>
                <p className={Estilos.CardParagrafo}>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
            </div>
            </div>
        </section>
       </>
    )
}
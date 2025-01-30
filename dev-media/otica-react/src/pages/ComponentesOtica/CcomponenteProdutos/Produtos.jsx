import Image from "next/image";
import estilos from './Produtos.module.css';
import Imagem3 from '@/pages/ImgOtica/imagem3.png';
import Imagem4 from '@/pages/ImgOtica/imagem4.png';
import Imagem5 from '@/pages/ImgOtica/imagem5.png';
import Imagem6 from '@/pages/ImgOtica/imagem6.png';


export default function CcomponenteProdutos(){
    return(
        <section id="produtos" className={estilos.containerProdutos}>
            <div className={estilos.containerNossosProdutos}>
                <h2>Nossos produtos</h2>
                <p className={estilos.Paragrafo}>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p className={estilos.Paragrafo}>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            </div>
            <div className={estilos.containerCards}>
                <div className={estilos.containerCardsDivisao}>
                <div className={estilos.Card}>
                    <h3 className={estilos.containerCardsSubtitulo}>Óculos de grau</h3>
                    <Image src={Imagem3} alt="Óculos de grau" title="Óculos de grau" className={estilos.containerCardsImagem}/>
                    <span  className={estilos.containerCardsPreco}>R$ 500,00</span>
                </div>
                <div className={estilos.Card}>
                    <h3 className={estilos.containerCardsSubtitulo}>Óculos transition</h3>
                    <Image src={Imagem4} alt="Óculos transition" title="Óculos transition" className={estilos.containerCardsImagem}/>
                    <span className={estilos.containerCardsPreco}>R$ 750,00</span>
                </div>
                </div>
               <div className={estilos.containerCardsDivisao}>
                <div className={estilos.Card}>
                    <h3 className={estilos.containerCardsSubtitulo}>Óculos de sol</h3>
                    <Image src={Imagem5} alt="Óculos de sol" title="Óculos de sol" className={estilos.containerCardsImagem}/>
                    <span className={estilos.containerCardsPreco}>R$ 700,00</span>
                </div>
                <div className={estilos.Card}>
                    <h3 className={estilos.containerCardsSubtitulo}>Óculos infantil</h3>
                    <Image src={Imagem6} alt="Óculos infantil" title="Óculos infantil" className={estilos.containerCardsImagem}/>
                    <span className={estilos.containerCardsPreco}>R$ 500,00</span>
                </div>
                </div>
            </div>
            <div className={estilos.containerLista}>
                <p className={estilos.ParagrafoLista}>Todos os nossos produtos incluem:</p>
               
                <div className={estilos.containerUl}>
                <ul className={estilos.Lista}>
                    <li className={estilos.containerListaLi}>Garantia de 1 ano</li>
                    <li className={estilos.containerListaLi}>Manutenção preventiva</li>
                    <li className={estilos.containerListaLi}>Descontos especiais na compra da segunda unidade</li>
                    <li className={estilos.containerListaLi}>Flexibilidade de pagamento</li>
                </ul>
                </div>
            </div>
            </section>
    )
}
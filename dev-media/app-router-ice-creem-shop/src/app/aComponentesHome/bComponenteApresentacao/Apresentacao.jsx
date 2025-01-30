import Image from "next/image";
import estilos from './Apresentacao.module.css';
import imagem1 from '../../img/banner-home.png';
import imagem2 from '../../img/eventos-image.jpg';
import imagem3 from '../../img/sobre-image.jpg';

export default function ComponenteApresentacao(){
    return(
        <section className={estilos.containerApresentacao}>
            <div className={estilos.Card}>
                <Image src={imagem1} alt="Sabores" title="Sabores" className={estilos.cardImagem}/>
            </div>
            <div className={estilos.Card}>
                <h2 className={estilos.cardSubtitulo}>Nossos Sabores</h2>
                <span className={estilos.cardDescrica}>Novos e deliciosos!</span>
                <p className={estilos.cardParagrafo}>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
            </div>
            <div className={estilos.Card}>
                <h2 className={estilos.cardSubtitulo}>NOSSOS EVENTOS</h2>
                <span className={estilos.cardDescrica}>Delicias com sorvete!</span>
                <p className={estilos.cardParagrafo}>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
            </div>
            <div className={estilos.Card}>
                <Image src={imagem2} alt="Eventos" title="Eventos" className={estilos.cardImagem}/>
            </div>
            <div className={estilos.Card}>
                <Image src={imagem3 } alt="Sobre" title="Sobre" className={estilos.cardImagem}/>
            </div>
            <div className={estilos.Card}>
                <h2 className={estilos.cardSubtitulo}>SOBRE NÓS</h2>
                <span className={estilos.cardDescrica}>Alegria em cada casquinha!</span>
                <p className={estilos.cardParagrafo}>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade</p>
            </div>
        </section>
    )
}
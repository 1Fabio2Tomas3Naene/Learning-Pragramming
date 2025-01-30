import Image from 'next/image';
import estilos from './Sobre.module.css';
import Imagem7 from '@/pages/ImgOtica/imagem7.png';
import Imagem8 from '@/pages/ImgOtica/imagem8.png';

export default function DcomponenteSobre(){
	return(
		<section id='sobre' className={estilos.SecaoSobre}>
		<div className={estilos.containerSobre}>
		<div className={estilos.containerQuemSomas}>
		<h4 className={estilos.containerQuemSomasSubtitulo}>QUEM SOMOS NÓS?</h4>
		<p className={estilos.containerQuemSomasParagrafo}>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
		</div>
		<div className={estilos.containerCards}>
			<div className={estilos.containerCardsDIvisao}>
				<div className={estilos.Card}>
					<Image src={Imagem7} alt='loja' title='loja' className={estilos.containerCardsImagem}/>
				</div>
				<div className={estilos.Card}>
					<h5 className={estilos.containerCardsSubtitulo}>Nossas Filiais</h5>
					<p className={estilos.containerCardsParagrafo}>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
				</div>
			</div>
			<div className={estilos.containerCardsDIvisao}>
				<div className={estilos.Card}>
					<h5 className={estilos.containerCardsSubtitulo}>Atendimento flexível</h5>
					<p className={estilos.containerCardsParagrafo}>Nossa equipe possui é treinada para te atender</p>
				</div>
				<div className={estilos.Card}>
					<Image src={Imagem8} alt='atendimento' title='atendimento' className={estilos.containerCardsImagem}/>
				</div>
			</div>
		</div>
		</div>
		</section>
	)
}
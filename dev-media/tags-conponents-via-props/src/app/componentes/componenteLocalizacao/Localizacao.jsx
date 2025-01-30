import estilos from './Localizacao.module.css';

export default function ComponenteLocalizacao(){
    return(
        <section className={estilos.containerLocalizacao}>
            <h3 className={estilos.subtitulo}>Onde estamos <span className={estilos.destaque}>localizados?</span></h3>
            <address className={estilos.Paragrafo}>Av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de Janeiro - RJ. CEP: 22775-904</address>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29385.675969309108!2d-43.384802570898614!3d-22.979322563917293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2c2293fa63%3A0x539cb07246f0e38d!2sVia%20Parque%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1611596986401!5m2!1spt-BR!2sbr" width="100%"
          height="350" frameBorder="0"></iframe>
        </section>
    )
}
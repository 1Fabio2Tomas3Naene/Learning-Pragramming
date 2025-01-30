import estilos from './Banner.module.css';

export default function BcomponenteBanner(){
    return(
        <section className={estilos.containerBanner}>
        <div className={estilos.containerBannerIntroducao}>
        <p>Preços baixos em</p>
        <h1>Óculos de grau e de sol</h1>
        <p>Você só encontra aqui</p>
        </div>
        </section>
    )
}
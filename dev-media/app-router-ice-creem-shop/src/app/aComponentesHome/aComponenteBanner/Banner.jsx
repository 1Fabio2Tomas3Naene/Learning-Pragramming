import estilos from './Banner.module.css';

export default function componenteBanner(){
    return(
     <section className={estilos.containerBanner}>
            <h1 className={estilos.containerBannerTitulo}>SORVETE ARTESANAL</h1>
     </section>
    )
}
import estilos from './page.module.css';

export default function MenuSanduicheMenu(){
    return(
        <section className={estilos.containerMenu}>
            <ul className={estilos.containerLista}>
                <li className={estilos.containerListaInfo}>Opcao 1</li>
                <li className={estilos.containerListaInfo}>Opcao 2</li>
                <li className={estilos.containerListaInfo}>Opcao 3</li>
                <li className={estilos.containerListaInfo}>Opcao 4</li>
                <li className={estilos.containerListaInfo}>Opcao 5</li>
            </ul>
        </section>
    )
}
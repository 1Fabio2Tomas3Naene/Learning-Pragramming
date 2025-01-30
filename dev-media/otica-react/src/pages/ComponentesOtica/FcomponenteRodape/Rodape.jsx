import estilos from './Rodape.module.css';

export default function FcomponenteRodape(){
    return(
        <footer className={estilos.containerRodape}>
            <p className={estilos.containerRodapeParagrafo}>© 2022 Óticas Vida. - Todos os direitos reservados</p>
        </footer>
    )
}
import estilos from './Rodape.module.css';

export default function ComponenteRodape(){
    return(
        <footer className={estilos.Rodape}>
            <p className={estilos.paragrafo}>© Copyright 2021 | Consultório dentes saudáveis</p>
        </footer>
    )
}
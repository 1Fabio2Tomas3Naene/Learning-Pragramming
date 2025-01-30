import estilos from './Informacao.module.css';

export default function ComponenteInformacao(props){
    let AminalCachorro = 'Cachorro';
    let infoAnimalCachorro = 'É um mamífero carnívoro da família dos canídeos.';
    let AminalGato = 'Gato';
    let infoAnimalGato = 'É um mamífero carnívoro da família dos felídeos.';
    return(
        <div className={estilos.containerInformacaoAnimal}>
          <h3 className={estilos.containerInformacaoAnimalTitulo}>Informação sobre o {props.MudancaBotao ? AminalGato : AminalCachorro}</h3>
          <p className={estilos.containerInformacaoAnimalParagrafo}>{props.MudancaBotao ? infoAnimalGato : infoAnimalCachorro}</p>
        </div>
    )
}
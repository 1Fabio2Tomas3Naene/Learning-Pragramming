import estilos from './Topo.module.css'

export default function ComponenteTopo(props){
    function MudarBotao(){
        props.setMudancaBotao(!props.MudancaBotao)
    }
    return(
        <header className={estilos.containerTopo}>
        <h1 className={estilos.containerTopoTitulo}>Projeto Props + useState</h1>
        <p className={estilos.containerTopoParagrafo}>Clique no botão para mudar os componentes abaixo</p>
        <button onClick={MudarBotao} className={estilos.containerTopoBotaoMudarAnimal}>{props.MudancaBotao ? 'Mudar Animal' : 'Mudar Animal'}</button>
      </header>
    )
}
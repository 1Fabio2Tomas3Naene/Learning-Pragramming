import estilos from './Apresentacao.module.css';

export default function ConponenteApresentacao(){
    return(
        <article className={estilos.containerApresentacao}>
            <h2 className={estilos.containerApresentacaoSubtitulo}> <span className={estilos.containerApresentacaodiferente}>Os melhores</span> aparelhos dentários!</h2>
            <p className={estilos.containerApresentacaoParagrafo}>Confira abaixo todas as especialidades odontológicas que temos à sua disposição!</p>
            <ul className={estilos.containerApresentacaoListas}>
                <div className={estilos.containerApresentacaoListasColunas}>
                    <li className={estilos.containerApresentacaoListaslis}>Pré-avaliação</li>
                    <li className={estilos.containerApresentacaoListaslis}>Aparelhos Dentários</li>
                </div>
                <div className={estilos.containerApresentacaoListasColunas}>
                    <li className={estilos.containerApresentacaoListaslis}>Raio-X digital</li>
                    <li className={estilos.containerApresentacaoListaslis}>Clareamento dental</li>
                </div>
            </ul>
        </article>
    )
}
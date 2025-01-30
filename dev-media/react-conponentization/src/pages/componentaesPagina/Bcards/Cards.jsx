import EstilosCards from './EstilosCards.module.css'

export default function Bcards(){
    return(
        <div className={EstilosCards.CardsEstilos}>
            <p>Componentes</p>
            <p>Facilita em manter partes menores funcionando corretamente.</p>
            <p>Você pode reutilizá-lo, ou seja, menos código para se escrever.</p>
        </div>
    )
}
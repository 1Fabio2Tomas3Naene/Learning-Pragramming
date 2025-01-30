'use client';
import { useState } from 'react';
import estilos from './page.module.css';

export default function HelloWorld(){;
    const [condicao, setCondicao] = useState(false)
    const [condicaoMostar, setCondicaoMostar] = useState(false);
    const [textoMostrar, setTextoMostrar] = useState('Mostrar texto')
    const [mensagem, setMensagem] = useState('');
    function GerarTexto(){
            if(condicao === true && condicaoMostar === true){
                setCondicao(false);
                setCondicaoMostar(false)
                setTextoMostrar('Mostrar texto')
                setMensagem('');
            }
            else{
                setCondicao(true);
                setCondicaoMostar(true)
                setTextoMostrar('Esconder texto')
                setMensagem('Hello World');

            };
    };

    return(
        <main className={estilos.containerPrincipal}>
            <article className={estilos.containerTexto}>
            <div className={estilos.containerTextoCampoText}>{mensagem}</div>
            <p>Clique no botão abaixo para aparecer um texto na caixa acima</p>
            <button onClick={GerarTexto} className={estilos.botao}>{textoMostrar}</button>
            </article>
        </main>
    );
};
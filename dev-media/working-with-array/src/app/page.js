'use client';
import React from "react";
import { useState } from "react";
import estilos from "./page.module.css";
import Card from "./Card/Card";
import Image from "next/image";
import pesquisa from '../../public/img/lupa.png';
import { buscarJogosPlataforma, pesquisarJogosPlataforma, listarJogosPlataforma } from "./Funcoes/funcoes";

export default function Home() {
  const [listarJogos, setlistarJogos] = useState(listarJogosPlataforma());
  const [textoBusca, setTextoBusca] = useState('');
  function handleFiltrarJogos(plataforma){
    setTextoBusca('')
    setlistarJogos(buscarJogosPlataforma(plataforma))
  }
  function handleLimparJogos(){
    setlistarJogos(listarJogosPlataforma())
    setTextoBusca('')
  };
  function handleBuscarJogo(textoDigitado){
    setlistarJogos(pesquisarJogosPlataforma(textoDigitado))
    setTextoBusca(textoDigitado)
  };
  return (
    <div className={estilos.conponentes}>
    <div className={estilos.pesquisa}>
      <div>
      <button onClick={() => handleFiltrarJogos('xbox')} className={estilos.Botaos}>Xbox</button>
      <button onClick={() => handleFiltrarJogos('playstation')} className={estilos.Botaos}>Playstation</button>
      <button onClick={() => handleFiltrarJogos('nintendo')} className={estilos.Botaos}>Nintendo</button>
      </div>
      <button onClick={() => handleLimparJogos()} className={estilos.botao_restaurar}>Restaurar Jogos</button>
    </div>
    <div className={estilos.cotainer_campo_busca}>
        <Image src={pesquisa} alt="pesquisa" className={estilos.logo_pesquisa}/>
        <input
        type="text"
        value={textoBusca}
        placeholder="pesquise por jogo ou plataforma"
        onChange={(Event) => handleBuscarJogo(Event.target.value)} className={estilos.campo_input}/>
      </div>
     {
      listarJogos.map((jogos) => {
        return(
          <Card 
          key={jogos.id}
          nome={jogos.nome}
          plataforma={jogos.plataforma}
          />
        )
      })
     }
    </div>
  );
}

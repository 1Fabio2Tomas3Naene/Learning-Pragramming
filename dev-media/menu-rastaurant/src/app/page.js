'use client';
import React from "react";
import { useState } from "react";
import styles from "./page.module.css";
import ComponentBanner from "./components/componentBanner/Banner";
import ComponentButtonMenu from "./components/componentButtonMenu/ButtonsMenu";
import ComponentSearchField from "./components/componentSearchField/SearchField";
import CardComponent from "./components/cardComponent/Cards";
import { filtrarProdutosCategoria, filtrarProdutosCategoriaEntradas } from "./components/componentButtonMenu/function";
import { filtarPorPalavraDigitada } from "./components/componentSearchField/functions";

export default function Home() {
  const [cards, setCards] = useState(filtrarProdutosCategoriaEntradas);
  const [textoDigitado, setTextoDigitado] =useState("");
  const [botarAceso, setBotarAceso] = useState("Entradas");

  const handleFiltrarProdutosCategoria = (categoria) => {
    setCards(filtrarProdutosCategoria(categoria))
    setTextoDigitado("");
    setBotarAceso(categoria)
  }
  const handleFiltrarProdutosPorTextoDigitado =(texto) =>{
    setCards(filtarPorPalavraDigitada(texto))
    setTextoDigitado(texto)
    if(texto.length == 0){
      setCards(filtrarProdutosCategoriaEntradas)
  }
  if(texto.length > 0){
    setBotarAceso("")
  }
}
  return (
    <div className={styles.page}>
      <ComponentBanner />
      <main className={styles.main}>
        <ComponentButtonMenu funcaoFiltarCategoria={handleFiltrarProdutosCategoria} botaoClicadoAcenter={botarAceso}/>
        <ComponentSearchField  funcaoFiltarPorTextoDiogitado={handleFiltrarProdutosPorTextoDigitado} textoDigitadoState={textoDigitado}/>
        <div className={styles.container_cards_main}>
          <h2 className={styles.container_cards_title}> Cardapio</h2>
        <div className={styles.container_cards}>
        {
          cards.map((produtos) =>{
            return(
              <CardComponent
              key={produtos.id}
              imagem={produtos.imagem}
              nome={produtos.nome}
              categoria={produtos.categoria}
              descricao={produtos.descricao}
              preco={produtos.preco}
              />
            )
          })
        }
        </div>
        </div>
      </main>
    </div>
  );
}

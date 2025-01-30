'use client';
import React from 'react'
;


export default function Home() {

  function gerarNumero() {
    const novoNumero = Math.floor(Math.
random
() * (100-1) + 1);
    alert(novoNumero);
  }

  
return(
    <div >
      <h3>Número aleatório:</h3>
      <div>
        <label>Click no botão abaixo para gerar um número aleatório:</label>
        <
button onClick={gerarNumero}
>Gerar número</button>
      </div>
    </div>
  );
}
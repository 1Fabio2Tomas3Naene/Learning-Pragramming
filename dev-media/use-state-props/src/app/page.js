'use client';
import React from "react";
import { useState } from "react";
import estilos from "./page.module.css";

import ComponenteTopo from "./componentes/componenteTopo/Topo";
import ComponenteCardAmimal from "./componentes/componenteCardAmimal/Card";
import ComponenteInformacao from "./componentes/componenteInformacao/Informacao";

export default function Home() {
  const [botaoMudarAnimal, setBotaoMudarAnimal] = useState(false);

  return (
    <div className={estilos.containerEnvolvedor}>
      <ComponenteTopo MudancaBotao ={botaoMudarAnimal} setMudancaBotao = {setBotaoMudarAnimal}/>
      <main className={estilos.containerPrincipal}>
        <ComponenteCardAmimal MudancaBotao ={botaoMudarAnimal}/>
        <ComponenteInformacao MudancaBotao ={botaoMudarAnimal}/>
      </main>
    </div>
  );
}

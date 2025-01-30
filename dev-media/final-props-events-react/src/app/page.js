'use client';
import React from "react";
import estilos from "./page.module.css";
import { useState } from "react";
import ComponenteTopo from "./componentes/acomponenteTopo/Topo";
import ComponenteBanner from "./componentes/bComponenteBanner/Banner";
import ComponenteExperiencias from "./componentes/cComponenteExperiencias/Experiencias";
import ComponenteCard from "./componentes/cComponenteCards/Cards";
import ComponenteRedes from "./componentes/dComponenteRedes/Redes";
import ComponenteRodate from "./componentes/dComponenteRodape/Rodape";

export default function Home() {
  const [temaClaro, setTemaClaro] = useState(false);

  function AlterarTema(){
    setTemaClaro(!temaClaro);
  }
  return (
    <>
    <ComponenteTopo funcao_onclick={AlterarTema} estado={temaClaro}/>
    <main className={estilos.containerPrincipal}>
      < ComponenteBanner />
     <div className={temaClaro ? estilos.dark_mode : estilos.light_mode}>
     <section className={estilos.container_experirncias}>
      < ComponenteExperiencias estado={temaClaro}/>
      <div className={estilos.container_cards}>
                    <ComponenteCard 
                    estado={temaClaro}
                    data={'JUNHO 2012 - 2016'}
                    titulo={'Web Designe'}
                    empresa={'Pied Piper StartUp'}
                    paragrafo={'Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores'}
                    />
                     <ComponenteCard
                     estado={temaClaro}
                    data={'AGOSTO 2016 - 2019'}
                    titulo={'Product Designer'}
                    empresa={'E Corp.'}
                    paragrafo={'Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra'}
                    />
                     <ComponenteCard
                     estado={temaClaro}
                    data={'FEVEREIRO 2019 - 2021'}
                    titulo={'Digital Consulting'}
                    empresa={'Arasaka Inc.'}
                    paragrafo={'Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução'}
                    />
                </div>
      </section>
     </div>
     <ComponenteRedes estado={temaClaro}/>
    </main>
    <ComponenteRodate estado={temaClaro}/>
    </>
  );
}

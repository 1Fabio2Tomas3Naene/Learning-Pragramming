import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import ComponenteTopo from "./componentes/componenteTopo/Topo";
import ConponenteApresentacao from "./componentes/componenteApresentacao/Apresentacao";
import ComponenteAparelhos from "./componentes/conponenteAparelhos/Aparelhos";

import ComponentesClientesFalando from "./componentes/componentesClientesFalando/Clientes";
import Cliente01 from '../../public/imagens/cliente01.png';
import Cliente02 from '../../public/imagens/cliente02.png';
import Cliente03 from '../../public/imagens/cliente03.png';

import ComponenteInformacoes from "./componentes/componenteInformacoes/Informacoes";
import Dentista01 from '../../public/imagens/dentista01.png';
import Dentista02 from '../../public/imagens/dentista02.png';

import ComponenteLocalizacao from "./componentes/componenteLocalizacao/Localizacao";
import ComponenteRodape from "./componentes/componenteRodape/Rodape";

export default function Home() {
  return (
    <>
    <ComponenteTopo />
    <main className={styles.containerMain}>
    <ConponenteApresentacao />
    <ComponenteAparelhos />
    <section className={styles.containerClientes}>
    <h3 className={styles.Subtitulo}>Veja o que nossos <span className={styles.destaque}>clientes</span> estão falando..</h3>
   <div className={styles.Clientes}>
   <ComponentesClientesFalando
    Imagem={Cliente01}
    Nome={'Alberto'}
    Comentario={'Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com profissionalismo e cuidado.'}
    />
    <ComponentesClientesFalando
    Imagem={Cliente02}
    Nome={'Eliana'}
    Comentario={'Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com profissionalismo e cuidado..'}
    />
    <ComponentesClientesFalando
    Imagem={Cliente03}
    Nome={'Carla'}
    Comentario={'Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com profissionalismo e cuidado.'}
    />
   </div>
    </section>
    <section className={styles.containerInformacao}>
      <ComponenteInformacoes>
        <ul className={styles.lista}>
          <li className={styles.li}>Segunda - 09:00 às 18:00</li>
          <li className={styles.li}>Terça - 09:00 às 18:00</li>
          <li className={styles.li}>Quarta - 09:00 às 18:00</li>
          <li className={styles.li}>Quinta - 09:00 às 18:00</li>
          <li className={styles.li}>Sexta - 09:00 às 17:00</li>
          <li className={styles.li}>Sábado - 09:00 às 12:00</li>
        </ul>
        </ComponenteInformacoes>
        <ComponenteInformacoes>
          <div className={styles.dentistas}>
            <div className={styles.CardDentista}>
              <Image src={Dentista01} alt="Dr. Ana" title="Dr. Ana" className={styles.dentistaImagem}/>
              <div className={styles.DentistaP}>
              <p className={styles.dentistaParagrafo}>Dra. Ana - Ortodontista</p>
              <p className={styles.dentistaParagrafo}>Segundas e sextas</p>
              </div>
            </div>
            <div className={styles.CardDentista}>
              <Image src={Dentista02} alt="Dr. Carlos" title="Dr. Carlos" className={styles.dentistaImagem}/>
              <div className={styles.DentistaP}>
              <p className={styles.dentistaParagrafo}>Dr. Carlos - Endodontia</p>
              <p className={styles.dentistaParagrafo}>Terças e quartas</p>
              </div>
            </div>
          </div>
        </ComponenteInformacoes>
        <ComponenteInformacoes>
          <address className={styles.endereco}>
            <p className={styles.enderecoParagrafo}>Ligue para agendar uma consulta:</p>
            <p className={styles.enderecoParagrafo}>(21) 3699 - 9999</p>
            <p className={styles.enderecoParagrafo}>(21) 97788 - 5566</p>
          </address>
        </ComponenteInformacoes>
    </section>
    <ComponenteLocalizacao />
    </main>
    <ComponenteRodape />
    </>
  );
}

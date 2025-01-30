import estilos from './Topo.module.css';
import Image from 'next/image';
import Dente from '../../../../public/imagens/dente.png';

export default function ComponenteTopo(){
   return(
      <header className={estilos.containerTopo}>
         <h1 className={estilos.containerTopoTitulo}> <Image src={Dente} alt='dente' title='dente' className={estilos.img}/>Dentes Saudáveis</h1>
      </header>
   )
}
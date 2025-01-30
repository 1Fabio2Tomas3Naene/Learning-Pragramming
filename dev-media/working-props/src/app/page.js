
import estilos from './page.module.css';
import CardProduto from './componentes/CardProduto';
import imagem1 from '../../public/file.svg';
import imagem2 from '../../public/globe.svg';
import imagem3 from '../../public/next.svg';

export default function Home() {
  return (
    <main className={estilos.container_principal}>
      <section className={estilos.containerCards}>
      <CardProduto imagem ={imagem1} nome={'Hamburguer'} preco={18} categoria={'Lanche'}/>
      <CardProduto imagem ={imagem2} nome={'Coca-cola'} preco={7} categoria={'Bebida'}/>
      <CardProduto imagem ={imagem3} nome={'Sorvete'} preco={12} categoria={'Sobremesa'}/>
      </section>
    </main>
  );
}
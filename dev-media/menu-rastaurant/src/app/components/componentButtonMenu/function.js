import { produtos } from "@/app/dados/array";
;
export const filtrarProdutosCategoriaEntradas = () =>{
    return produtos.filter((produtosEntradas) =>
        produtosEntradas.categoria === "Entradas"
    )
};
export const filtrarProdutosCategoria = (categoria) =>{
    return produtos.filter((produto) => 
        produto.categoria == categoria
    )
};
export const acenderApagarBotao = filtrarProdutosCategoria("Entradas");

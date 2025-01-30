import { produtos } from "@/app/dados/array";

export const filtarPorPalavraDigitada = (texto) =>{
    return  produtos.filter((produto) =>
        produto.categoria.toLowerCase().includes(texto.toLowerCase()) ||
    produto.descricao.toLowerCase().includes(texto.toLowerCase()) ||
    produto.nome.toLowerCase().includes(texto.toLowerCase())
)
}
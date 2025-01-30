import { jogosExclusivos } from "../dados/array";

 export const buscarJogosPlataforma =(plataforma) =>{
      return  jogosExclusivos.filter((jogos) =>
        jogos.plataforma === plataforma
    )
};
 export const pesquisarJogosPlataforma = (textoDigitado) =>{
   return jogosExclusivos.filter((jogos) =>
    jogos.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
            jogos.plataforma.toLowerCase().includes(textoDigitado.toLowerCase())
)
}

export const listarJogosPlataforma =() =>{
    return jogosExclusivos
    
}
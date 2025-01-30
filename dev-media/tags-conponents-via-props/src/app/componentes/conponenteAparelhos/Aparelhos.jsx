import Image from "next/image";
import Aparelhos from '../../../../public/imagens/aparelho.png';
import estilos from './Aparelhos.module.css';

export default function ComponenteAparelhos(){
    return(
        <section className={estilos.containerAparelho}>
            <h2 className={estilos.Titulo}>Por que usar <span className={estilos.Destaque}>aparelho?</span></h2>
            <Image src={Aparelhos} alt="Aparelho de dente" title="Aparelho de dente" className={estilos.Img}/>
            <div className={estilos.Cads}>
            <div className={estilos.Boxs}>
                    <h3 className={estilos.Subtitulo}>Alinhar os dentes</h3>
                    <p className={estilos.paragrafo}>Dentes desalinhados causam problemas nos dentes e podem afetar a digestão dos alimentos e a respiração.</p>
                </div>
                <div className={estilos.Boxs}>
                    <h3 className={estilos.Subtitulo}>Melhorar a dicção e a higiene dentária</h3>
                    <p className={estilos.paragrafo}>Muitas pessoas não conseguem nem usar fio dental devido à posição da sua dentição. Contudo, a correção possibilita o cuidado com a saúde bucal de forma bem mais ampla.</p>
                </div>
                <div className={estilos.Boxs}>
                    <h3 className={estilos.Subtitulo}>Corrigir espaço entre os dentes</h3>
                    <p className={estilos.paragrafo}>Uma dentição desalinhada e com espaços significativos incomodam muitas pessoas. Usar aparelho nos dentes é uma das formas mais eficientes para que esses problemas possam ser corrigidos.</p>
                </div>
            </div>
        </section>
    )
}
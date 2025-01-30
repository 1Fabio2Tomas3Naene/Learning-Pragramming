import estilos from './page.module.css';
import aquario from './signosImagens/aquario.jpeg';
import Peixes from './signosImagens/peixes.jpeg';
import Aries from './signosImagens/aries.jpeg';
import Touro from './signosImagens/touro.jpeg';
import Gemeos from './signosImagens/gemeos.jpg';
import Cancer from './signosImagens/cancer.jpg';
import Leao from './signosImagens/leao.webp';
import Virgem from './signosImagens/virgem.png';
import Libra from './signosImagens/libra.webp';
import Escorpiao from './signosImagens/escorpeiao.jpeg';
import Sagitario from './signosImagens/sagitario.jpeg';
import Capricornio from './signosImagens/capricorneo.avif';

import SignosTopo from '../signosTopo/Topo';
import SignosCard from '../signosCard/Card';

export default function Home(){
    return(
        <>
        <SignosTopo />
        <main className={estilos.containerPrincipal}>
            <section className={estilos.containerSignos}>
                <SignosCard
                signo={"Aquario"}
                elemento={"ar"}
                imagem={aquario}
                inicio={"21/01"}
                fim={"19/02"}
                />
                <SignosCard
                signo={"Peixes"}
                elemento={"agua"}
                imagem={Peixes}
                inicio={"20/02"}
                fim={"20/03"}
                />
               <SignosCard
                signo={"Aries"}
                elemento={"fogo"}
                imagem={Aries}
                inicio={"21/03"}
                fim={"20/04"}
                />
                <SignosCard
                signo={"Touro"}
                elemento={"terra"}
                imagem={Touro}
                inicio={"21/04"}
                fim={"21/05"}
                />
                <SignosCard
                signo={"Gemeos"}
                elemento={"ar"}
                imagem={Gemeos}
                inicio={"22/05"}
                fim={"21/06"}
                />
               <SignosCard
                signo={"Cancer"}
                elemento={"agua"}
                imagem={Cancer}
                inicio={"21/06"}
                fim={"23/07"}
                />
                <SignosCard
                signo={"Leao"}
                elemento={"fogo"}
                imagem={Leao}
                inicio={"24/07"}
                fim={"23/08"}
                />
                <SignosCard
                signo={"Virgem"}
                elemento={"terra"}
                imagem={Virgem}
                inicio={"24/08"}
                fim={"23/09"}
                />
               <SignosCard
                signo={"Libra"}
                elemento={"ar"}
                imagem={Libra}
                inicio={"24/09"}
                fim={"23/10"}
                />
                <SignosCard
                signo={"Escorpiao"}
                elemento={"agua"}
                imagem={Escorpiao}
                inicio={"24/10"}
                fim={"22/11"}
                />
                 <SignosCard
                signo={"Sagitario"}
                elemento={"fogo"}
                imagem={Sagitario}
                inicio={"23/11"}
                fim={"21/12"}
                />
                <SignosCard
                signo={"Capricornio"}
                elemento={"terra"}
                imagem={Capricornio}
                inicio={"22/12"}
                fim={"20/10"}
                />
            </section>
        </main>
        </>
    )
}
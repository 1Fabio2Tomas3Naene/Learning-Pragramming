import Image from "next/image";
import estilos from './Card.module.css';
import ImagemGato from '../../../../public/img/gato.jpg';
import ImagemCachoro from '../../../../public/img/cachorro.jpg';

export default function ComponenteCardAmimal(props){
  let ImagemAnimalGatoAtl = 'Gato';
  let ImagemAnimalGatoTitle = 'Gato';
  let ImagemAnimalCachorroAtl = 'Cachorro';
  let ImagemAnimalCachorroTitle = 'Cachorro';

    return(
        <div className={estilos.containerPrincipalCardAnimal}>
          <Image src={props.MudancaBotao ? ImagemGato : ImagemCachoro} alt={props.MudancaBotao ? ImagemAnimalGatoAtl : ImagemAnimalCachorroAtl} title={props.MudancaBotao ? ImagemAnimalGatoTitle : ImagemAnimalCachorroTitle} className={estilos.containerPrincipalCardAnimalImagem}/>
        </div>
    )
}
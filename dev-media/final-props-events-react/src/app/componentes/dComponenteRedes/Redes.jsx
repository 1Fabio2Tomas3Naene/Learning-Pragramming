import React from "react";
import Image from "next/image";
import Logo from '../../../../public/img/logo.png';
import Facebook from '../../../../public/img/facebook.png';
import Twitter from '../../../../public/img/twitter.png';
import Linkedin from '../../../../public/img/linkedin.png';
import Dribble from '../../../../public/img/dribble.png';
import Behance from '../../../../public/img/behance.png';
import Google from '../../../../public/img/google.png';
import estilos from './Redes.module.css';

export default function ComponenteRedes(props){
    return(
        <div className={props.estado ? estilos.dark_mode : estilos.light_mode}>
            <section className={estilos.container_redes}>
            <div className={estilos.largura_limites}>
                <Image src={Logo} alt="Logotipo" title="Logotipo" className={estilos.img_logo}/>
                <p className={estilos.paragarfo}>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.</p>
                <address className={estilos.Redes}>
                    <Image src={Facebook} alt="Facebook" title="Facebook" className={estilos.redes_img}/>
                    <Image src={Twitter} alt="Twitter" title="Twitter" className={estilos.redes_img}/>
                    <Image src={Linkedin} alt="Linkedin" title="Linkedin" className={estilos.redes_img}/>
                    <Image src={Dribble} alt="Dribble" title="Dribble" className={estilos.redes_img}/>
                    <Image src={Behance} alt="Behance" title="Behance" className={estilos.redes_img}/>
                    <Image src={Google} alt="Google" title="Google" className={estilos.redes_img}/>
                </address>
            </div>
        </section>
        </div>
    )
};
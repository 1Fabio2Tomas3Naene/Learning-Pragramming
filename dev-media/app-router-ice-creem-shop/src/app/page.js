import Image from "next/image";
import styles from "./page.module.css";
import Banner  from "./aComponentesHome/aComponenteBanner/Banner";
import ComponenteApresentacao from "./aComponentesHome/bComponenteApresentacao/Apresentacao";

export default function Home() {
  return (
   <main>
    <Banner/>
   <ComponenteApresentacao/>
    </main>
  );
}

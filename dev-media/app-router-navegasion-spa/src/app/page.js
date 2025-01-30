import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.comtainerBemVindo}>
        <h1 className={styles.comtainerBemVindoTitulo}>Seja bem-vindo ao exemplo de navegação no React</h1>
      </div>
    </main>
  );
}

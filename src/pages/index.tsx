import SEO from '../pages/components/SEO';
import styles from '../styles/home.module.scss';
export default function Home() {
  return (
    <>
      <SEO title="Tec News!" excludeTitleSuffix />
     < main className={styles.content}>
        <section className={styles.section}>
          <span>Olá Tec!</span>
          <h1> bem-vindos <br />
            ao <span>Tec</span>News!
          </h1>
          <p>
            Um blog com conteúdos extremamente <br />
            <span>relevantes para mundor Tec!</span>
          </p>
        </section>
        <img src="/home.svg" alt="Home image" />
      </main>
    </>
  );
}

import React from 'react';
import styles from '../styles/home.module.scss';
import Card from './components/fotsCard/Card';

export default function Home() {
  const images = [
    '/b4 (4).jpg',
    '/352.jpg',
    '/kit.png',
  ];

  return (
    <main>
      <div className={styles.main}>
        <div className={styles.lest}>
          <h1>Gráfica Agamenon</h1>
          <h2>Prestando Serviços com Responsabilidade</h2>
        </div>
        <img src="/r9.jpg" alt="" />
      </div>
      

      <div className={styles.cardContainer}>
        <Card images={images} />
      </div>
    </main>
  );
}

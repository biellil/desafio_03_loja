import React from 'react';
import styles from '../styles/home.module.scss';
import Card from './components/fotsCard/Card';
import Novidades from './components/Novidades/Novidades';



export default function Home() {
  const images = [
    '/card01.jpg',
    '/card03.jpg',
    '/card02.png',
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
      
        <Card images={images} />
        <Novidades/>
    </main>
  );
}
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

export function Header() {
  const { asPath } = useRouter();

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <nav>
        
          <div>

          <Link href="/" className={asPath === '/' ? styles.active : ''}>
            Home
          </Link>
          <Link href="/Novidades" className={asPath === '/Novidades' ? styles.active : ''}>
          Novidades
          </Link>
          <Link href="/Destaque" className={asPath === '/Destaque' ? styles.active : ''}>
          Destaque
          </Link>
          <Link href="/posts" className={asPath === '/posts2' ? styles.active : ''}>
          Produtos
          </Link>
          <Link href="/posts" className={asPath === '/posts3' ? styles.active : ''}>
          Contato
          </Link>
         
          </div>
  
        
        </nav>
      </div>
    </header>
  );
}
export default Header;
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

export function Header() {
  const { asPath } = useRouter();

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <nav>
          <Link href="/" passHref legacyBehavior>
            <a>
              <img src="/logo.svg" alt="DevNews!" />
            </a>
          </Link>
          
          <div>

          <Link href="/" className={asPath === '/' ? styles.active : ''}>
            Home
          </Link>
          <Link href="/posts" className={asPath === '/posts' ? styles.active : ''}>
            News
          </Link>

          </div>
         
        </nav>
      </div>
    </header>
  );
}
export default Header;
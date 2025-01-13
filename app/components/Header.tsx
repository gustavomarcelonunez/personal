// components/Header.tsx
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}></h1>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Inicio</Link>
          <Link href="/about" className={styles.navLink}>Acerca de mí</Link>
          <Link href="/projects" className={styles.navLink}>Proyectos</Link>
          <Link href="/contact" className={styles.navLink}>Contacto</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

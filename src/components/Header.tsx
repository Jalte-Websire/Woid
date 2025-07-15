import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoOrbWrapper}>
            <svg className={styles.logoOrb} viewBox="0 0 100 100" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="orbGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#a6bfff" stopOpacity="0.7" />
                  <stop offset="80%" stopColor="#6d4aff" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#000" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="50" cy="50" r="40" fill="url(#orbGlow)" />
            </svg>
            <h1 className={styles.logoText}>woid</h1>
          </div>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="/" className={styles.navLink}>Hjem</a>
            </li>
            <li className={styles.navItem}>
              <a href="/about" className={styles.navLink}>Om os</a>
            </li>
            <li className={styles.navItem}>
              <a href="/services" className={styles.navLink}>Services</a>
            </li>
            <li className={styles.navItem}>
              <a href="/priser" className={styles.navLink}>Priser</a>
            </li>
            <li className={styles.navItem}>
              <a href="/contact" className={styles.navLink}>Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 
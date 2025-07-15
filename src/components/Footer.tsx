import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.title}>woid</h3>
            <p className={styles.description}>
              Skaber digital excellence gennem innovativt design og cutting-edge teknologi.
            </p>
          </div>
          
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Services</h4>
            <ul className={styles.linkList}>
              <li><a href="/services" className={styles.link}>Web design</a></li>
              <li><a href="/services" className={styles.link}>Web udvikling</a></li>
              <li><a href="/services" className={styles.link}>Mobile apps</a></li>
              <li><a href="/services" className={styles.link}>Digital strategi</a></li>
            </ul>
          </div>
          
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Virksomhed</h4>
            <ul className={styles.linkList}>
              <li><a href="/about" className={styles.link}>Om os</a></li>
              <li><a href="/priser" className={styles.link}>Priser</a></li>
              <li><a href="/contact" className={styles.link}>Kontakt</a></li>
              <li><a href="#" className={styles.link}>Karriere</a></li>
            </ul>
          </div>
          
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Kontakt</h4>
            <div className={styles.contactInfo}>
              <p>hello@woid.dk</p>
              <p>+45 12 34 56 78</p>
              <p>København, Danmark</p>
            </div>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>LinkedIn</a>
              <a href="#" className={styles.socialLink}>Twitter</a>
              <a href="#" className={styles.socialLink}>Dribbble</a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; 2024 woid. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  );
} 
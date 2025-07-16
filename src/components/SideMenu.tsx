"use client";

import { useEffect, useState } from 'react';
import styles from './SideMenu.module.css';
import Link from 'next/link';

interface InfoPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InfoPanel({ isOpen, onClose }: InfoPanelProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <>
      {isOpen && (
        <div className={styles.container}>
          <div className={styles.backdrop} onClick={onClose} />
          <div className={`${styles.panel} ${isOpen ? styles.open : ''}`}>
            <div className={styles.header}>
              <div className={styles.orbWrapper}>
                <svg className={styles.orb} viewBox="0 0 100 100" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="orbCoreSide" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="1" />
                      <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.8" />
                    </radialGradient>
                    <radialGradient id="orbGlowSide" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.4" />
                      <stop offset="70%" stopColor="#8B5CF6" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#000" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="50" cy="50" r="45" fill="url(#orbGlowSide)" />
                  <circle cx="50" cy="50" r="25" fill="url(#orbCoreSide)" />
                  <circle cx="40" cy="40" r="8" fill="white" fillOpacity="0.2" />
                </svg>
              </div>
              <button className={styles.closeButton} onClick={onClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            
            <div className={styles.content}>
              <div className={styles.infoSection}>
                <h2>Om Woid</h2>
                <p>
                  Vi er et digitalt bureau med fokus på at skabe unikke og værdiskabende digitale løsninger. 
                  Vores passion er at kombinere kreativt design med teknisk excellence.
                </p>
                <p>
                  Med base i København arbejder vi med virksomheder i hele Danmark og hjælper dem med 
                  at realisere deres digitale potentiale.
                </p>
              </div>

              <div className={styles.infoSection}>
                <h3>Kontakt</h3>
                <p>
                  <strong>Email:</strong><br />
                  <a href="mailto:hello@woid.dk" className={styles.link}>hello@woid.dk</a>
                </p>
                <p>
                  <strong>Telefon:</strong><br />
                  <a href="tel:+4512345678" className={styles.link}>+45 12 34 56 78</a>
                </p>
                <p>
                  <strong>Adresse:</strong><br />
                  Woid ApS<br />
                  Vesterbrogade 123<br />
                  1620 København V
                </p>
              </div>

              <div className={styles.socialLinks}>
                <h3>Find os her</h3>
                <div className={styles.socialGrid}>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                    </svg>
                    Instagram
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
                    </svg>
                    Facebook
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                    Twitter
                  </a>
                </div>
              </div>

              <div className={styles.footer}>
                <Link href="/contact" className={styles.ctaButton}>
                  Kontakt os
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 
"use client";

import styles from './projekter.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlurText from '@/components/BlurText';
import PortfolioCases from '@/components/PortfolioCases';

export default function ProjectsPage() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <BlurText
              text="Vores Projekter"
              className={styles.title}
              type="title"
            />
            <BlurText
              text="Se et udvalg af vores seneste projekter og cases, hvor vi har hjulpet virksomheder med at skabe bedre digitale løsninger."
              className={styles.subtitle}
              type="subtitle"
              delay={0.1}
            />
          </div>
        </section>

        <PortfolioCases />
      </main>
      <Footer />
    </div>
  );
} 
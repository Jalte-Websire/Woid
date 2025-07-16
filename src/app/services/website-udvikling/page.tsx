"use client";

import { motion } from 'framer-motion';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { LaptopIcon } from '../../../components/Icons';
import BlurText from '../../../components/BlurText';
import styles from './page.module.css';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function WebsiteUdvikling() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <BlurText
              text="Website Udvikling"
              className={styles.title}
              type="title"
            />
            <BlurText
              text="Skræddersyede websites der konverterer og engagerer dine besøgende"
              className={styles.subtitle}
              type="subtitle"
              delay={0.1}
            />
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <motion.div 
              className={styles.iconContainer}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <LaptopIcon />
            </motion.div>
            
            <motion.div 
              className={styles.features}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.h2 {...fadeInUp}>Hvad vi tilbyder</motion.h2>
              <motion.div 
                className={styles.featureGrid}
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  {
                    title: "Responsive Design",
                    description: "Perfekt visning på alle enheder - fra mobil til desktop"
                  },
                  {
                    title: "SEO-Optimering",
                    description: "Indbygget søgemaskineoptimering for bedre synlighed"
                  },
                  {
                    title: "Hurtig Indlæsning",
                    description: "Optimeret performance for den bedste brugeroplevelse"
                  },
                  {
                    title: "Skalerbar Løsning",
                    description: "Bygget til at vokse med din virksomhed"
                  }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    className={styles.feature}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              className={styles.process}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.h2 {...fadeInUp}>Sådan arbejder vi</motion.h2>
              <motion.div 
                className={styles.steps}
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  {
                    number: "1",
                    title: "Analyse & Planlægning",
                    description: "Vi analyserer dine behov og lægger en solid strategi"
                  },
                  {
                    number: "2",
                    title: "Design & Prototype",
                    description: "Vi skaber det perfekte design til din målgruppe"
                  },
                  {
                    number: "3",
                    title: "Udvikling",
                    description: "Vi bygger dit website med moderne teknologier"
                  },
                  {
                    number: "4",
                    title: "Test & Launch",
                    description: "Grundig testing og problemfri lancering"
                  }
                ].map((step, index) => (
                  <motion.div 
                    key={index}
                    className={styles.step}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <span className={styles.stepNumber}>{step.number}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              className={styles.cta}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h2 {...fadeInUp}>Klar til at starte dit website projekt?</motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Lad os diskutere hvordan vi kan skabe den perfekte online tilstedeværelse for din virksomhed
              </motion.p>
              <motion.button 
                className={styles.ctaButton}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Kontakt os
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 
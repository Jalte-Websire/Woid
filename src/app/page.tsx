"use client";
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import {
  CircleIcon, // planet
  SquareIcon, // asteroid
  TriangleIcon, // komet
  OrbitIcon, // solsystem
  GridIcon, // galakse
  StarIcon, // stjerne
  OverlappingSquaresIcon, // saturn
  CrossIcon, // nebula
  SolarSystemIcon, // ellipse solsystem
  HexagonIcon // sort hul
} from '../components/Icons';
import styles from './page.module.css';

export default function Home() {
  // Count up states
  const [projects, setProjects] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [team, setTeam] = useState(0);

  useEffect(() => {
    let proj = 0, sat = 0, tm = 0;
    const projTarget = 500;
    const satTarget = 98;
    const tmTarget = 50;
    const duration = 1200; // ms
    const steps = 40;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      proj = Math.round((projTarget / steps) * step);
      sat = Math.round((satTarget / steps) * step);
      tm = Math.round((tmTarget / steps) * step);
      setProjects(proj > projTarget ? projTarget : proj);
      setSatisfaction(sat > satTarget ? satTarget : sat);
      setTeam(tm > tmTarget ? tmTarget : tm);
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Hero />
        
        {/* Statistik/benchmarks sektion fjernet */}

        {/* Services */}
        <section className={styles.services}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Vores services</h2>
            <p className={styles.sectionSubtitle}>Komplette digitale løsninger til moderne virksomheder</p>
            <div className={styles.serviceGrid}>
              <div className={styles.service}>
                <div className={styles.serviceIcon + ' ' + styles.iconWrapper}>
                  <CircleIcon />
                </div>
                <h3>Web design</h3>
                <p>Skræddersyede, responsive hjemmesider der fanger og konverterer. Ren æstetik med kraftfuld funktionalitet.</p>
              </div>
              <div className={styles.service}>
                <div className={styles.serviceIcon + ' ' + styles.iconWrapper}>
                  <SquareIcon />
                </div>
                <h3>Web udvikling</h3>
                <p>Skalerbare webapplikationer bygget med cutting-edge teknologi. Performance og sikkerhed i centrum.</p>
              </div>
              <div className={styles.service}>
                <div className={styles.serviceIcon + ' ' + styles.iconWrapper}>
                  <TriangleIcon />
                </div>
                <h3>Mobile apps</h3>
                <p>Native og cross-platform applikationer der leverer exceptionelle brugeroplevelser på alle enheder.</p>
              </div>
              <div className={styles.service}>
                <div className={styles.serviceIcon + ' ' + styles.iconWrapper}>
                  <OverlappingSquaresIcon />
                </div>
                <h3>Automatisering</h3>
                <p>Effektiviser dine arbejdsgange med intelligente automatiseringer, integrationer og workflows, der sparer tid og minimerer fejl.</p>
              </div>
              <div className={styles.service}>
                <div className={styles.serviceIcon + ' ' + styles.iconWrapper}>
                  <HexagonIcon />
                </div>
                <h3>AI & Machine Learning</h3>
                <p>Udnyt kunstig intelligens og machine learning til at skabe smartere digitale løsninger, der lærer og optimerer over tid.</p>
              </div>
              <div className={styles.service}>
                <div className={styles.serviceIcon + ' ' + styles.iconWrapper}>
                  <OrbitIcon />
                </div>
                <h3>Digital strategi</h3>
                <p>Data-drevne tilgange til digital transformation. Vi aligner teknologi med dine forretningsmål.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Partners Banner */}
        <section className={styles.partnersSection}>
          <div className={styles.container}>
            <h3 className={styles.partnersTitle}>Betroet af brancheledere</h3>
          </div>
          <div className={styles.logoBanner}>
            <div className={styles.logoTrack}>
              <div className={styles.logoItem}>Microsoft</div>
              <div className={styles.logoItem}>Google</div>
              <div className={styles.logoItem}>Apple</div>
              <div className={styles.logoItem}>Amazon</div>
              <div className={styles.logoItem}>Netflix</div>
              <div className={styles.logoItem}>Spotify</div>
              <div className={styles.logoItem}>Adobe</div>
              <div className={styles.logoItem}>Salesforce</div>
              <div className={styles.logoItem}>Shopify</div>
              <div className={styles.logoItem}>Stripe</div>
              <div className={styles.logoItem}>Slack</div>
              <div className={styles.logoItem}>Figma</div>
              {/* Duplicate logos for seamless loop */}
              <div className={styles.logoItem}>Microsoft</div>
              <div className={styles.logoItem}>Google</div>
              <div className={styles.logoItem}>Apple</div>
              <div className={styles.logoItem}>Amazon</div>
              <div className={styles.logoItem}>Netflix</div>
              <div className={styles.logoItem}>Spotify</div>
              <div className={styles.logoItem}>Adobe</div>
              <div className={styles.logoItem}>Salesforce</div>
              <div className={styles.logoItem}>Shopify</div>
              <div className={styles.logoItem}>Stripe</div>
              <div className={styles.logoItem}>Slack</div>
              <div className={styles.logoItem}>Figma</div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className={styles.benefits}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Hvorfor vælge Woit?</h2>
            <div className={styles.benefitGrid}>
              <div className={styles.benefit}>
                <h3>Strategisk tilgang</h3>
                <p>Vi bygger ikke bare hjemmesider—vi skaber digitale oplevelser der driver forretningsvækst og brugerengagement.</p>
              </div>
              <div className={styles.benefit}>
                <h3>Performance fokuseret</h3>
                <p>Lynhurtige loadingstider og optimeret performance sikrer at dine brugere forbliver engagerede og konverterer.</p>
              </div>
              <div className={styles.benefit}>
                <h3>Enterprise sikkerhed</h3>
                <p>Bank-niveau sikkerhedsprotokoller beskytter dine data og dine brugers information med branche best practices.</p>
              </div>
              <div className={styles.benefit}>
                <h3>Skalerbare løsninger</h3>
                <p>Bygget til at vokse med din virksomhed. Vores løsninger skalerer problemfrit når dine behov udvikler sig.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className={styles.process}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Vores proces</h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>01</div>
                <h3>Discovery</h3>
                <p>Vi analyserer dine forretningsmål, målgruppe og tekniske krav for at skabe en strategisk roadmap.</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>02</div>
                <h3>Design</h3>
                <p>Vores designere skaber storslåede, bruger-centrerede interfaces der aligner med dit brand og forretningsmål.</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>03</div>
                <h3>Udvikling</h3>
                <p>Ekspert udviklere bringer designs til live med ren, vedligeholdelsesvenlig kode og cutting-edge teknologier.</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>04</div>
                <h3>Launch</h3>
                <p>Rigoros testning og optimering sikrer en fejlfri launch med løbende support og vedligeholdelse.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className={styles.testimonials}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Kunde success stories</h2>
            <div className={styles.testimonialGrid}>
              <div className={styles.testimonial}>
                <div className={styles.testimonialContent}>
                  <p>"Woit transformerede vores digitale tilstedeværelse fuldstændigt. Den nye hjemmeside øgede vores konverteringer med 300%."</p>
                </div>
                <div className={styles.testimonialAuthor}>
                  <strong>Sarah Jensen</strong>
                  <span>CEO, TechFlow</span>
                </div>
              </div>
              <div className={styles.testimonial}>
                <div className={styles.testimonialContent}>
                  <p>"Exceptionel kvalitet og opmærksomhed på detaljer. De leverede præcis hvad vi forestillede os og mere til."</p>
                </div>
                <div className={styles.testimonialAuthor}>
                  <strong>Michael Hansen</strong>
                  <span>Founder, InnovateLab</span>
                </div>
              </div>
              <div className={styles.testimonial}>
                <div className={styles.testimonialContent}>
                  <p>"Professionelle, responsive og resultat-drevne. Woit er vores go-to partner for alle digitale projekter."</p>
                </div>
                <div className={styles.testimonialAuthor}>
                  <strong>Emma Nielsen</strong>
                  <span>Marketing Director, GrowthCo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <h2>Klar til at transformere din digitale tilstedeværelse?</h2>
            <p>Lad os diskutere hvordan vi kan løfte dit brand med cutting-edge digitale løsninger</p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>Start projekt</button>
              <button className={styles.secondaryButton}>Se portfolio</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

"use client";
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MagicBento from '../components/MagicBento';
import {
  LaptopIcon,
  CodeIcon,
  MobileIcon,
  GearsIcon,
  BrainNetworkIcon,
  GrowthGraphIcon,
  CircleIcon,
  SquareIcon,
  TriangleIcon,
  OrbitIcon,
  GridIcon,
  StarIcon,
  SpotifyIcon,
  AdobeIcon,
  SalesforceIcon,
  ShopifyIcon,
  StripeIcon,
  SlackIcon
} from '../components/Icons';
import styles from './page.module.css';

export default function Home() {
  // Count up states
  const [projects, setProjects] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [team, setTeam] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

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
        
        {/* Brand Section */}
        <section className={styles.brandSection}>
          <div className={styles.container}>
            <h3 className={styles.brandTitle}>Værktøjer vi arbejder med</h3>
            <div className={styles.brandGrid}>
              <div className={styles.brandItem}>
                <SpotifyIcon />
                <span>Spotify</span>
              </div>
              <div className={styles.brandItem}>
                <AdobeIcon />
                <span>Adobe</span>
              </div>
              <div className={styles.brandItem}>
                <SalesforceIcon />
                <span>Salesforce</span>
              </div>
              <div className={styles.brandItem}>
                <ShopifyIcon />
                <span>Shopify</span>
              </div>
              <div className={styles.brandItem}>
                <StripeIcon />
                <span>Stripe</span>
              </div>
              <div className={styles.brandItem}>
                <SlackIcon />
                <span>Slack</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className={styles.services}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Komplette digitale løsninger</h2>
            <p className={styles.sectionSubtitle}>Vi leverer end-to-end digitale løsninger der driver forretningsvækst og brugerengagement</p>
            <div className={styles.serviceGrid}>
              <div className={styles.service}>
                <div className={styles.serviceIcon + ' ' + styles.iconWrapper}>
                  <LaptopIcon />
                </div>
                <h3>Website udvikling</h3>
                <p>Skræddersyede websites der konverterer og engagerer dine besøgende. Ren æstetik med kraftfuld funktionalitet.</p>
                <ul className={styles.featureList}>
                  <li>Responsive design til alle enheder</li>
                  <li>SEO-optimeret kode</li>
                  <li>Hurtig indlæsningstid</li>
                  <li>Skalerbar arkitektur</li>
                </ul>
              </div>
              <div className={styles.service}>
                <div className={styles.serviceIcon + ' ' + styles.iconWrapper}>
                  <CodeIcon />
                </div>
                <h3>E-handel løsninger</h3>
                <p>Professionelle webshops der sælger og vokser din virksomhed. Bygget til at konvertere og skabe loyalitet.</p>
                <ul className={styles.featureList}>
                  <li>Sikker betalingsbehandling</li>
                  <li>Lagerstyring integration</li>
                  <li>Mobil-venlig shopping</li>
                  <li>Avancerede analytics</li>
                </ul>
              </div>
              <div className={styles.service}>
                <div className={styles.serviceIcon + ' ' + styles.iconWrapper}>
                  <MobileIcon />
                </div>
                <h3>App udvikling</h3>
                <p>Native og web apps der giver dine kunder en fantastisk oplevelse. Performance og brugeroplevelse i centrum.</p>
                <ul className={styles.featureList}>
                  <li>iOS og Android apps</li>
                  <li>Progressive Web Apps</li>
                  <li>Push-notifikationer</li>
                  <li>Offline funktionalitet</li>
                </ul>
              </div>
              <div className={styles.service}>
                <div className={styles.serviceIcon + ' ' + styles.iconWrapper}>
                  <GearsIcon />
                </div>
                <h3>UI/UX design</h3>
                <p>Brugeroplevelser der engagerer og konverterer dine besøgende. Data-drevet design med fokus på resultater.</p>
                <ul className={styles.featureList}>
                  <li>Brugercentreret design</li>
                  <li>Prototyping og testing</li>
                  <li>Design systemer</li>
                  <li>Konverteringsoptimering</li>
                </ul>
              </div>
              <div className={styles.service}>
                <div className={styles.serviceIcon + ' ' + styles.iconWrapper}>
                  <BrainNetworkIcon />
                </div>
                <h3>Vedligeholdelse</h3>
                <p>Kontinuerlig opdatering og support til dine digitale løsninger. Sikkerhed og performance i fokus.</p>
                <ul className={styles.featureList}>
                  <li>24/7 overvågning</li>
                  <li>Regelmæssige opdateringer</li>
                  <li>Teknisk support</li>
                  <li>Sikkerhedsopdateringer</li>
                </ul>
              </div>
              <div className={styles.service}>
                <div className={styles.serviceIcon + ' ' + styles.iconWrapper}>
                  <GrowthGraphIcon />
                </div>
                <h3>Digital strategi</h3>
                <p>Strategisk rådgivning til at maksimere din digitale tilstedeværelse. Data-drevne beslutninger for vækst.</p>
                <ul className={styles.featureList}>
                  <li>SEO og digital markedsføring</li>
                  <li>Analytics og rapportering</li>
                  <li>Konverteringsoptimering</li>
                  <li>Forretningsanalyse</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Partners Banner */}
        <section className={styles.partnersSection}>
          <div className={styles.container}>
            <h3 className={styles.partnersTitle}>Betroet af brancheledere</h3>
            <div className={styles.carouselContainer}>
              <button 
                className={`${styles.carouselButton} ${styles.prevButton}`}
                onClick={() => setCurrentPage(prev => prev > 0 ? prev - 1 : Math.floor(23 / 16))}
                aria-label="Previous page"
              >
                ←
              </button>
              
              <div className={styles.logoGrid}>
                {[...Array(16)].map((_, i) => {
                  const logoIndex = currentPage * 16 + i;
                  if (logoIndex >= 23) return null; // Don't render if we're past the total logos
                  return (
                    <div key={i} className={styles.logoItem}>
                      <img 
                        src={`/logos/logo-${logoIndex + 1}.png`} 
                        alt={`Partner logo ${logoIndex + 1}`}
                        className={styles.logoImage}
                      />
                    </div>
                  );
                })}
              </div>

              <button 
                className={`${styles.carouselButton} ${styles.nextButton}`}
                onClick={() => setCurrentPage(prev => (prev + 1) * 16 >= 23 ? 0 : prev + 1)}
                aria-label="Next page"
              >
                →
              </button>
            </div>
            <div className={styles.pageIndicator}>
              {[...Array(Math.ceil(23 / 16))].map((_, i) => (
                <button
                  key={i}
                  className={`${styles.pageDot} ${currentPage === i ? styles.activeDot : ''}`}
                  onClick={() => setCurrentPage(i)}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className={styles.benefits}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Hvorfor vælge woid?</h2>
            <div className={styles.benefitGrid}>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon + ' ' + styles.iconWrapper}>
                  <CircleIcon />
                </div>
                <h3>Strategisk tilgang</h3>
                <p>Vi bygger ikke bare hjemmesider—vi skaber digitale oplevelser der driver forretningsvækst og brugerengagement.</p>
              </div>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon + ' ' + styles.iconWrapper}>
                  <SquareIcon />
                </div>
                <h3>Performance fokuseret</h3>
                <p>Lynhurtige loadingstider og optimeret performance sikrer at dine brugere forbliver engagerede og konverterer.</p>
              </div>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon + ' ' + styles.iconWrapper}>
                  <TriangleIcon />
                </div>
                <h3>Enterprise sikkerhed</h3>
                <p>Bank-niveau sikkerhedsprotokoller beskytter dine data og dine brugers information med branche best practices.</p>
              </div>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon + ' ' + styles.iconWrapper}>
                  <OrbitIcon />
                </div>
                <h3>Skalerbare løsninger</h3>
                <p>Bygget til at vokse med din virksomhed. Vores løsninger skalerer problemfrit når dine behov udvikler sig.</p>
              </div>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon + ' ' + styles.iconWrapper}>
                  <GridIcon />
                </div>
                <h3>Innovativ teknologi</h3>
                <p>Vi holder os på forkant med den nyeste teknologi og implementerer innovative løsninger der giver dig en konkurrencemæssig fordel.</p>
              </div>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon + ' ' + styles.iconWrapper}>
                  <StarIcon />
                </div>
                <h3>Dedikeret support</h3>
                <p>Vores erfarne team står klar med support og vedligeholdelse, så din digitale løsning altid performer optimalt.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Bento Grid */}
        <section className={styles.process}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Vores process</h2>
            <MagicBento 
              textAutoHide={false}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={false}
              enableMagnetism={false}
              clickEffect={false}
              spotlightRadius={400}
              particleCount={6}
              glowColor="255, 255, 255"
            />
          </div>
        </section>

        {/* Testimonials */}
        <section className={styles.testimonials}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Kunde success stories</h2>
            <div className={styles.testimonialGrid}>
              <div className={styles.testimonial}>
                <div className={styles.testimonialContent}>
                  <p>"woid transformerede vores digitale tilstedeværelse fuldstændigt. Den nye hjemmeside øgede vores konverteringer med 300%."</p>
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
                  <p>"Professionelle, responsive og resultat-drevne. woid er vores go-to partner for alle digitale projekter."</p>
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
    </div>
  );
}

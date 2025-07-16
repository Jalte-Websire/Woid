"use client";

import Link from 'next/link';
import Header from '../../components/Header';
import {
  LaptopIcon,
  CodeIcon,
  MobileIcon,
  GearsIcon,
  BrainNetworkIcon,
  GrowthGraphIcon
} from '../../components/Icons';
import BlurText from '../../components/BlurText';
import styles from './services.module.css';

export default function Services() {
  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <BlurText
              text="Vores services"
              className={styles.title}
              type="title"
            />
            <BlurText
              text="Alt hvad du har brug for til din digitale tilstedeværelse - komplette løsninger til moderne virksomheder"
              className={styles.subtitle}
              type="subtitle"
              delay={0.1}
            />
          </div>
        </section>

        {/* Services Grid */}
        <section className={styles.services}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Komplette digitale løsninger</h2>
            <p className={styles.sectionSubtitle}>Vi leverer end-to-end digitale løsninger der driver forretningsvækst og brugerengagement</p>
            <div className={styles.serviceGrid}>
              <Link href="/services/website-udvikling" className={styles.service}>
                <div className={styles.serviceIcon + ' ' + styles.iconWrapper}>
                  <LaptopIcon />
                </div>
                <h3>Website udvikling</h3>
                <p>Skræddersyede websites der konverterer og engagerer dine besøgende. Ren æstetik med kraftfuld funktionalitet.</p>
                <ul className={styles.features}>
                  <li>Responsive design til alle enheder</li>
                  <li>SEO-optimeret kode</li>
                  <li>Hurtig indlæsningstid</li>
                  <li>Skalerbar arkitektur</li>
                </ul>
              </Link>

              <Link href="/services/e-handel" className={styles.service}>
                <div className={styles.serviceIcon + ' ' + styles.iconWrapper}>
                  <CodeIcon />
                </div>
                <h3>E-handel løsninger</h3>
                <p>Professionelle webshops der sælger og vokser din virksomhed. Bygget til at konvertere og skabe loyalitet.</p>
                <ul className={styles.features}>
                  <li>Sikker betalingsbehandling</li>
                  <li>Lagerstyring integration</li>
                  <li>Mobil-venlig shopping</li>
                  <li>Avancerede analytics</li>
                </ul>
              </Link>

              <Link href="/services/app-udvikling" className={styles.service}>
                <div className={styles.serviceIcon + ' ' + styles.iconWrapper}>
                  <MobileIcon />
                </div>
                <h3>App udvikling</h3>
                <p>Native og web apps der giver dine kunder en fantastisk oplevelse. Performance og brugeroplevelse i centrum.</p>
                <ul className={styles.features}>
                  <li>iOS og Android apps</li>
                  <li>Progressive Web Apps</li>
                  <li>Push-notifikationer</li>
                  <li>Offline funktionalitet</li>
                </ul>
              </Link>

              <Link href="/services/ui-ux-design" className={styles.service}>
                <div className={styles.serviceIcon + ' ' + styles.iconWrapper}>
                  <GearsIcon />
                </div>
                <h3>UI/UX design</h3>
                <p>Brugeroplevelser der engagerer og konverterer dine besøgende. Data-drevet design med fokus på resultater.</p>
                <ul className={styles.features}>
                  <li>Brugercentreret design</li>
                  <li>Prototyping og testing</li>
                  <li>Design systemer</li>
                  <li>Konverteringsoptimering</li>
                </ul>
              </Link>

              <Link href="/services/vedligeholdelse" className={styles.service}>
                <div className={styles.serviceIcon + ' ' + styles.iconWrapper}>
                  <BrainNetworkIcon />
                </div>
                <h3>Vedligeholdelse</h3>
                <p>Kontinuerlig opdatering og support til dine digitale løsninger. Sikkerhed og performance i fokus.</p>
                <ul className={styles.features}>
                  <li>24/7 overvågning</li>
                  <li>Regelmæssige opdateringer</li>
                  <li>Teknisk support</li>
                  <li>Sikkerhedsopdateringer</li>
                </ul>
              </Link>

              <Link href="/services/digital-strategi" className={styles.service}>
                <div className={styles.serviceIcon + ' ' + styles.iconWrapper}>
                  <GrowthGraphIcon />
                </div>
                <h3>Digital strategi</h3>
                <p>Strategisk rådgivning til at maksimere din digitale tilstedeværelse. Data-drevne beslutninger for vækst.</p>
                <ul className={styles.features}>
                  <li>SEO og digital markedsføring</li>
                  <li>Analytics og rapportering</li>
                  <li>Konverteringsoptimering</li>
                  <li>Forretningsanalyse</li>
                </ul>
              </Link>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.process}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Vores proces</h2>
            <p className={styles.sectionSubtitle}>En struktureret tilgang der sikrer succes i alle projekter</p>
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

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <h2>Klar til at starte dit projekt?</h2>
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
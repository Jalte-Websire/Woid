import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { GridIcon, CrossIcon, HexagonIcon } from '../../components/Icons';
import SplitText from '../../components/SplitText';
import styles from './about.module.css';

export default function About() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <SplitText
              text="Om Woit"
              className={styles.title}
              splitType="chars"
              textAlign="center"
              duration={1}
              delay={20}
            />
            <SplitText
              text="Skaber digital excellence gennem innovativt design og cutting-edge teknologi siden 2020"
              className={styles.subtitle}
              splitType="words"
              textAlign="center"
              duration={1}
              delay={20}
            />
          </div>
        </section>

        {/* Statistik/benchmarks fjernet her */}

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.section}>
              <h2>Vores mission</h2>
              <p>
                Hos Woit tror vi på, at exceptionelle digitale oplevelser er fundamentet for moderne forretningssucces. 
                Vores mission er at transformere idéer til kraftfulde digitale løsninger der driver vækst, engagerer brugere 
                og skaber varig indflydelse i det digitale landskab.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Vores historie</h2>
              <p>
                Grundlagt i 2020 af et team af passionerede designere og udviklere, har Woit udviklet sig fra en lille 
                startup til en førende digital agentur. Vi har hjulpet hundredvis af virksomheder med at etablere deres digitale 
                tilstedeværelse og opnå bemærkelsesværdige resultater gennem innovativt design og teknologi.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Hvorfor vælge os?</h2>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <h3>Strategisk tilgang</h3>
                  <p>Vi bygger ikke bare hjemmesider—vi skaber digitale oplevelser der driver forretningsvækst</p>
                </div>
                <div className={styles.feature}>
                  <h3>Performance fokuseret</h3>
                  <p>Lynhurtige loadingstider og optimeret performance sikrer at dine brugere forbliver engagerede</p>
                </div>
                <div className={styles.feature}>
                  <h3>Enterprise sikkerhed</h3>
                  <p>Bank-niveau sikkerhedsprotokoller beskytter dine data og dine brugers information</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.teamSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Mød vores team</h2>
            <div className={styles.teamGrid}>
              <div className={styles.teamMember}>
                <div className={styles.memberPhoto}>
                  <div className={styles.avatarPlaceholder}>
                    <span>AJ</span>
                  </div>
                </div>
                <h3>Alex Jensen</h3>
                <p className={styles.memberRole}>CEO & Founder</p>
                <p>15+ års erfaring inden for digital produktudvikling</p>
              </div>
              <div className={styles.teamMember}>
                <div className={styles.memberPhoto}>
                  <div className={styles.avatarPlaceholder}>
                    <span>SH</span>
                  </div>
                </div>
                <h3>Sarah Hansen</h3>
                <p className={styles.memberRole}>Head of Design</p>
                <p>Ekspert i brugeroplevelse og kreativ retning</p>
              </div>
              <div className={styles.teamMember}>
                <div className={styles.memberPhoto}>
                  <div className={styles.avatarPlaceholder}>
                    <span>MN</span>
                  </div>
                </div>
                <h3>Mike Nielsen</h3>
                <p className={styles.memberRole}>CTO</p>
                <p>Bygger skalerbare løsninger med cutting-edge teknologi</p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className={styles.timelineSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Vores rejse</h2>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2020</div>
                <div className={styles.timelineContent}>
                  <h3>Woit grundlagt</h3>
                  <p>Startede med en vision om at skabe exceptionelle digitale oplevelser</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2021</div>
                <div className={styles.timelineContent}>
                  <h3>100+ projekter</h3>
                  <p>Nåede vores første milepæl med over 100 succesfulde projekter</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2022</div>
                <div className={styles.timelineContent}>
                  <h3>Team ekspansion</h3>
                  <p>Voksede vores team til 25+ talentfulde designere og udviklere</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2024</div>
                <div className={styles.timelineContent}>
                  <h3>500+ projekter</h3>
                  <p>Stolte af at have leveret over 500 digitale løsninger verden over</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>Klar til at starte din digitale rejse med os?</h2>
              <p>Lad vores eksperter hjælpe dig med at skabe den perfekte digitale løsning. Vi er her for at gøre dine digitale drømme til virkelighed.</p>
              <div className={styles.ctaButtons}>
                <button className={styles.primaryButton}>Start projekt</button>
                <button className={styles.secondaryButton}>Se portfolio</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 
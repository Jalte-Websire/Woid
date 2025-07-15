import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SolarSystemIcon, OrbitIcon, HexagonIcon } from '../../components/Icons';
import SplitText from '../../components/SplitText';
import styles from './contact.module.css';

export default function Contact() {
  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <SplitText
              text="Lad os skabe noget fantastisk sammen"
              className={styles.title}
              splitType="chars"
              textAlign="center"
              duration={1}
              delay={20}
            />
            <SplitText
              text="Din digitale tilstedeværelse venter - lad os bringe dine idéer til live med cutting-edge teknologi og strategisk design"
              className={styles.subtitle}
              splitType="words"
              textAlign="center"
              duration={1}
              delay={20}
            />
          </div>
        </section>

        {/* Contact Content */}
        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.contactWrapper}>
              <div className={styles.contactInfo}>
                <h2 className={styles.sectionTitle}>Kom i kontakt</h2>
                <p className={styles.sectionSubtitle}>
                  Har du et projekt i tankerne eller brug for hjælp til at forbedre din digitale tilstedeværelse? 
                  Vores eksperter er klar til at hjælpe dig med at bringe dine idéer til live.
                </p>

                <div className={styles.contactMethods}>
                  <div className={styles.contactMethod}>
                    <div>
                      <h3>Email</h3>
                      <p>info@woit.dk</p>
                      <p>support@woit.dk</p>
                    </div>
                  </div>

                  <div className={styles.contactMethod}>
                    <div>
                      <h3>Telefon</h3>
                      <p>+45 12 34 56 78</p>
                      <p>Hverdage 9-17</p>
                    </div>
                  </div>

                  <div className={styles.contactMethod}>
                    <div>
                      <h3>Adresse</h3>
                      <p>Kongens Nytorv 1</p>
                      <p>1050 København K</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.contactForm}>
                <h2 className={styles.sectionTitle}>Send os en besked</h2>
                <form className={styles.form}>
                  <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Navn</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Telefon</label>
                    <input type="tel" id="phone" name="phone" />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="company">Virksomhed</label>
                      <input type="text" id="company" name="company" />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="subject">Emne</label>
                    <select id="subject" name="subject" required>
                      <option value="">Vælg emne</option>
                        <option value="website">Nyt website</option>
                        <option value="redesign">Website redesign</option>
                        <option value="ecommerce">E-handel løsning</option>
                        <option value="maintenance">Vedligeholdelse</option>
                        <option value="consultation">Konsulentydelse</option>
                      <option value="other">Andet</option>
                    </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="budget">Budget (valgfrit)</label>
                      <select id="budget" name="budget">
                        <option value="">Vælg budget</option>
                        <option value="small">Under 50.000 kr</option>
                        <option value="medium">50.000 - 150.000 kr</option>
                        <option value="large">150.000 - 500.000 kr</option>
                        <option value="enterprise">Over 500.000 kr</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Beskriv dit projekt</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={6} 
                      required 
                      placeholder="Fortæl os om dit projekt, dine mål og hvad du håber at opnå..."
                    ></textarea>
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    Send besked
                  </button>
                </form>
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
      <Footer />
    </div>
  );
} 
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlurText from '../../components/BlurText';
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

export default function StartProjekt() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    description: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Her kan du implementere afsendelse af formular data
    console.log(formData);
  };

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <BlurText
              text="Start dit projekt"
              className={styles.title}
              type="title"
            />
            <BlurText
              text="Fortæl os om dit projekt, så hjælper vi dig med at bringe det til live"
              className={styles.subtitle}
              type="subtitle"
              delay={0.1}
            />
          </div>
        </section>

        <section className={styles.formSection}>
          <div className={styles.container}>
            <motion.div 
              className={styles.formProgress}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {[1, 2, 3].map((num) => (
                <motion.div 
                  key={num}
                  className={`${styles.progressStep} ${step >= num ? styles.active : ''}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: num * 0.1 }}
                >
                  <div className={styles.stepNumber}>{num}</div>
                  <span>{num === 1 ? 'Projekttype' : num === 2 ? 'Detaljer' : 'Kontakt'}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.form 
              className={styles.form} 
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {step === 1 && (
                <motion.div 
                  className={styles.formStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h2 {...fadeInUp}>Vælg projekttype</motion.h2>
                  <motion.div 
                    className={styles.formGrid}
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    {[
                      {
                        type: 'website',
                        title: 'Website',
                        description: 'Skræddersyet website med fokus på brugeroplevelse og konvertering'
                      },
                      {
                        type: 'ecommerce',
                        title: 'E-handel',
                        description: 'Professionel webshop med alle nødvendige funktioner'
                      },
                      {
                        type: 'app',
                        title: 'App udvikling',
                        description: 'Native eller web app med optimal performance'
                      },
                      {
                        type: 'design',
                        title: 'UI/UX Design',
                        description: 'Brugercentreret design der engagerer'
                      }
                    ].map((option, index) => (
                      <motion.label 
                        key={option.type}
                        className={styles.radioCard}
                        variants={fadeInUp}
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                      >
                        <input
                          type="radio"
                          name="projectType"
                          value={option.type}
                          checked={formData.projectType === option.type}
                          onChange={handleInputChange}
                        />
                        <div className={styles.radioContent}>
                          <h3>{option.title}</h3>
                          <p>{option.description}</p>
                        </div>
                      </motion.label>
                    ))}
                  </motion.div>
                  <motion.div 
                    className={styles.formActions}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.button 
                      type="button" 
                      className={styles.primaryButton} 
                      onClick={nextStep}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Næste
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  className={styles.formStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h2 {...fadeInUp}>Projekt detaljer</motion.h2>
                  <motion.div 
                    className={styles.formGroup}
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    <motion.label variants={fadeInUp}>Budget</motion.label>
                    <motion.select 
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className={styles.select}
                      variants={fadeInUp}
                    >
                      <option value="">Vælg budget</option>
                      <option value="25-50k">25.000 - 50.000 kr</option>
                      <option value="50-100k">50.000 - 100.000 kr</option>
                      <option value="100-250k">100.000 - 250.000 kr</option>
                      <option value="250k+">250.000+ kr</option>
                    </motion.select>
                  </motion.div>
                  <motion.div 
                    className={styles.formGroup}
                    variants={fadeInUp}
                  >
                    <label>Tidshorisont</label>
                    <select 
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className={styles.select}
                    >
                      <option value="">Vælg tidshorisont</option>
                      <option value="1-2">1-2 måneder</option>
                      <option value="2-4">2-4 måneder</option>
                      <option value="4-6">4-6 måneder</option>
                      <option value="6+">6+ måneder</option>
                    </select>
                  </motion.div>
                  <motion.div 
                    className={styles.formGroup}
                    variants={fadeInUp}
                  >
                    <label>Projektbeskrivelse</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className={styles.textarea}
                      placeholder="Fortæl os om dit projekt..."
                      rows={5}
                    />
                  </motion.div>
                  <motion.div 
                    className={styles.formActions}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.button 
                      type="button" 
                      className={styles.secondaryButton} 
                      onClick={prevStep}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Tilbage
                    </motion.button>
                    <motion.button 
                      type="button" 
                      className={styles.primaryButton} 
                      onClick={nextStep}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Næste
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  className={styles.formStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h2 {...fadeInUp}>Dine kontaktoplysninger</motion.h2>
                  <motion.div 
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    {[
                      { name: 'name', label: 'Navn', type: 'text', placeholder: 'Dit fulde navn' },
                      { name: 'email', label: 'Email', type: 'email', placeholder: 'Din email' },
                      { name: 'phone', label: 'Telefon', type: 'tel', placeholder: 'Dit telefonnummer' },
                      { name: 'company', label: 'Virksomhed', type: 'text', placeholder: 'Din virksomhed' }
                    ].map((field) => (
                      <motion.div 
                        key={field.name}
                        className={styles.formGroup}
                        variants={fadeInUp}
                      >
                        <label>{field.label}</label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleInputChange}
                          className={styles.input}
                          placeholder={field.placeholder}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                  <motion.div 
                    className={styles.formActions}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.button 
                      type="button" 
                      className={styles.secondaryButton} 
                      onClick={prevStep}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Tilbage
                    </motion.button>
                    <motion.button 
                      type="submit" 
                      className={styles.primaryButton}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send forespørgsel
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}
            </motion.form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 
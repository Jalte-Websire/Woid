"use client";

import Header from '../../components/Header';
import PricingPlans, { PricingPlan } from '../../components/PricingPlans';
import { createFeature } from '../../components/PricingIcons';
import BlurText from '../../components/BlurText';
import styles from './priser.module.css';

export default function Priser() {
  const pricingPlans: PricingPlan[] = [
    {
      name: "Starter",
      price: 15000,
      currency: "DKK",
      description: "Perfekt til små virksomheder",
      subDescription: "Essentiel web tilstedeværelse med moderne design og kernefunktionalitet. Få din virksomhed online hurtigt med en professionel hjemmeside der konverterer.",
      features: [
        createFeature("Responsiv hjemmeside design"),
        createFeature("Op til 10 sider"),
        createFeature("Kontaktformularer"),
        createFeature("SEO optimering"),
        createFeature("Mobile-first design"),
        createFeature("Content management system"),
        createFeature("Google Analytics integration"),
        createFeature("Social media integration"),
        createFeature("Basis sikkerhedsfunktioner"),
        createFeature("1 måneds support"),
        createFeature("Performance optimering"),
        createFeature("Cross-browser kompatibilitet"),
        createFeature("E-handel integration", false),
        createFeature("Skræddersyede animationer", false),
        createFeature("Avancerede analytics", false),
        createFeature("Priority support", false),
        createFeature("Skræddersyede integrationer", false),
        createFeature("Avanceret sikkerhed", false),
        createFeature("Performance overvågning", false),
      ],
      buttonText: "Vælg Starter"
    },
    {
      name: "Professional",
      price: 35000,
      currency: "DKK",
      description: "For voksende virksomheder",
      subDescription: "Omfattende digital løsning med avancerede funktioner og skræddersyet funktionalitet. Designet til at skalerer med din forretningsvækst og drive resultater.",
      features: [
        createFeature("Skræddersyet hjemmeside design"),
        createFeature("Op til 25 sider"),
        createFeature("Avancerede kontaktformularer"),
        createFeature("Avanceret SEO optimering"),
        createFeature("Mobile-first design"),
        createFeature("Skræddersyet CMS udvikling"),
        createFeature("Google Analytics & Search Console"),
        createFeature("Social media integration"),
        createFeature("Avancerede sikkerhedsfunktioner"),
        createFeature("3 måneders support"),
        createFeature("Performance optimering"),
        createFeature("Cross-browser kompatibilitet"),
        createFeature("E-handel integration"),
        createFeature("Skræddersyede animationer"),
        createFeature("Avancerede analytics"),
        createFeature("Priority support", false),
        createFeature("Skræddersyede integrationer", false),
        createFeature("Avanceret sikkerhed", false),
        createFeature("Performance overvågning", false),
      ],
      isPopular: true,
      buttonText: "Vælg Professional"
    },
    {
      name: "Enterprise",
      price: 75000,
      currency: "DKK",
      description: "For store organisationer",
      subDescription: "Fuld-skala digital transformation med enterprise-grade funktioner, skræddersyede integrationer og dedikeret support til komplekse forretningskrav.",
      features: [
        createFeature("Skræddersyet hjemmeside design"),
        createFeature("Ubegrænsede sider"),
        createFeature("Avancerede kontaktformularer"),
        createFeature("Avanceret SEO optimering"),
        createFeature("Mobile-first design"),
        createFeature("Skræddersyet CMS udvikling"),
        createFeature("Google Analytics & Search Console"),
        createFeature("Social media integration"),
        createFeature("Enterprise sikkerhedsfunktioner"),
        createFeature("12 måneders support"),
        createFeature("Performance optimering"),
        createFeature("Cross-browser kompatibilitet"),
        createFeature("E-handel integration"),
        createFeature("Skræddersyede animationer"),
        createFeature("Avancerede analytics"),
        createFeature("Priority support"),
        createFeature("Skræddersyede integrationer"),
        createFeature("Avanceret sikkerhed"),
        createFeature("Performance overvågning"),
      ],
      buttonText: "Vælg Enterprise"
    }
  ];  

  const handlePlanSelect = (planName: string) => {
    console.log(`Selected plan: ${planName}`);
    // Add your plan selection logic here
  };

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <BlurText
              text="Vores priser"
              className={styles.title}
              type="title"
            />
            <BlurText
              text="Transparente priser for exceptionelle digitale løsninger"
              className={styles.subtitle}
              type="subtitle"
              delay={0.1}
            />
          </div>
        </section>

        <PricingPlans
          plans={pricingPlans}
          onPlanSelect={handlePlanSelect}
        />
      </main>
    </div>
  );
} 
"use client";

import Link from 'next/link';
import styles from './Header.module.css';
import {
  LaptopIcon,
  CodeIcon,
  MobileIcon,
  GearsIcon,
  BrainNetworkIcon,
  GrowthGraphIcon
} from './Icons';
import InfoPanel from './SideMenu';
import { useState } from 'react';

export default function Header() {
  const [isInfoPanelOpen, setIsInfoPanelOpen] = useState(false);

  const services = [
    {
      title: 'Website Udvikling',
      icon: <LaptopIcon />,
      href: '/services/website-udvikling',
      description: 'Skræddersyede websites der konverterer'
    },
    {
      title: 'E-handel',
      icon: <CodeIcon />,
      href: '/services/e-handel',
      description: 'Professionelle webshops der sælger'
    },
    {
      title: 'App Udvikling',
      icon: <MobileIcon />,
      href: '/services/app-udvikling',
      description: 'Native og web apps med optimal performance'
    },
    {
      title: 'UI/UX Design',
      icon: <GearsIcon />,
      href: '/services/ui-ux-design',
      description: 'Brugeroplevelser der engagerer'
    },
    {
      title: 'Vedligeholdelse',
      icon: <BrainNetworkIcon />,
      href: '/services/vedligeholdelse',
      description: 'Kontinuerlig opdatering og support'
    },
    {
      title: 'Digital Strategi',
      icon: <GrowthGraphIcon />,
      href: '/services/digital-strategi',
      description: 'Strategisk rådgivning og vækst'
    }
  ];

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <div 
              className={styles.logoOrbWrapper}
              onClick={(e) => {
                e.preventDefault();
                setIsInfoPanelOpen(true);
              }}
            >
              <svg className={styles.logoOrb} viewBox="0 0 100 100" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="orbCore" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="1" />
                    <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.8" />
                  </radialGradient>
                  <radialGradient id="orbGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.4" />
                    <stop offset="70%" stopColor="#8B5CF6" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#000" stopOpacity="0" />
                  </radialGradient>
                  <filter id="orbBlur">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
                  </filter>
                </defs>
                <circle cx="50" cy="50" r="45" fill="url(#orbGlow)" filter="url(#orbBlur)" />
                <circle cx="50" cy="50" r="25" fill="url(#orbCore)" />
                <circle cx="40" cy="40" r="8" fill="white" fillOpacity="0.2" />
              </svg>
            </div>
            <div className={styles.logoDivider}></div>
            <h1 className={styles.logoText}>woid</h1>
          </Link>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link href="/projekter" className={styles.navLink}>Projekter</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/about" className={styles.navLink}>Om os</Link>
              </li>
              <li className={styles.navItem + ' ' + styles.hasDropdown}>
                <button className={styles.navLink}>
                  Services
                  <svg 
                    className={styles.dropdownArrow} 
                    width="10" 
                    height="6" 
                    viewBox="0 0 10 6" 
                    fill="none"
                  >
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className={styles.dropdown}>
                  <div className={styles.dropdownGrid}>
                    {services.map((service, index) => (
                      <Link 
                        key={index} 
                        href={service.href} 
                        className={styles.dropdownItem}
                      >
                        <div className={styles.dropdownIcon}>
                          {service.icon}
                        </div>
                        <div className={styles.dropdownContent}>
                          <h3>{service.title}</h3>
                          <p>{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
              <li className={styles.navItem}>
                <Link href="/priser" className={styles.navLink}>Priser</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/contact" className={styles.navLink}>Kontakt</Link>
              </li>
            </ul>
          </nav>
          <Link href="/start-projekt" className={styles.ctaButton}>
            Start projekt
          </Link>
          <div className={styles.spacer}></div>
        </div>
      </header>
      
      <InfoPanel 
        isOpen={isInfoPanelOpen}
        onClose={() => setIsInfoPanelOpen(false)}
      />
    </>
  );
} 
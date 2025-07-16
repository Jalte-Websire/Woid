import Image from 'next/image';
import Link from 'next/link';
import styles from './PortfolioCases.module.css';

const cases = [
  // Webshops
  {
    id: 1,
    type: 'Webshop',
    title: "CoolHubs.dk",
    description: "3D print webshop med WooCommerce og specialudviklede plugins. Inkluderer videoindhold, Google Analytics integration og SEO optimering.",
    image: "/portfolio/coolhubs.jpg",
    logo: "/portfolio/coolhubs-logo.png"
  },
  {
    id: 2,
    type: 'Webshop',
    title: "Kapslen.dk",
    description: "Moderne e-commerce løsning for kaffe og espresso produkter. Fokus på brugeroplevelse og produktpræsentation.",
    image: "/portfolio/kapslen.jpg",
    logo: "/portfolio/kapslen-logo.png"
  },
  {
    id: 3,
    type: 'Webshop',
    title: "GlasGlowe.dk",
    description: "Omfattende webshop med boligartikler. Fokus på brugervenlig navigation og sikker checkout proces.",
    image: "/portfolio/glasglowe.jpg",
    logo: "/portfolio/glasglowe-logo.png"
  },
  {
    id: 4,
    type: 'Webshop',
    title: "WhiteStars.dk",
    description: "Specialiseret webshop for kæledyrsudstyr med omfattende produktkatalog og brugervenlig navigation.",
    image: "/portfolio/whitestars.jpg",
    logo: "/portfolio/whitestars-logo.png"
  },
  {
    id: 5,
    type: 'Webshop',
    title: "TwelveSixteen.eu",
    description: "Fashion webshop med minimalistisk design og fokus på brugeroplevelse. Udviklet med Shopify.",
    image: "/portfolio/twelvesixteen.jpg",
    logo: "/portfolio/twelvesixteen-logo.png"
  },
  {
    id: 6,
    type: 'Webshop',
    title: "Techaclean.com",
    description: "Professionel webshop med rengøringsartikler og udstyr. Optimeret for B2B og B2C salg.",
    image: "/portfolio/techaclean.jpg",
    logo: "/portfolio/techaclean-logo.png"
  },
  {
    id: 7,
    type: 'Webshop',
    title: "Blidorf Jewellery",
    description: "Eksklusiv smykkewebshop med elegant design og sikker betalingsintegration.",
    image: "/portfolio/blidorf.jpg",
    logo: "/portfolio/blidorf-logo.png"
  },
  {
    id: 8,
    type: 'Webshop',
    title: "Seranoboattours.com",
    description: "Specialdesignet webshop for bådture og oplevelser. Fokus på booking og oplevelsespræsentation.",
    image: "/portfolio/seranoboattours.jpg",
    logo: "/portfolio/seranoboattours-logo.png"
  },
  // Landing Pages
  {
    id: 9,
    type: 'Landing Page',
    title: "LevForHelvede.dk",
    description: "Fit Over 50 landing page med fokus på konverteringer. Responsivt design og optimeret til leads.",
    image: "/portfolio/levforhelvede.jpg",
    logo: "/portfolio/levforhelvede-logo.png"
  },
  {
    id: 10,
    type: 'Landing Page',
    title: "FitByTurker.dk",
    description: "Personlig trænings platform med fokus på konvertering og brugerengagement.",
    image: "/portfolio/fitbyturker.jpg",
    logo: "/portfolio/fitbyturker-logo.png"
  },
  // Hjemmesider
  {
    id: 11,
    type: 'Hjemmeside',
    title: "SenecaVenture.com",
    description: "Professionel hjemmeside med fokus på bæredygtige plantebaserede ingredienser. Optimeret til international målgruppe.",
    image: "/portfolio/senecaventure.jpg",
    logo: "/portfolio/senecaventure-logo.png"
  },
  {
    id: 12,
    type: 'Hjemmeside',
    title: "BBGolf.dk",
    description: "Komplet golfklub hjemmeside med booking system, baneoversigt og medlemsportal. Inkluderer videoproduktion.",
    image: "/portfolio/bbgolf.jpg",
    logo: "/portfolio/bbgolf-logo.png"
  },
  {
    id: 13,
    type: 'Hjemmeside',
    title: "Lenes.studio",
    description: "Moderne fitnesscenter hjemmeside med holdplan, instruktørprofiler og medlemskabssystem.",
    image: "/portfolio/lenes-studio.jpg",
    logo: "/portfolio/lenes-studio-logo.png"
  },
  {
    id: 14,
    type: 'Hjemmeside',
    title: "DragoerOptik.dk",
    description: "Professionel optiker hjemmeside med online booking, produktgalleri og informationssider.",
    image: "/portfolio/dragoeroptik.jpg",
    logo: "/portfolio/dragoeroptik-logo.png"
  },
  {
    id: 15,
    type: 'Hjemmeside',
    title: "TattooCorner.dk",
    description: "Moderne tatovør hjemmeside med portfolio, booking system og kunstner profiler.",
    image: "/portfolio/tattoocorner.jpg",
    logo: "/portfolio/tattoocorner-logo.png"
  },
  {
    id: 16,
    type: 'Hjemmeside',
    title: "HNPCON.dk",
    description: "Professionel konsulent hjemmeside med fokus på services og ekspertise.",
    image: "/portfolio/hnpcon.jpg",
    logo: "/portfolio/hnpcon-logo.png"
  },
  {
    id: 17,
    type: 'Hjemmeside',
    title: "Laeu Creative",
    description: "Kreativ portfolio hjemmeside med fokus på visuelt design og brugeroplevelse.",
    image: "/portfolio/laeu.jpg",
    logo: "/portfolio/laeu-logo.png"
  },
  {
    id: 18,
    type: 'Hjemmeside',
    title: "BK-Vejle.dk",
    description: "Køreskole hjemmeside med online booking, kursusoversigt og informationssider.",
    image: "/portfolio/bk-vejle.jpg",
    logo: "/portfolio/bk-vejle-logo.png"
  },
  {
    id: 19,
    type: 'Hjemmeside',
    title: "Podovo.dk",
    description: "3D print konsulent hjemmeside med fokus på professionelle services og ekspertise.",
    image: "/portfolio/podovo.jpg",
    logo: "/portfolio/podovo-logo.png"
  },
  {
    id: 20,
    type: 'Hjemmeside',
    title: "Websire.dk",
    description: "Digital marketing bureau hjemmeside med service oversigt og case præsentationer.",
    image: "/portfolio/websire.jpg",
    logo: "/portfolio/websire-logo.png"
  },
  {
    id: 21,
    type: 'Hjemmeside',
    title: "1811Rengoring.dk",
    description: "Professionel rengøringsservice hjemmeside med online booking og service oversigt.",
    image: "/portfolio/1811rengoring.jpg",
    logo: "/portfolio/1811rengoring-logo.png"
  },
  {
    id: 22,
    type: 'Hjemmeside',
    title: "Mitlivimusikken.dk",
    description: "Personlig musikerhjemmeside for Ronnie Olsen med biografi, projekter og koncertkalender.",
    image: "/portfolio/mitlivimusikken.jpg",
    logo: "/portfolio/mitlivimusikken-logo.png"
  },
  {
    id: 23,
    type: 'Hjemmeside',
    title: "UllaSchou.dk",
    description: "Professionel terapeuthjemmeside med fokus på trauma terapi, coaching og tapping.",
    image: "/portfolio/ullaschou.jpg",
    logo: "/portfolio/ullaschou-logo.png"
  },
  {
    id: 24,
    type: 'Hjemmeside',
    title: "DitMassageVærksted.dk",
    description: "Massagepraksis hjemmeside med booking system og behandlingsoversigt.",
    image: "/portfolio/ditmassagevaerksted.jpg",
    logo: "/portfolio/ditmassagevaerksted-logo.png"
  },
  {
    id: 25,
    type: 'Hjemmeside',
    title: "ElTaco.dk",
    description: "Restaurant hjemmeside med menukort, bordbestilling og take-away funktion.",
    image: "/portfolio/eltaco.jpg",
    logo: "/portfolio/eltaco-logo.png"
  },
  {
    id: 26,
    type: 'Hjemmeside',
    title: "Frederik-Aagaard.dk",
    description: "Portfolio hjemmeside for interiørdesigner med projekter og blog.",
    image: "/portfolio/frederik-aagaard.jpg",
    logo: "/portfolio/frederik-aagaard-logo.png"
  },
  {
    id: 27,
    type: 'Hjemmeside',
    title: "Regulær.dk",
    description: "Catering og måltidskasse service med ugentlig menu og firmaordninger.",
    image: "/portfolio/regulaer.jpg",
    logo: "/portfolio/regulaer-logo.png"
  },
  {
    id: 28,
    type: 'Hjemmeside',
    title: "Statiskeberegning.dk",
    description: "Professionel ingeniørhjemmeside med fokus på statiske beregninger.",
    image: "/portfolio/statiskeberegning.jpg",
    logo: "/portfolio/statiskeberegning-logo.png"
  },
  {
    id: 29,
    type: 'Hjemmeside',
    title: "TattooAarhus.dk",
    description: "Tatovør studio hjemmeside med galleri, booking og blog.",
    image: "/portfolio/tattooaarhus.jpg",
    logo: "/portfolio/tattooaarhus-logo.png"
  },
  {
    id: 30,
    type: 'Hjemmeside',
    title: "Hoplafestudlejning.dk",
    description: "Festudlejning hjemmeside med produktkatalog og online booking.",
    image: "/portfolio/hoplafestudlejning.jpg",
    logo: "/portfolio/hoplafestudlejning-logo.png"
  },
  {
    id: 31,
    type: 'Hjemmeside',
    title: "Regnskab.gl",
    description: "Professionel regnskabsservice hjemmeside med ydelser og kontaktmuligheder.",
    image: "/portfolio/regnskab.jpg",
    logo: "/portfolio/regnskab-logo.png"
  }
];

export default function PortfolioCases() {
  return (
    <section className={styles.projects}>
      <div className={styles.grid}>
        {cases.map((case_) => (
          <div key={case_.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <span className={styles.type}>{case_.type}</span>
              <Image 
                src={case_.image} 
                alt={case_.title} 
                fill 
                className={styles.image}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className={styles.content}>
              <Image 
                src={case_.logo} 
                alt={`${case_.title} logo`} 
                width={120} 
                height={30} 
                className={styles.logo}
              />
              <h3 className={styles.title}>{case_.title}</h3>
              <p className={styles.description}>{case_.description}</p>
              <div className={styles.cta}>
                Se case
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 
import { useRef, useEffect, useState } from "react";
import "./MagicBento.css";

const MOBILE_BREAKPOINT = 768;

const cardData = [
  {
    color: "#222327",
    title: "Analyse",
    subtitle: "Research & Planlægning",
    description: "Vi analyserer dine behov og laver en\ndetaljeret plan for dit projekt",
    label: "01",
  },
  {
    color: "#222327",
    title: "Design",
    subtitle: "UI/UX Design",
    description: "Vi skaber det perfekte\ndesign der matcher din\nvirksomheds identitet",
    label: "02",
  },
  {
    color: "#222327",
    title: "Udvikling",
    subtitle: "Kodning & Integration",
    description: "Vi udvikler din løsning med fokus på kvalitet og performance",
    label: "03",
  },
  {
    color: "#222327",
    title: "Test",
    subtitle: "Kvalitetssikring",
    description: "Grundig testing af alle funktioner og brugerscenarier",
    label: "04",
  },
  {
    color: "#222327",
    title: "Launch",
    subtitle: "Go-Live &\nSupport",
    description: "Vi sikrer en problemfri\nlancering og yder support\nefter behov",
    label: "05",
  },
  {
    color: "#222327",
    title: "Optimering",
    subtitle: "Vedligeholdelse",
    description: "Løbende optimering og\nvedligeholdelse af din digitale løsning",
    label: "06",
  },
];

const BentoCardGrid = ({
  children,
  gridRef
}) => (
  <div className="card-grid" ref={gridRef}>
    {children}
  </div>
);

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

const MagicBento = () => {
  const gridRef = useRef(null);
  const isMobile = useMobileDetection();

  return (
    <BentoCardGrid gridRef={gridRef}>
      {cardData.map((card, index) => (
        <div
          key={index}
          className="card"
          style={{
            backgroundColor: card.color,
          }}
        >
          <div className="card__header">
            <div className="card__label">{card.label}</div>
          </div>
          <div className="card__content">
            <h2 className="card__title">{card.title}</h2>
            <h3 className="card__subtitle">{card.subtitle}</h3>
            <p className="card__description">{card.description}</p>
          </div>
        </div>
      ))}
    </BentoCardGrid>
  );
};

export default MagicBento; 
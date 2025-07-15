import React from 'react';

const themeGrey = 'rgba(200,200,200,0.3)';
const strokeWidth = 2.5;
const strokeLinecap = 'round';
const strokeLinejoin = 'round';
const svgArray = [
  // 1. Enkel planet (orbit med ring)
  `<svg width="100" height="100" viewBox="0 0 100 100" style="display:block;margin:auto" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="28" fill="none" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}" stroke-linejoin="${strokeLinejoin}"/>
    <ellipse cx="50" cy="54" rx="36" ry="14" fill="none" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-dasharray="6,6" stroke-linecap="${strokeLinecap}"/>
  </svg>`,

  // 2. Asteroid-firkant (let roteret, stjerner)
  `<svg width="100" height="100" viewBox="0 0 100 100" style="display:block;margin:auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="28" y="28" width="44" height="44" rx="10" fill="none" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}" stroke-linejoin="${strokeLinejoin}" transform="rotate(10 50 50)"/>
    <circle cx="18" cy="18" r="2.5" fill="${themeGrey}"/>
    <circle cx="82" cy="82" r="2.5" fill="${themeGrey}"/>
    <circle cx="50" cy="16" r="2.5" fill="${themeGrey}"/>
  </svg>`,

  // 3. Komet-trekant (pil med hale)
  `<svg width="100" height="100" viewBox="0 0 100 100" style="display:block;margin:auto" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,18 82,78 18,78" fill="none" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}" stroke-linejoin="${strokeLinejoin}"/>
    <line x1="50" y1="78" x2="50" y2="92" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}" stroke-dasharray="4,4"/>
    <line x1="44" y1="82" x2="44" y2="92" stroke="${themeGrey}" stroke-width="2" stroke-linecap="${strokeLinecap}" stroke-dasharray="3,3"/>
    <line x1="56" y1="82" x2="56" y2="92" stroke="${themeGrey}" stroke-width="2" stroke-linecap="${strokeLinecap}" stroke-dasharray="3,3"/>
  </svg>`,

  // 4. Sol-system cirkler (centreret, balanceret)
  `<svg width="100" height="100" viewBox="0 0 100 100" style="display:block;margin:auto" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="13" fill="${themeGrey}" fill-opacity="0.18"/>
    <circle cx="50" cy="50" r="28" fill="none" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-dasharray="4,4" stroke-linecap="${strokeLinecap}"/>
    <circle cx="78" cy="50" r="5" fill="${themeGrey}" fill-opacity="0.18"/>
    <circle cx="50" cy="78" r="7" fill="${themeGrey}" fill-opacity="0.18"/>
  </svg>`,

  // 5. Galakse-grid (spiral og grid)
  `<svg width="100" height="100" viewBox="0 0 100 100" style="display:block;margin:auto" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 50 Q 62 32, 84 44 Q 96 56, 86 74 Q 68 92, 50 82 Q 32 74, 44 50 Q 56 28, 74 40" fill="none" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}"/>
    <line x1="10" y1="50" x2="90" y2="50" stroke="${themeGrey}" stroke-width="2" stroke-dasharray="6,6" stroke-linecap="${strokeLinecap}"/>
    <line x1="50" y1="10" x2="50" y2="90" stroke="${themeGrey}" stroke-width="2" stroke-dasharray="6,6" stroke-linecap="${strokeLinecap}"/>
    <circle cx="50" cy="50" r="5" fill="${themeGrey}" fill-opacity="0.25"/>
  </svg>`,

  // 6. Stjerne-konstellation (stjerne, linjer)
  `<svg width="100" height="100" viewBox="0 0 100 100" style="display:block;margin:auto" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,12 60,38 88,38 65,58 74,86 50,70 26,86 35,58 12,38 40,38" fill="none" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}" stroke-linejoin="${strokeLinejoin}"/>
    <line x1="50" y1="12" x2="50" y2="70" stroke="${themeGrey}" stroke-width="1.5" stroke-linecap="${strokeLinecap}" stroke-dasharray="3,3"/>
    <circle cx="50" cy="50" r="2.5" fill="${themeGrey}"/>
  </svg>`,

  // 7. Saturn-firkanter (planet, ring, firkant)
  `<svg width="100" height="100" viewBox="0 0 100 100" style="display:block;margin:auto" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="22" fill="none" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}"/>
    <ellipse cx="50" cy="54" rx="32" ry="8" fill="none" stroke="${themeGrey}" stroke-width="2" stroke-dasharray="5,5" stroke-linecap="${strokeLinecap}"/>
    <rect x="38" y="38" width="24" height="24" rx="6" fill="none" stroke="${themeGrey}" stroke-width="2" stroke-linecap="${strokeLinecap}" stroke-linejoin="${strokeLinejoin}" transform="rotate(45 50 50)"/>
  </svg>`,

  // 8. Nebula-kryds (kryds, prikker)
  `<svg width="100" height="100" viewBox="0 0 100 100" style="display:block;margin:auto" xmlns="http://www.w3.org/2000/svg">
    <line x1="18" y1="18" x2="82" y2="82" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}" stroke-dasharray="6,6"/>
    <line x1="18" y1="82" x2="82" y2="18" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}" stroke-dasharray="6,6"/>
    <circle cx="50" cy="50" r="10" fill="none" stroke="${themeGrey}" stroke-width="2"/>
    <circle cx="28" cy="28" r="3" fill="${themeGrey}"/>
    <circle cx="72" cy="72" r="3" fill="${themeGrey}"/>
    <circle cx="36" cy="68" r="2" fill="${themeGrey}"/>
  </svg>`,

  // 9. Ellipse solsystem (ellipse, planeter)
  `<svg width="100" height="100" viewBox="0 0 100 100" style="display:block;margin:auto" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="50" rx="40" ry="26" fill="none" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-dasharray="6,6" stroke-linecap="${strokeLinecap}"/>
    <circle cx="50" cy="50" r="9" fill="${themeGrey}" fill-opacity="0.18"/>
    <circle cx="22" cy="50" r="5" fill="${themeGrey}" fill-opacity="0.18"/>
    <circle cx="78" cy="50" r="5" fill="${themeGrey}" fill-opacity="0.18"/>
    <circle cx="50" cy="24" r="4" fill="${themeGrey}" fill-opacity="0.18"/>
    <circle cx="14" cy="14" r="2.5" fill="${themeGrey}" fill-opacity="0.18"/>
    <circle cx="86" cy="86" r="2.5" fill="${themeGrey}" fill-opacity="0.18"/>
  </svg>`,

  // 10. Hexagon sort hul (hex, spiral)
  `<svg width="100" height="100" viewBox="0 0 100 100" style="display:block;margin:auto" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}" stroke-linejoin="${strokeLinejoin}"/>
    <path d="M50 50 Q 58 38, 70 46 Q 82 54, 74 66 Q 62 78, 50 70 Q 38 62, 46 50" fill="none" stroke="${themeGrey}" stroke-width="2" stroke-linecap="${strokeLinecap}" stroke-dasharray="4,4"/>
    <circle cx="50" cy="50" r="6" fill="${themeGrey}" fill-opacity="0.25"/>
  </svg>`
];

// Icon components
export const CircleIcon = () => (
  <div dangerouslySetInnerHTML={{ __html: svgArray[0] }} />
);

export const SquareIcon = () => (
  <div dangerouslySetInnerHTML={{ __html: svgArray[1] }} />
);

export const TriangleIcon = () => (
  <div dangerouslySetInnerHTML={{ __html: svgArray[2] }} />
);

export const OrbitIcon = () => (
  <div dangerouslySetInnerHTML={{ __html: svgArray[3] }} />
);

export const GridIcon = () => (
  <div dangerouslySetInnerHTML={{ __html: svgArray[4] }} />
);

export const StarIcon = () => (
  <div dangerouslySetInnerHTML={{ __html: svgArray[5] }} />
);

export const OverlappingSquaresIcon = () => (
  <div dangerouslySetInnerHTML={{ __html: svgArray[6] }} />
);

export const CrossIcon = () => (
  <div dangerouslySetInnerHTML={{ __html: svgArray[7] }} />
);

export const SolarSystemIcon = () => (
  <div dangerouslySetInnerHTML={{ __html: svgArray[8] }} />
);

export const HexagonIcon = () => (
  <div dangerouslySetInnerHTML={{ __html: svgArray[9] }} />
);

// Utility function to get a random icon
export const getRandomIcon = () => {
  const randomIndex = Math.floor(Math.random() * svgArray.length);
  return svgArray[randomIndex];
};

// Utility function to get icon by index
export const getIconByIndex = (index: number) => {
  return svgArray[index % svgArray.length];
};

// All icons as an array for easy mapping
export const allIcons = [
  CircleIcon,
  SquareIcon,
  TriangleIcon,
  OrbitIcon,
  GridIcon,
  StarIcon,
  OverlappingSquaresIcon,
  CrossIcon,
  SolarSystemIcon,
  HexagonIcon
];

export default {
  CircleIcon,
  SquareIcon,
  TriangleIcon,
  OrbitIcon,
  GridIcon,
  StarIcon,
  OverlappingSquaresIcon,
  CrossIcon,
  SolarSystemIcon,
  HexagonIcon,
  getRandomIcon,
  getIconByIndex,
  allIcons
}; 
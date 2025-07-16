import React from 'react';

const themeGrey = 'rgba(200,200,200,0.3)';
const strokeWidth = 2.5;
const strokeLinecap = 'round';
const strokeLinejoin = 'round';

// Original space-themed icons
const spaceIcons = [
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
  </svg>`
];

// New service-specific icons
const serviceIcons = [
  // 1. Laptop/Screen for Web Design
  `<svg width="100" height="100" viewBox="0 0 100 100" style="display:block;margin:auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="20" width="70" height="45" rx="4" fill="none" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}"/>
    <line x1="10" y1="70" x2="90" y2="70" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}"/>
    <rect x="40" y="65" width="20" height="5" fill="${themeGrey}"/>
    <line x1="25" y1="35" x2="75" y2="35" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}" stroke-dasharray="4,4"/>
    <line x1="25" y1="45" x2="55" y2="45" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}" stroke-dasharray="4,4"/>
  </svg>`,

  // 2. Code Brackets for Web Development
  `<svg width="100" height="100" viewBox="0 0 100 100" style="display:block;margin:auto" xmlns="http://www.w3.org/2000/svg">
    <path d="M35,30 L20,50 L35,70" fill="none" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}"/>
    <path d="M65,30 L80,50 L65,70" fill="none" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}"/>
    <line x1="45" y1="25" x2="55" y2="75" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}" stroke-dasharray="4,4"/>
  </svg>`,

  // 3. Mobile Device for Apps
  `<svg width="100" height="100" viewBox="0 0 100 100" style="display:block;margin:auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="35" y="15" width="30" height="70" rx="5" fill="none" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}"/>
    <line x1="35" y1="25" x2="65" y2="25" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}"/>
    <line x1="35" y1="75" x2="65" y2="75" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}"/>
    <circle cx="50" cy="80" r="2" fill="${themeGrey}"/>
  </svg>`,

  // 4. Gears for Automation
  `<svg width="100" height="100" viewBox="0 0 100 100" style="display:block;margin:auto" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="15" fill="none" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}"/>
    <circle cx="60" cy="60" r="15" fill="none" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}"/>
    <path d="M40,25 L40,15 M55,40 L65,40 M40,55 L40,65 M25,40 L15,40" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}"/>
    <path d="M60,45 L60,35 M75,60 L85,60 M60,75 L60,85 M45,60 L35,60" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}"/>
  </svg>`,

  // 5. Brain/Network for AI & ML
  `<svg width="100" height="100" viewBox="0 0 100 100" style="display:block;margin:auto" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="20" fill="none" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}"/>
    <circle cx="30" cy="30" r="5" fill="${themeGrey}"/>
    <circle cx="70" cy="30" r="5" fill="${themeGrey}"/>
    <circle cx="30" cy="70" r="5" fill="${themeGrey}"/>
    <circle cx="70" cy="70" r="5" fill="${themeGrey}"/>
    <line x1="30" y1="30" x2="70" y2="30" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}" stroke-dasharray="4,4"/>
    <line x1="30" y1="30" x2="30" y2="70" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}" stroke-dasharray="4,4"/>
    <line x1="70" y1="30" x2="70" y2="70" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}" stroke-dasharray="4,4"/>
    <line x1="30" y1="70" x2="70" y2="70" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}" stroke-dasharray="4,4"/>
  </svg>`,

  // 6. Graph/Growth for Digital Strategy
  `<svg width="100" height="100" viewBox="0 0 100 100" style="display:block;margin:auto" xmlns="http://www.w3.org/2000/svg">
    <path d="M20,80 L80,80 L80,20" fill="none" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}"/>
    <path d="M30,60 L45,45 L60,55 L75,30" fill="none" stroke="${themeGrey}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}"/>
    <circle cx="30" cy="60" r="3" fill="${themeGrey}"/>
    <circle cx="45" cy="45" r="3" fill="${themeGrey}"/>
    <circle cx="60" cy="55" r="3" fill="${themeGrey}"/>
    <circle cx="75" cy="30" r="3" fill="${themeGrey}"/>
  </svg>`
];

// Space theme icons
export const CircleIcon = () => (
  <div dangerouslySetInnerHTML={{ __html: spaceIcons[0] }} />
);

export const SquareIcon = () => (
  <div dangerouslySetInnerHTML={{ __html: spaceIcons[1] }} />
);

export const TriangleIcon = () => (
  <div dangerouslySetInnerHTML={{ __html: spaceIcons[2] }} />
);

export const OrbitIcon = () => (
  <div dangerouslySetInnerHTML={{ __html: spaceIcons[3] }} />
);

export const GridIcon = () => (
  <div dangerouslySetInnerHTML={{ __html: spaceIcons[4] }} />
);

export const StarIcon = () => (
  <div dangerouslySetInnerHTML={{ __html: spaceIcons[5] }} />
);

// Service specific icons
export const LaptopIcon = () => (
  <div dangerouslySetInnerHTML={{ __html: serviceIcons[0] }} />
);

export const CodeIcon = () => (
  <div dangerouslySetInnerHTML={{ __html: serviceIcons[1] }} />
);

export const MobileIcon = () => (
  <div dangerouslySetInnerHTML={{ __html: serviceIcons[2] }} />
);

export const GearsIcon = () => (
  <div dangerouslySetInnerHTML={{ __html: serviceIcons[3] }} />
);

export const BrainNetworkIcon = () => (
  <div dangerouslySetInnerHTML={{ __html: serviceIcons[4] }} />
);

export const GrowthGraphIcon = () => (
  <div dangerouslySetInnerHTML={{ __html: serviceIcons[5] }} />
);

export function SpotifyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.371-.721.49-1.101.241-3.021-1.85-6.82-2.27-11.3-1.24-.418.1-.851-.201-.95-.62-.101-.421.2-.851.62-.951 4.91-1.121 9.12-.63 12.48 1.471.39.232.49.72.251 1.099zm1.47-3.27c-.301.458-.921.611-1.381.301-3.461-2.13-8.73-2.74-12.821-1.5-.501.15-1.031-.151-1.181-.651-.15-.5.15-1.03.651-1.18 4.671-1.42 10.471-.721 14.461 1.71.45.3.6.92.271 1.38zm.129-3.401c-4.15-2.461-11.001-2.691-14.951-1.49-.61.2-1.25-.13-1.451-.74-.2-.61.131-1.25.741-1.45 4.561-1.381 12.131-1.111 16.891 1.71.57.34.761 1.082.42 1.652-.34.57-1.082.761-1.65.42z"/>
    </svg>
  );
}

export function AdobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.58 3H22v18L14.58 3zM2 3h7.42L2 21V3zm7.42 9L2 21h7.42l4.79-9H9.42z"/>
    </svg>
  );
}

export function SalesforceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.901 11.544c-.502 0-.978.102-1.413.286a3.012 3.012 0 0 0-5.663-.048 2.998 2.998 0 0 0-4.262 2.708c0 1.657 1.343 3 3 3h8.338c1.657 0 3-1.343 3-3s-1.343-2.946-3-2.946zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/>
    </svg>
  );
}

export function ShopifyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.186-.198-.198s-1.743-.136-1.743-.136-.396-.412-1.029-.753C15.911 2.719 14.025 2 14.025 2s-1.865-.034-2.062.045c-.197.079-1.7 1.562-1.7 1.562-.514.034-1.109.072-1.743.129C5.321 1.027 4.12.424 3.324.182 3.012.085 2.693 0 2.376 0 1.419 0 .857.753.857.753S.151 1.416.039 1.672C-.072 1.928.039 2.172.039 2.172s2.232 15.255 2.312 15.836c.079.581.71 1.098 1.168 1.098h9.197l.71 4.873h1.911z"/>
    </svg>
  );
}

export function StripeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.831 3.47 1.426 3.47 2.338 0 .914-.796 1.426-2.154 1.426-1.87 0-4.515-.891-6.476-2.037l-.89 5.494c2.172 1.305 5.046 2.037 8.435 2.037 2.585 0 4.728-.68 6.242-1.933 1.597-1.288 2.423-3.161 2.423-5.477.001-4.067-2.466-5.828-6.307-7.133z"/>
    </svg>
  );
}

export function SlackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.879 10.995l1.035 3.085 3.205-1.074-1.035-3.074-3.205 1.063zm-4.117 4.116l1.036 3.085 3.205-1.074-1.036-3.074-3.205 1.063zm8.238-8.238l-1.035-3.086-3.205 1.074 1.035 3.085 3.205-1.073zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-5-1.558c.24.721.42 1.485.42 2.279 0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c.934 0 1.833.162 2.671.462l1.035-3.145C14.739 2.372 13.402 2 12 2c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10c0-2.076-.595-4.015-1.626-5.651l-3.099 1.03z"/>
    </svg>
  );
}

export default {
  // Space theme icons
  CircleIcon,
  SquareIcon,
  TriangleIcon,
  OrbitIcon,
  GridIcon,
  StarIcon,
  // Service specific icons
  LaptopIcon,
  CodeIcon,
  MobileIcon,
  GearsIcon,
  BrainNetworkIcon,
  GrowthGraphIcon,
  SpotifyIcon,
  AdobeIcon,
  SalesforceIcon,
  ShopifyIcon,
  StripeIcon,
  SlackIcon
}; 
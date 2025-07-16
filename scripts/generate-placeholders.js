const fs = require('fs');
const { createCanvas } = require('canvas');

// Configuration
const config = {
  image: {
    width: 800,
    height: 600,
    background: '#1a1b1e'
  },
  logo: {
    width: 240,
    height: 60,
    background: '#2a2b2e'
  }
};

// List of cases that need placeholders
const cases = [
  'seranoboattours',
  'mitlivimusikken',
  'ullaschou',
  'ditmassagevaerksted',
  'eltaco',
  'frederik-aagaard',
  'regulaer',
  'statiskeberegning',
  'tattooaarhus',
  'hoplafestudlejning',
  'regnskab'
];

function createPlaceholder(width, height, background, text, isLogo = false) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, width, height);

  // Add some design elements
  if (!isLogo) {
    // Grid pattern
    ctx.strokeStyle = '#2a2b2e';
    ctx.lineWidth = 1;
    const gridSize = 40;
    
    for (let x = 0; x <= width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    
    for (let y = 0; y <= height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  }

  // Text
  ctx.fillStyle = '#ffffff';
  ctx.font = isLogo ? 'bold 24px Arial' : 'bold 32px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Add text with shadow
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowBlur = 10;
  ctx.fillText(text, width / 2, height / 2);

  return canvas.toBuffer();
}

// Ensure directory exists
const dir = './public/portfolio';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Generate placeholders for each case
cases.forEach(caseName => {
  // Generate main image
  const imageBuffer = createPlaceholder(
    config.image.width,
    config.image.height,
    config.image.background,
    caseName,
    false
  );
  fs.writeFileSync(`${dir}/${caseName}.jpg`, imageBuffer);

  // Generate logo
  const logoBuffer = createPlaceholder(
    config.logo.width,
    config.logo.height,
    config.logo.background,
    caseName,
    true
  );
  fs.writeFileSync(`${dir}/${caseName}-logo.png`, logoBuffer);

  console.log(`Generated placeholders for ${caseName}`);
});

console.log('All placeholders generated successfully!'); 
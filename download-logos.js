const https = require('https');
const fs = require('fs');
const path = require('path');

const logos = [
    "https://websire.dk/wp-content/uploads/2024/03/1-3.png",
    "https://websire.dk/wp-content/uploads/2024/03/2-2.png",
    "https://websire.dk/wp-content/uploads/2024/03/3-2.png",
    "https://websire.dk/wp-content/uploads/2024/03/4-1.png",
    "https://websire.dk/wp-content/uploads/2024/03/5-2.png",
    "https://websire.dk/wp-content/uploads/2024/03/6-1.png",
    "https://websire.dk/wp-content/uploads/2024/03/7-1.png",
    "https://websire.dk/wp-content/uploads/2024/03/8-1.png",
    "https://websire.dk/wp-content/uploads/2024/03/9-1.png",
    "https://websire.dk/wp-content/uploads/2024/03/10-2.png",
    "https://websire.dk/wp-content/uploads/2024/03/11-1.png",
    "https://websire.dk/wp-content/uploads/2024/03/12-1.png",
    "https://websire.dk/wp-content/uploads/2024/03/13-1.png",
    "https://websire.dk/wp-content/uploads/2024/03/14-1.png",
    "https://websire.dk/wp-content/uploads/2024/03/15-1.png",
    "https://websire.dk/wp-content/uploads/2024/03/16-1.png",
    "https://websire.dk/wp-content/uploads/2024/03/17-1.png",
    "https://websire.dk/wp-content/uploads/2024/03/19-1.png",
    "https://websire.dk/wp-content/uploads/2024/03/20-1.png",
    "https://websire.dk/wp-content/uploads/2024/03/21-1.png",
    "https://websire.dk/wp-content/uploads/2024/03/22-1.png",
    "https://websire.dk/wp-content/uploads/2024/03/23-1.png",
    "https://websire.dk/wp-content/uploads/2024/05/Design-uden-navn-2024-05-12T231042.619-1.png"
];

const downloadLogo = (url, index) => {
    const filename = `logo-${index + 1}.png`;
    const filepath = path.join(__dirname, 'public', 'logos', filename);
    
    https.get(url, (response) => {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        
        fileStream.on('finish', () => {
            console.log(`Downloaded: ${filename}`);
            fileStream.close();
        });
    }).on('error', (err) => {
        console.error(`Error downloading ${url}: ${err.message}`);
    });
};

logos.forEach((url, index) => {
    downloadLogo(url, index);
}); 
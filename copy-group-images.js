import fs from 'fs';
import path from 'path';

const artifactDir = "C:\\Users\\pc\\.gemini\\antigravity-ide\\brain\\3f91bc91-a079-48ba-9293-7c5e3da940ea";
const publicDir = "d:\\Work\\Al-Tanweer\\public";

const files = fs.readdirSync(artifactDir).filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.webp'));

files.forEach(file => {
  const source = path.join(artifactDir, file);
  let destName = file;
  
  if (file.startsWith('gemstones_cover')) destName = 'gemstones-cover.png';
  else if (file.startsWith('technical_cover')) destName = 'technical-cover.png';
  else if (file.startsWith('real_estate_cover')) destName = 'real-estate-cover.png';
  else if (file.startsWith('trading_cover')) destName = 'trading-cover.png';
  else if (file.startsWith('facilities_cover')) destName = 'facilities-cover.png';
  else return; // Skip other artifacts

  const dest = path.join(publicDir, destName);
  fs.copyFileSync(source, dest);
  console.log(`Copied ${file} -> ${destName}`);
});
console.log("Group of Companies images copied successfully!");

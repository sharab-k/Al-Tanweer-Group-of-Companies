import fs from 'fs';
import path from 'path';

const srcDir = 'C:/Users/pc/.gemini/antigravity-ide/brain/3f91bc91-a079-48ba-9293-7c5e3da940ea';
const destDir = path.join(import.meta.dirname, 'public');

const filesToCopy = {
  'service_repairs_1784553943137.png': 'service-repairs.png',
  'service_hvac_1784553912178.png': 'service-hvac.png',
  'service_cleaning_1784553932640.png': 'service-cleaning.png',
  'service_landscaping_1784553953651.png': 'service-landscaping.png',
  'service_painting_1784553971310.png': 'service-painting.png',
  'contact_manager_1784553982074.png': 'contact-manager.png'
};

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

for (const [src, dest] of Object.entries(filesToCopy)) {
  const srcPath = path.join(srcDir, src);
  const destPath = path.join(destDir, dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${src} to ${dest}`);
  } else {
    console.error(`File not found: ${srcPath}`);
  }
}

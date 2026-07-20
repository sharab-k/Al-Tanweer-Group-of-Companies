import fs from 'fs';
import path from 'path';

const componentsDir = path.join(import.meta.dirname, 'src', 'components');

// Mapping the small arbitrary font sizes to larger default Tailwind sizes
const replacements = [
  { regex: /text-\[0\.7rem\]/g, replacement: 'text-xs' },
  { regex: /text-\[0\.75rem\]/g, replacement: 'text-sm' },
  { regex: /text-\[0\.8125rem\]/g, replacement: 'text-sm' },
  { regex: /text-\[0\.875rem\]/g, replacement: 'text-base' },
  { regex: /text-\[0\.9375rem\]/g, replacement: 'text-base' },
  { regex: /text-xs(?!\w|-)/g, replacement: 'text-sm' },
  { regex: /text-sm(?!\w|-)/g, replacement: 'text-base' },
];

const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  replacements.forEach(({ regex, replacement }) => {
    content = content.replace(regex, replacement);
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated fonts in ${file}`);
  }
});

console.log("Font sizes successfully bumped!");

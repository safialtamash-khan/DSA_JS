// rename-multiple-assets.js
const fs = require('fs');
const path = require('path');

// File name arrays
const oldFiles = [
  'template.svg',
//   'service package.svg',
//   'product catalog.svg'
];

const newFiles = [
  'TEMPLATE.svg',
//   'SERVICEPACKAGE.svg',
//   'PRODUCTCATALOG.svg'
];

// Directories
const assetDir = path.join(__dirname, 'src/assets');
const codeDir = path.join(__dirname, 'src');

// Rename asset files
function renameAssets() {
  oldFiles.forEach((oldFile, index) => {
    const newFile = newFiles[index];
    const oldPath = path.join(assetDir, oldFile);
    const newPath = path.join(assetDir, newFile);

    if (!fs.existsSync(oldPath)) {
      console.warn(`⚠️  File not found: ${oldPath}`);
      return;
    }

    fs.renameSync(oldPath, newPath);
    console.log(`✅ Renamed: ${oldFile} → ${newFile}`);
  });
}

// Recursively update import paths
function updateImports(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      updateImports(fullPath); // recursive
    } else if (/\.(js|jsx|ts|tsx)$/.test(file)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;

      oldFiles.forEach((oldFile, index) => {
        const newFile = newFiles[index];
        if (content.includes(oldFile)) {
          content = content.replaceAll(oldFile, newFile);
          modified = true;
        }
      });

      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`🔁 Updated import in: ${fullPath}`);
      }
    }
  }
}

// Run
renameAssets();
updateImports(codeDir);

console.log('🎉 Done: All assets renamed and imports updated.');

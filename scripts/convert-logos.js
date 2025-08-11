#!/usr/bin/env node

/**
 * Script para convertir logos SVG a PNG
 * Requiere: npm install -g svgexport
 * Uso: node scripts/convert-logos.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const sizes = [
    { name: '16x16', size: 16 },
    { name: '32x32', size: 32 },
    { name: '48x48', size: 48 },
    { name: '64x64', size: 64 },
    { name: '128x128', size: 128 },
    { name: '192x192', size: 192 },
    { name: '256x256', size: 256 },
    { name: '512x512', size: 512 }
];

const logos = [
    'logo.svg',
    'logo-simple.svg',
    'logo-minimal.svg'
];

const publicDir = path.join(__dirname, '..', 'public');

function convertSvgToPng(svgFile, size, outputName) {
    const inputPath = path.join(publicDir, svgFile);
    const outputPath = path.join(publicDir, `${outputName}-${size.name}.png`);

    try {
        const command = `svgexport "${inputPath}" "${outputPath}" ${size.size}:${size.size}`;
        console.log(`Convirtiendo ${svgFile} a ${size.name}...`);
        execSync(command, { stdio: 'inherit' });
        console.log(`✅ ${outputPath} creado`);
    } catch (error) {
        console.error(`❌ Error convirtiendo ${svgFile} a ${size.name}:`, error.message);
    }
}

function main() {
    console.log('🎨 Iniciando conversión de logos SVG a PNG...\n');

    // Verificar si svgexport está instalado
    try {
        execSync('svgexport --version', { stdio: 'ignore' });
    } catch (error) {
        console.error('❌ Error: svgexport no está instalado.');
        console.log('Instala con: npm install -g svgexport');
        process.exit(1);
    }

    logos.forEach(logo => {
        if (fs.existsSync(path.join(publicDir, logo))) {
            const baseName = path.basename(logo, '.svg');
            console.log(`\n🔄 Procesando ${logo}...`);

            sizes.forEach(size => {
                convertSvgToPng(logo, size, baseName);
            });
        } else {
            console.log(`⚠️  ${logo} no encontrado, saltando...`);
        }
    });

    console.log('\n🎉 Conversión completada!');
    console.log('\n📁 Archivos generados:');

    logos.forEach(logo => {
        const baseName = path.basename(logo, '.svg');
        sizes.forEach(size => {
            const pngFile = `${baseName}-${size.name}.png`;
            const pngPath = path.join(publicDir, pngFile);
            if (fs.existsSync(pngPath)) {
                const stats = fs.statSync(pngPath);
                console.log(`  ${pngFile} (${(stats.size / 1024).toFixed(1)} KB)`);
            }
        });
    });

    console.log('\n💡 Tip: Puedes usar estos PNGs para compatibilidad con navegadores antiguos');
}

if (require.main === module) {
    main();
}

module.exports = { convertSvgToPng, sizes, logos };

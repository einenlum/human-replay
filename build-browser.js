#!/usr/bin/env node

import { build } from 'esbuild';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function buildBrowser() {
  try {
    // Build regular browser bundle (IIFE for CDN)
    await build({
      entryPoints: [join(__dirname, 'src/index.ts')],
      bundle: true,
      platform: 'browser',
      target: 'es2020',
      format: 'iife',
      globalName: 'HumanReplayLib',
      outfile: 'dist/browser/index.js',
      minify: false,
      sourcemap: false,
      footer: {
        js: 'var HumanReplay = HumanReplayLib.default;'
      }
    });

    // Build minified browser bundle
    await build({
      entryPoints: [join(__dirname, 'src/index.ts')],
      bundle: true,
      platform: 'browser',
      target: 'es2020',
      format: 'iife',
      globalName: 'HumanReplayLib',
      outfile: 'dist/browser/index.min.js',
      minify: true,
      sourcemap: false,
      footer: {
        js: 'var HumanReplay = HumanReplayLib.default;'
      }
    });

    console.log('✅ Browser bundles created successfully!');
    console.log('📁 Files created:');
    console.log('   - dist/browser/index.js (regular IIFE for CDN)');
    console.log('   - dist/browser/index.min.js (minified IIFE for CDN)');
    console.log('   - dist/index.js (ES6 module from TypeScript)');
    console.log('   - Source maps disabled');
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

buildBrowser();
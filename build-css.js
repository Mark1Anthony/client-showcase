/**
 * Compiles one Tailwind stylesheet per page into <page>/site.css.
 *
 * Pages used to pull https://cdn.tailwindcss.com, which downloads and compiles
 * the whole framework in the browser on every visit. Tailwind's own docs say
 * that is not for production.
 *
 * The output files are committed so GitHub Pages keeps serving the site without
 * a build step. Run `npm run build:css` after changing classes in any page.
 */

const { execFileSync } = require('node:child_process');
const { mkdtempSync, writeFileSync, rmSync, statSync } = require('node:fs');
const { tmpdir } = require('node:os');
const { join } = require('node:path');

const themes = require('./tailwind.themes.js');

const CLI = require.resolve('tailwindcss/lib/cli.js');
const INPUT = '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n';

const work = mkdtempSync(join(tmpdir(), 'showcase-css-'));
const inputPath = join(work, 'input.css');
writeFileSync(inputPath, INPUT);

let failed = false;

for (const [page, theme] of Object.entries(themes)) {
  const html = page ? `./${page}/index.html` : './index.html';
  const out = page ? `./${page}/site.css` : './site.css';

  const configPath = join(work, `${page || 'root'}.config.js`);
  writeFileSync(
    configPath,
    'module.exports = ' +
      JSON.stringify({ content: [html], theme: { extend: theme } }, null, 2) +
      ';\n',
  );

  try {
    // Call the CLI entry point through node rather than the .bin shim: the
    // Windows shim is a .cmd file, which execFileSync cannot spawn directly.
    execFileSync(
      process.execPath,
      [CLI, '-c', configPath, '-i', inputPath, '-o', out, '--minify'],
      { stdio: ['ignore', 'ignore', 'pipe'] },
    );
    const kb = (statSync(out).size / 1024).toFixed(1);
    console.log(`${out.padEnd(28)} ${kb.padStart(6)} KB`);
  } catch (error) {
    failed = true;
    console.error(`FAILED ${out}\n${error.stderr?.toString() ?? error.message}`);
  }
}

rmSync(work, { recursive: true, force: true });
process.exit(failed ? 1 : 0);

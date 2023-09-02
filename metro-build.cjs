const Metro = require('metro');

async function run() {
  const config = await Metro.loadConfig();
  await Metro.runBuild(config, {
    entry: 'index.js',
    platform: 'web',
    minify: true,
    out: './metro-web-build-out.js',
  });
}

run();

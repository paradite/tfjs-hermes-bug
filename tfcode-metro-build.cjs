const Metro = require('metro');

async function run() {
  const config = await Metro.loadConfig();
  await Metro.runBuild(config, {
    entry: 'tfcode.js',
    platform: 'web',
    minify: true,
    out: './tfcode-metro-web-build-out.js',
  });
}

run();

// https://zeit.co/blog/next5-1 Next.js 5.1: Faster Page Resolution withBundleAnalyzer
const withPlugins = require('next-compose-plugins');
const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const nextRuntimeDotenv = require('next-runtime-dotenv');

const withConfig = nextRuntimeDotenv({
  public: ['TEST'],
});

module.exports = withConfig(
  withPlugins([[withTypescript], [withCSS], [withSass], [withBundleAnalyzer]], {
    distDir: '../dist',
    analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: '../bundles/server.html',
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: '../bundles/client.html',
      },
    },
  }),
);

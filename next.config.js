/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    assetPrefix: isProd ? '/Website-Examples/' : '',
  basePath: isProd ? '/Website-Examples' : '',
    output: 'export',
   
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,
   
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
   
    // Optional: Change the output directory `out` -> `dist`
     distDir: 'docs',
  }
   
  module.exports = nextConfig
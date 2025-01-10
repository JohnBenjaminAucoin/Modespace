/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    assetPrefix: isProd ? '/Website-Examples/' : '',
  basePath: isProd ? '/Website-Examples' : '',
    output: 'export',

  }
   
  module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Отключаем Turbopack, возвращаемся к стабильному Webpack
  experimental: {
    turbopack: false,
  },
};

module.exports = nextConfig;

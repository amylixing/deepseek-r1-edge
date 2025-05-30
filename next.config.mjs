import pkg from 'next-pwa';
const withPWA = pkg.default || pkg;

const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  // 只写 Next.js 原生配置
};

export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: isDev,
})(nextConfig);

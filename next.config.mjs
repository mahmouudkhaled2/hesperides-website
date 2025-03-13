import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  locales: ['ar', 'en'],
  defaultLocale: 'ar',
  localeDetection: false,
  messagesDir: './src/i18n/messages',
});

const nextConfig = withNextIntl({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hesperdes.evyx.lol",
      },
    ],
  },
});

export default nextConfig;

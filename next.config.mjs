import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  i18n: {
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hesperdes.evyx.lol",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
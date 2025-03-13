import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  locales: ['ar', 'en'],
  defaultLocale: 'ar',
  localeDetection: false,
});

const nextConfig = {
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
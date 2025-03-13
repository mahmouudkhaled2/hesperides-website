import { withNextIntl } from 'next-intl/plugin';

const nextConfig = withNextIntl({
  locales: ['ar', 'en'],
  defaultLocale: 'ar',
  localeDetection: false,
  messagesDir: './src/i18n/messages', // تأكد أن هذا المسار موجود فعلاً
})({
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


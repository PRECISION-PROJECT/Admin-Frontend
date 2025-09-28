import { appConfig } from '.';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  appUrl: appConfig.appUrl,
  name: 'Precision Admin Platform',
  metaTitle: 'Precision Admin - Advanced Business Management',
  description: 'Streamline your business operations with Precision Admin Platform. Comprehensive dashboard for inventory management, customer appointments, and e-commerce analytics.',
  ogImage: `${appConfig.appUrl}/og-image.jpg`,
};

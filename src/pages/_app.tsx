import type { AppProps } from 'next/app';

import { MainLayout } from '@/components/layouts/MainLayout';
import { I18nProvider } from '@/i18n';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <I18nProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </I18nProvider>
  );
}

export default MyApp;

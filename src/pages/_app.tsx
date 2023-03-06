import type { AppProps } from 'next/app';

import { Layout } from '@/components/Layout';
import { I18nProvider } from '@/i18n';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <I18nProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </I18nProvider>
  );
}

export default MyApp;

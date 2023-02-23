import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

import { Layout } from '@/components/Layout';
import { I18nProvider } from '@/i18n';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <I18nProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </I18nProvider>
  );
}

export default MyApp;

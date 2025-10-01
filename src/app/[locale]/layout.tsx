import '@/styles/globals.css';
import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import ClientProviders from '../../components/ClientProviders';

export const metadata = {
  title: 'CW Enerji',
  description: 'CW Enerji yönetim ve kullanıcı paneli',
};

type Props = {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout(props: Awaited<Props>) {
  const { locale } = await props.params;
  console.log(locale);
  return (
    <html lang={locale}>
      <body>
        <ClientProviders>
          <NextIntlClientProvider locale={locale}>
            {props.children}
          </NextIntlClientProvider>
        </ClientProviders>
      </body>
    </html>
  );
}

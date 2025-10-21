import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import ClientProviders from '../../components/ClientProviders';
import AddAnimation from '@/components/ui/addAnimation';
import CustomMouseCursor from '@/components/ui/customMouseCursor';
import LayoutShell from './layoutShell';

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
          <AddAnimation />
          <CustomMouseCursor />
              <LayoutShell>
            {props.children}
          </LayoutShell>
          </NextIntlClientProvider>
        </ClientProviders>
      </body>
    </html>
  );
}

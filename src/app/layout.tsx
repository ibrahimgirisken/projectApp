import type { Metadata } from "next";
import "@/assets/css/all.min.css";
import "@/assets/scss/main.scss";
import "@/assets/css/animate.css";
import "react-modal-video/scss/modal-video.scss";

import Providers from "./providers";
import { useLocale } from "next-intl";

export const metadata: Metadata = {
  title: "Sungo - Ecology & Solar Energy Next.js Template",
  description: "Sungo - Ecology & Solar Energy Next.js and Bootstrap Template",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  return (
    <html lang={locale}>
      <body>
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "@/assets/css/all.min.css";
import "@/assets/scss/main.scss";
import "@/assets/css/animate.css";
import "react-modal-video/scss/modal-video.scss";

import AddAnimation from "@/components/ui/addAnimation";
import CustomMouseCursor from "@/components/ui/customMouseCursor";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Sungo - Ecology & Solar Energy Next.js Template",
  description: "Sungo - Ecology & Solar Energy Next.js and Bootstrap Template",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  );
}

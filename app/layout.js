import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio JV",
  description:
    "Dit is een portfolio gemaakt om de dingen te laten zien die ik heb geleerd in Sprint 3 van de minor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="px-24 pt-4">
      <head>
        <title>{metadata.title}</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/img/webcTekengebied 1.png"
        ></link>
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "@/styles/globals.css";

import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import ClientProviders from "@/components/providers/client-providers";
import { Analytics } from "@vercel/analytics/react";

const fontSans = FontSans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Совкомбанк.Трекинг",
  description: "Совкомбанк.Трекинг",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ru" suppressHydrationWarning>
      <ClientProviders>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
          )}
        >
          {children}
          <Analytics />
          <Toaster />
        </body>
      </ClientProviders>
    </html>
  );
};

export default RootLayout;

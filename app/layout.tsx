import type { Metadata } from "next";
import "@/styles/globals.css";

import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import ClientProviders from "@/components/providers/client-providers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Совкомбанк.Трекинг",
  description: "Совкомбанк.Трекинг",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head />
      <ClientProviders>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
          )}
        >
          {children}
          <Toaster />
        </body>
      </ClientProviders>
    </html>
  );
};

export default RootLayout;

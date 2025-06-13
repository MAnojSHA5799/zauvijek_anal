import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { NuqsAdapter } from "nuqs/adapters/next";
import { Toaster } from "@/components/ui/sonner";
import Providers from "@/components/layout/providers";

export const metadata: Metadata = {
  title: "Zauvijek Admin Dashboard",
  description: "Zauvijek dashboard for operational purpose",
};

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.className}`} suppressHydrationWarning>
      <body className={`overflow-hidden`}>
        <NextTopLoader showSpinner={false} />
        <NuqsAdapter>
          <Providers>
            <Toaster />
            {children}
          </Providers>
        </NuqsAdapter>
      </body>
    </html>
  );
}

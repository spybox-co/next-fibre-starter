import type { Metadata } from "next";
import { settings } from '../utils/data';
// import { Inter } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "@/styles/globals.scss";
import "@/styles/typography.scss";
import "@/common-ui/styles.scss";

// const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: settings.title,
  description: settings.description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}

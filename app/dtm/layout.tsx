import type { Metadata } from "next";
import { settings } from '@/utils/data';
import { StateProvider } from './context/store.js';
// import { Inter } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "@/styles/globals.scss";
import "@/styles/typography.scss";
import "@/common-ui/styles.scss";


import { Header} from '@/app/dtm/components/';
import { Footer } from '@/app/dtm/components/Footer';
// const inter = Inter({ subsets: ["latin"] });

// https://stackoverflow.com/questions/75674866/adding-favicon-to-nextjs-app-router-application

export const metadata: Metadata = {
  title: "settings.title",
  description: "settings.description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <StateProvider>
          {/* <Header /> */}
          {children}
          <Footer />
        </StateProvider>
      </body>
    </html>
  );
}

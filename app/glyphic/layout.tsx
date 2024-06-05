import type { Metadata } from "next";
import { settings } from '@/utils/data';
import { StateProvider } from './context/store.js';

import { App } from '@/components';

import { Space_Grotesk } from "next/font/google";
// import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';
// import "@/styles/globals.scss";
// import "@/styles/typography.scss";
// import "@/common-ui/styles.scss";

const space = Space_Grotesk({ subsets: ["latin"] });

// space.className



export const metadata: Metadata = {
  title: "Glyphic", // settings.title,
  description: settings.description,
  icons: '/glyphic/favicon.ico'
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StateProvider>
      <App appName={metadata.title}>{children}</App>
    </StateProvider>
  )
}

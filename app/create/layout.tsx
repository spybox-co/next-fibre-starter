import type { Metadata } from "next";
import { settings } from '@/utils/data';
// import { StateProvider } from './context/store.js';

import { App } from '@/components';

import "@/styles/typography.scss";
// import "@/common-ui/styles.scss";

export const metadata: Metadata = {
  title: "Create", //settings.title,
  description: settings.description,
  icons: '/faceholder/favicon.ico'
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <App appName={metadata.title}>{children}</App>
    </>
  )
}

import React, { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "GeeksHub",
  description: "BekirApp",
  content: "all",
};

const Layout = ({ children }: LayoutProps) => {
  const canonicalUrl = "https://testhediyedomain.online/";
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <body>
        <Header />
        {children}
      </body>
    </>
  );
};

export default Layout;

import React, { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Geek Store Hub",
  description: "Geek Store Hub",
  content: "all",
};

const Layout = ({ children }: LayoutProps) => {
  const canonicalUrl = "https://www.geekstorehub.com/";
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

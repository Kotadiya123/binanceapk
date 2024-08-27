import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EMI Calculator",
  description: "EMI Calculator for Home Loan, Car Loan & Personal Loan in India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2239245177332096"
     crossOrigin="anonymous"></script>
<meta name="google-adsense-account" content="ca-pub-2239245177332096"></meta>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

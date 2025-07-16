import type { Metadata } from "next";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MessengerBubble from '@/components/MessengerBubble';

export const metadata: Metadata = {
  title: "woid - High-End Web Agency",
  description: "Premium web udvikling og digitale løsninger. Ren, simpel og sofistikeret design til moderne virksomheder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className="dark">
      <body>
        <Header />
        {children}
        <Footer />
        <MessengerBubble />
      </body>
    </html>
  );
}

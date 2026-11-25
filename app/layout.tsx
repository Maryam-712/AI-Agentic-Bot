import { ClerkProvider } from '@clerk/nextjs';
import "./globals.css";
import type { Metadata } from "next";
import {Nunito} from 'next/font/google'
import Provider from './provider';

export const metadata: Metadata = {
  title: "Next.js Premium Startup Boilerplate",
  description: "Created using the ultimate interactive Next.js stack generator CLI.",
};

const nunito = Nunito({subsets : ['latin'],  variable: "--font-nunito"})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <ClerkProvider>
      <html lang="en" className={nunito.variable}>
        <body style={{ margin: 0, padding: 0 }} >
          <Provider>
            {children}
          </Provider>   
        </body>
      </html>
    </ClerkProvider>
  );
}

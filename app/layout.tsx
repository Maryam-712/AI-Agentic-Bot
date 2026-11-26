import { ClerkProvider } from '@clerk/nextjs';
import "./globals.css";
import type { Metadata } from "next";
import {Nunito, Geist } from 'next/font/google'
import Provider from './provider';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
      <html lang="en" className={cn("font-sans", geist.variable)}>
        <body style={{ margin: 0, padding: 0 }} >
          <Provider>
            {children}
          </Provider>   
        </body>
      </html>
    </ClerkProvider>
  );
}

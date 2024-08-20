import { NextUIProvider } from "@nextui-org/react";
import { Inter } from "next/font/google";
import "./globals.css";
import NotificationsProvider from "./components/NotificationsProvider";

// Components
import Navbar from "./components/Navbar";
import Session from "./components/Session";

const inter = Inter({ 
  subsets: ["latin"]
 });

export const metadata = {
  title: "HomeTribe",
  description: "The homeschooling app",
};

export default async function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className + " w-screen h-full flex "}>
        <NextUIProvider>
          <Session>
            <Navbar />
            {children}
            <NotificationsProvider />
          </Session>
        </NextUIProvider>
      </body>
    </html>
  );
}

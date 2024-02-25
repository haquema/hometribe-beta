import { Montserrat, Work_Sans } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

// Components
import Navbar from "./components/Navbar";

const workSans = Work_Sans({ 
  subsets: ["latin"]
 });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
        <title>HomeTribe</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head> 
      <body className={workSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

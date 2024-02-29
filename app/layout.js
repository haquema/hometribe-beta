import { Inter } from "next/font/google";
import "./globals.css";
import Notification from "./components/Notification";

// Components
import Navbar from "./components/Navbar";

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
      <body className={inter.className + " relative"}>
        <Navbar />
        {children}
        <Notification />
      </body>
    </html>
  );
}

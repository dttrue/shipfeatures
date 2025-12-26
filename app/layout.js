import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ShipFeatures",
  description:
    "ShipFeatures builds small, paid web tools and dashboards for founders and service businesses. Fixed scope, fast delivery, revenue-ready software.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="p-4 flex justify-end">
          <ThemeToggle />
        </div>

        
        {children}
        <Footer />
      </body>
     
    </html>
  );
}

import type {Metadata} from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Androji - Home",
  description: "Personal Web Portfolio for Alejandro Imperial",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body suppressHydrationWarning>
        <Navbar />
        <main>
          {children}
        </main>

        <Footer /> 
      </body>
    </html>
  );
}

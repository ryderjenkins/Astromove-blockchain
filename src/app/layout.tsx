'use client'
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";
import { usePathname } from 'next/navigation';
// import CustomCursor from "./components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const current = usePathname();
  const getBackgroundImage = () => {
    switch (current) {
      case '/':
        return 'bg-home';
      case '/launchpad':
        return 'bg-launchpad';
      default:
        return 'bg-default';
    }
  };

  return (
    <html lang="en">
      <body className={`${getBackgroundImage()}`}>
        {/* <CustomCursor /> */}
        <Header />
        <main>
          {children}
        </main>
        <Footer />

      </body>
    </html>
  );
}

import { Inter, Whisper } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { i18n } from "../../../i18n.config";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const whisper = Whisper({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-whisper",
  weight: "400",
});

export const metadata = {
  title: "Deniz Weber Photography",
  description: "Portfolio Website",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={`${inter.className} ${whisper.variable}`}>
        <Providers>
          <div className="flex flex-col h-screen">
            <Header lang={params.lang} />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

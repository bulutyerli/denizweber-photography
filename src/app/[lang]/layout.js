import { Inter, Lora, Whisper } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { i18n } from "../../../i18n.config";

const whisper = Whisper({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-whisper",
  weight: "400",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
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
      <body className={`${lora.className} ${whisper.variable}`}>
        <Providers>
          <div className="flex flex-col h-screen">
            <Header lang={params.lang} />
            <main className="flex-grow ">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

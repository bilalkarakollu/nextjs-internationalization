import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
};

export default appWithTranslation(App);

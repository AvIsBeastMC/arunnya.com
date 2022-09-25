import "../styles/index.css";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";
import Aos from "aos";
import { AppProps } from "next/app";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import firebase from '../../firebase'
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
    
    firebase.analytics().logEvent('page_view');
  }, [router.pathname]);
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

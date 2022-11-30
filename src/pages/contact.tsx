import React, { useEffect } from "react";

import Footer from "../components/Footer";
import Head from "next/head";
import { NextPage } from "next";
import firebase from '../../firebase'
import { useRouter } from "next/router";

const Contact: NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    firebase.analytics().logEvent("page_view");
  }, [router.pathname]);
  return (
    <>
      <Head>
        <title>Contact - Arunnya Varma</title>
        <meta name="title" content="Contact - Arunnya Varma" />
        <meta property="og:title" content="Contact - Arunnya Varma" />
        <meta property="twitter:title" content="Contact - Arunnya Varma" />
        <meta
          name="description"
          content="Find my contact details here! I am available to talk on Discord, Instagram and Email!"
        />
        <meta
          property="og:description"
          content="Find my contact details here! I am available to talk on Discord, Instagram and Email!"
        />
        <meta
          property="twitter:description"
          content="Find my contact details here! I am available to talk on Discord, Instagram and Email!"
        />
      </Head>
      <section className="text-gray-400 body-font">
        <h1 className="text-3xl mt-4 text-center border-b-2 border-gray-700 pb-8 my-6">
          <span className="baron md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            CONTACT ME
          </span>
        </h1>
        <section data-aos="fade-down" className="inter text-gray-400 body-font overflow-hidden">
          <div className="container px-5 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-700">
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-white title-font">
                    <i className="bi bi-instagram mr-1"></i> Instagram
                  </h2>
                  <a href="https://instagram.com/varmaarunnya" className="text-indigo-400 inline-flex items-center mt-2">
                    Go
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-white title-font">
                    <i className="bi bi-envelope mr-2"></i>E-mail
                  </h2>
                  <a href="mailto:me@arunnya.com" className="text-indigo-400 inline-flex items-center mt-2">
                    Mail me
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-white title-font">
                    <i className="bi bi-discord mr-1"></i> Discord
                  </h2>
                  <a className="text-indigo-400 inline-flex items-center mt-2">
                    arunnya#9580
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Contact;

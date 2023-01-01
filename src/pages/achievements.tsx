import * as React from "react";

import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";
import ReactTypingEffect from "react-typing-effect";
import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <>
      <Head>
        <title>Achievements - Arunnya Varma</title>
        <meta name="title" content="Achievements - Arunnya Varma" />
        <meta property="og:title" content="Achievements - Arunnya Varma" />
        <meta property="twitter:title" content="Achievements - Arunnya Varma" />
        <meta
          name="description"
          content="I am a Web and App Developer who focuses on building quality websites and native applications which aims to deliver content and services with great experience and presentation."
        />
        <meta
          property="og:description"
          content="I am a Web and App Developer who focuses on building quality websites and native applications which aims to deliver content and services with great experience and presentation."
        />
        <meta
          property="twitter:description"
          content="I am a Web and App Developer who focuses on building quality websites and native applications which aims to deliver content and services with great experience and presentation."
        />
      </Head>
      <h1 className="text-3xl mt-4 text-center border-b-2 border-gray-700 pb-8 my-6">
        <span className="cn md:text-4xl px-5 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Gallery
        </span>
      </h1>
      <section
        data-aos="fade-down"
        data-aos-delay="200"
        className="text-gray-400 body-font"
      >
        <section className="text-gray-400 body-font">
          <div className="container px-5 mx-auto flex flex-wrap">
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/images/techblitz1.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/images/aravalibiodiversity.png"
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="/images/techblitz2.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <a
                    href="https://aravali-tech.vercel.app/"
                    className="hover:opacity-40"
                  >
                    <img
                      alt="gallery"
                      className="w-full h-full object-cover object-center block"
                      src="/images/techblitz3.png"
                    />
                  </a>
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <a
                    href="https://arunnya.aravalibiodiversity.ml"
                    className="hover:opacity-40"
                  >
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src="/images/aravalibiodiversity2.png"
                    />
                  </a>
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/images/2.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="/images/hacktrack3.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/images/certificate.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <video
                    controls
                    poster="/images/shistech-thumbnail.jpg"
                    className="w-full object-cover h-full object-center block"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-b19b7.appspot.com/o/ARAVALI%20SHISTECH%20JOURNEY.mp4?alt=media&token=7fc12d6c-c485-46b2-9704-d915857253b2"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="/images/team-pic.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <a
                    href="https://shistech.vercel.app/"
                    className="hover:opacity-40"
                  >
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src="/images/shistech-build.jpg"
                    />
                  </a>
                </div>
                <div className="md:p-2 p-1 w-1/2">
                <a
                    href="https://www.shis.tech/"
                    className="hover:opacity-40"
                  >
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/images/shistech.jpg"
                  />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="border-1 my-4 border-gray-600" />
        <h1 className="px-24 my-4 text-center text-xl poppins py-5">
          more on the way soon! {"<3"}
        </h1>
      </section>
      <Footer />
    </>
  );
}

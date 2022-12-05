import Head from "next/head";
import { NextPage } from "next/types";
import UseAnimation from "react-useanimations";
import heart from "react-useanimations/lib/heart";
import Footer from "../components/Footer";

export default function Ishaan() {
  return (
    <>
      <Head>
        <title>HAPPY BIRTHDAY ISHAAN! - Arunnya</title>
      </Head>
      <div className="py-12">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          data-aos="fade-in"
          data-aos-delay="400"
        >
          <UseAnimation
            strokeColor="white"
            fillColor="red"
            animation={heart}
            size={50}
            autoplay={true}
            loop={true}
            speed={0.3}
          />{" "}
          <br />
        </div>
        <h1
          data-aos="fade-in"
          data-aos-delay="800"
          className="mt-2 text-center text-3xl poppins"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 font-bold inter">
            Happy Birthday Ishaan!
          </span>{" "}
        </h1>
      </div>
      <section className="text-gray-400 body-font mb-12">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div
              className="lg:w-1/3 sm:w-1/2 p-4"
              data-aos="fade-in"
              data-aos-delay="1200"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/images/hot-nigga.jpg"
                />
                <div className="px-8 py-12 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="inter title-font text-lg font-medium text-white mb-3 py-10">
                    HOT GUY ISNT HE
                  </h1>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div
                className="flex relative"
                data-aos="fade-in"
                data-aos-delay="1600"
              >
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-fit object-center"
                  src="/images/ishaan5.jpg"
                />
                <div className="px-8 py-12 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="inter title-font text-lg font-medium text-white mb-3 py-10">
                    DAMN AASTHA
                  </h1>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/3 sm:w-1/2 p-4"
              data-aos="fade-in"
              data-aos-delay="2000"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/images/ishaan3.jpg"
                />
                <div className="px-8 py-12 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="inter title-font text-lg font-medium text-white mb-3 py-10">
                    hottie nigga im jealous
                  </h1>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/3 sm:w-1/2 p-4"
              data-aos="fade-in"
              data-aos-delay="2400"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/images/ishaan4.png"
                />
                <div className="px-8 py-48 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="inter title-font text-lg font-medium text-white mb-3 py-10">
                    W
                  </h1>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/3 sm:w-1/2 p-4"
              data-aos="fade-in"
              data-aos-delay="2400"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/images/ishaan2.jpg"
                />
                <div className="px-8 py-48 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="inter title-font text-lg font-medium text-white mb-3 py-10">
                    the first W pick 🗿 🛐
                  </h1>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/3 sm:w-1/2 p-4"
              data-aos="fade-in"
              data-aos-delay="2400"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/images/ishaan6.png"
                />
                <div className="px-8 py-48 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="inter title-font text-lg font-medium text-white mb-3 py-10">
                    ran out of titles ily ♥
                  </h1>
                </div>
              </div>
            </div>
            <div
              className="w-full p-4"
              data-aos="fade-in"
              data-aos-delay="2400"
            >
              <div className="flex relative">
                <embed src="/HAPPY_BDAY (1).pdf" type="pdf"  />
                <div className="px-8 py-48 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="inter title-font text-lg font-medium text-white mb-3 py-10">
                    sam's trash
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

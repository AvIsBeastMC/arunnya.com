import React, { useEffect } from "react";

import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";
import { NextPage } from "next";
import firebase from "../../firebase";
import { useRouter } from "next/router";

const About: NextPage = () => {
  interface LinkProps {
    href: string;
    title: string;
  }
  const router = useRouter();

  useEffect(() => {
    firebase.analytics().logEvent("page_view");
  }, [router.pathname]);

  const AboutLink = (props: LinkProps) => {
    return (
      <Link href={props.href}>
        <a
          target="_blank"
          className="text-gray-400 hover:text-gray-600 border-b-2 border-gray-600"
        >
          {props.title}
        </a>
      </Link>
    );
  };

  return (
    <>
      <Head>
        <title>Skills & Hobbies - Arunnya Varma</title>
        <meta name="title" content="Skills & Hobbies - Arunnya Varma" />
        <meta property="og:title" content="Skills & Hobbies - Arunnya Varma" />
        <meta property="twitter:title" content="Skills & Hobbies - Arunnya Varma" />
        <meta
          name="description"
          content="The page where I have mentioned all of the IaaS, PaaS and other technologies which I use quite often and consider myself good or excellent at"
        />
        <meta
          property="og:description"
          content="The page where I have mentioned all of the IaaS, PaaS and other technologies which I use quite often and consider myself good or excellent at"
        />
        <meta
          property="twitter:description"
          content="The page where I have mentioned all of the IaaS, PaaS and other technologies which I use quite often and consider myself good or excellent at"
        />
      </Head>
      <section className="text-gray-400 body-font">
        <div data-aos="fade-down" id="devops" className="mx-auto mb-12">
          <h1 className="text-3xl mt-4 text-center border-b-2 border-gray-700 pb-8 my-6">
            <span className="baron md:text-4xl px-5 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              PROGRAMMING LANGUAGES
            </span>
          </h1>
          <div className="flex container mx-auto flex-wrap -m-4">
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/color/48/000000/c-sharp-logo.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  C# (with WPF)
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "220px" }}
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/fluency/48/000000/typescript.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  Node.js (w/ TypeScript)
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full" />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  Java (Minecraft Spigot Plugins Dev)
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "200px" }}
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  C++ (for Game Development)
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "100px" }}
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/color/48/000000/python--v1.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  Python
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "250px" }}
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/external-soft-fill-juicy-fish/48/000000/external-sql-coding-and-development-soft-fill-soft-fill-juicy-fish.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  SQL (MySQL & PostgreSQL)
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "200px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr data-aos="fade-down" className="my-6 border-1 border-gray-600" />
        <div data-aos="fade-down" id="backend" className="mx-auto">
          <h1 className="text-3xl mt-4 text-center border-b-2 border-gray-700 pb-8 my-6">
            <span className="baron px-5 md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              BACKEND TECHNOLOGIES
            </span>
          </h1>
          <div className="flex mx-auto flex-wrap -m-4 container">
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img
                  src="https://img.icons8.com/color/48/000000/nodejs.png"
                  alt=""
                />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  Nodejs
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full" />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img
                  src="https://img.icons8.com/color/48/000000/mongodb.png"
                  alt=""
                />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  MongoDB
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "290px" }}
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img
                  src="https://img.icons8.com/color/48/000000/firebase.png"
                  alt=""
                />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  Firebase Suite
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/color/48/000000/nginx.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  NGINX
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "290px" }}
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="images/apache.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  Bitnami Apache
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "290px" }}
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/color/48/000000/mysql-logo.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  MySQL
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/fluency/48/000000/typescript.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  TypeScript
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "270px" }}
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/color/48/000000/redux.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  Redux
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img
                  width={48}
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  Express
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full" />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/officel/48/000000/php-logo.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  PHP
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "240px" }}
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/color/48/000000/graphql.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  GraphQL
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "90px" }}
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/color/48/000000/graphql.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  NESTJS
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "90px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr data-aos="fade-down" className="my-6 border-1 border-gray-600" />
        <div id="frontend" data-aos="fade-down" className="mx-auto">
          <h1 className="text-3xl mt-4 text-center border-b-2 border-gray-700 pb-8 my-6">
            <span className="baron md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              FRONTEND TECHNOLOGIES
            </span>
          </h1>
          <div className="flex container mx-auto flex-wrap -m-4">
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="images/nextjs.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  NEXTJS (+ React)
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/color/48/000000/vue-js.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  NUXTJS (+ Vue)
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full" />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/nolan/48/react-native.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  React Native (with Expo)
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "255px" }}
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/48/000000/external-electrons-technology-prettycons-lineal-color-prettycons.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  ELECTRONJS
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="images/jquery.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  JQUERY
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img
                  src="https://img.icons8.com/color/48/000000/tailwindcss.png"
                  alt=""
                />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  TailwindCSS
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full" />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/color/48/000000/bootstrap.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  BOOTSTRAP
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full" />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="images/vuetify.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  Vuetify
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/color/48/000000/angularjs.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  AngularJS
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "120px" }}
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/fluency/48/000000/typescript.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  TypeScript
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "270px" }}
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/color/48/000000/redux.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  Redux
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/color/48/000000/flutter.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  Flutter
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "155px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr data-aos="fade-down" className="my-6 border-1 border-gray-600" />
        <div id="devops" data-aos="fade-down" className="mx-auto mb-12">
          <h1 className="text-3xl mt-4 text-center border-b-2 border-gray-700 pb-8 my-6">
            <span className="baron md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              HOSTING AND DOMAINS
            </span>
          </h1>
          <div className="flex container mx-auto flex-wrap -m-4">
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-cloudflare-provides-content-delivery-network-services-ddos-mitigation-logo-shadow-tal-revivo.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  Cloudflare
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/color/48/000000/amazon-web-services.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  Amazon Web Services
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "192px" }}
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="favicon.ico" width={48} />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  Vercel
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full" />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-color-tal-revivo.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  NETLIFY
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full" />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="images/cpanel.png" width={48} />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  cPanel
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "255px" }}
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/color/48/000000/wordpress.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  WordPress
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
              <img src="https://img.icons8.com/external-others-inmotus-design/48/000000/external-H-alphabet-others-inmotus-design-13.png"/>
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  Hostinger
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/color/48/000000/heroku.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  Heroku
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/ios-glyphs/48/000000/question-mark.png"/>
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  Freenom
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr data-aos="fade-down" className="my-6 border-1 border-gray-600" />
        <div id="video" data-aos="fade-down" className="mx-auto mb-12">
          <h1 className="text-3xl mt-4 text-center border-b-2 border-gray-700 pb-8 my-6">
            <span className="baron md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              SOFTWARES FOR PRODUCTION
            </span>
          </h1>
          <div className="flex container mx-auto flex-wrap -m-4">
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/fluency/48/000000/adobe-after-effects.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  Adobe After Effects
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/fluency/48/000000/adobe-photoshop.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  Adobe Photoshop
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full" />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/officel/48/000000/sony-vegas.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  VEGAS PRO
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full" />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/fluency/48/000000/adobe-xd.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  ADOBE XD
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full" />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/bubbles/48/000000/audacity.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  AUDACITY
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <img src="https://img.icons8.com/dusk/48/000000/fl-studio.png" />
                <h2 className="baron mt-2 text-lg text-white font-medium title-font">
                  FL STUDIO
                </h2>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "220px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr data-aos="fade-down" className="my-6 border-1 border-gray-600" />
        <div id="interests" data-aos="fade-down" className="mx-auto mb-12">
          <h1 className="text-3xl mt-4 text-center border-b-2 border-gray-700 pb-8 my-6">
            <span className="baron md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              OTHER HOBBIES/INTERESTS
            </span>
          </h1>
          <div className="flex container mx-auto flex-wrap -m-4">
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <i className="bi bi-journals" style={{ fontSize: "28px" }}></i>
                <h2 className="poppins mt-2 text-md text-white font-medium title-font">
                  Watching Documentaries and Learning about Geopolitics and Aviation ✨
                </h2>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <i className="bi bi-heart" style={{ fontSize: "28px" }}></i>
                <h2 className="poppins mt-2 text-md text-white font-medium title-font">
                  Love listening to songs of Arijit Sir! 🤎✨
                </h2>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <i className="bi bi-lightbulb" style={{ fontSize: "28px" }}></i>
                <h2 className="poppins mt-2 text-md text-white font-medium title-font">
                  Thinking of Ideas & Projects to Work On ✨
                </h2>
              </div>
            </div>
          </div>
        </div>
        <hr data-aos="fade-down" className="my-6 border-1 border-gray-600" />
        <div id="learning" data-aos="fade-down" className="mx-auto mb-12">
          <h1 className="text-3xl mt-4 text-center border-b-2 border-gray-700 pb-8 my-6">
            <span className="baron md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              WHAT AM I DOING?
            </span>
          </h1>
          <div className="flex container mx-auto flex-wrap -m-4">
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <i
                  className="bi bi-info-circle"
                  style={{ fontSize: "28px" }}
                ></i>
                <h2 className="poppins mt-2 text-md text-white font-medium title-font">
                  Learning about{" "}
                  <span className="border-b-2 border-gray-600">
                    Aviation and Engineering Sector
                  </span>{" "}
                  and {" "}
                  <span className="border-b-2 border-gray-600">
                    Finance, Management and Communications
                  </span>
                </h2>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <i
                  className="bi bi-info-circle"
                  style={{ fontSize: "28px" }}
                ></i>
                <h2 className="poppins mt-2 text-md text-white font-medium title-font">
                  Thinking About My Opportunities in the Near Future
                </h2>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <i
                  className="bi bi-info-circle"
                  style={{ fontSize: "28px" }}
                ></i>
                <h2 className="poppins mt-2 text-md text-white font-medium title-font">
                  Remembering the good old days of my life... where did they go...? :(
                </h2>
              </div>
            </div>
          </div>
        </div>
        <hr data-aos="fade-down" className="my-6 border-1 border-gray-600" />
        <div id="favourites" data-aos="fade-down" className="mx-auto mb-12">
          <h1 className="text-3xl mt-4 text-center border-b-2 border-gray-700 pb-8 my-6">
            <span className="baron mr-2 md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Favourites 
            </span>
            <span className="poppins">🌟✨</span>
          </h1>
          <div className="flex container mx-auto flex-wrap -m-4">
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <i
                  className="bi bi-film"
                  style={{ fontSize: "28px" }}
                ></i> <br />
                <h2 className="poppins mt-2 text-md text-white font-medium title-font">
                  <span className="text-sky-200">
                    All-time Favourite Movie
                  </span> <br />
                  Anand (1971)
                </h2>
                <a href="https://youtu.be/vdoMF0qwtAQ" className="hover:text-blue-400" target="_blank"><i className="bi bi-youtube"></i></a>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <i
                  className="bi bi-disc"
                  style={{ fontSize: "28px" }}
                ></i> <br />
                <h2 className="poppins mt-2 text-md text-white font-medium title-font">
                  <span className="text-sky-200">
                    All-time Favourite Song
                  </span> <br />
                  Clarity - Foxes & Zedd
                </h2>
                <a href="https://open.spotify.com/track/60wwxj6Dd9NJlirf84wr2c?autoplay=true" className="hover:text-blue-400" target="_blank"><i className="bi bi-spotify"></i></a>
              </div>
            </div>
            <div className="xl:w-1/3 w-full md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <i
                  className="bi bi-stars"
                  style={{ fontSize: "28px" }}
                ></i> <br />
                <h2 className="poppins mt-2 text-md text-white font-medium title-font">
                  <span className="text-sky-200">
                    All-time Favourite Hobby
                  </span> <br />
                  <span className="line-through">Programming</span> Sitting alone when nobody's home!
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default About;
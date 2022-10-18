import * as React from "react";

import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";
import Projects from "../typings/Projects";
import ReactTypingEffect from "react-typing-effect";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Home() {
  interface Project {
    category: string;
    date: string;
    title: string;
    builtWith: string[];
    description: string;
    features?: string[];
    i: string;
    link?: string;
    readMore: boolean;
  }

  const router = useRouter();

  const [projects, setProjects] = React.useState<Project[]>(Projects);

  const readMore = (i: number) => {
    const newProjects = projects.map((project, projectI) =>
      projectI == i ? { ...project, readMore: true } : project
    );

    setProjects(newProjects);
  };

  return (
    <>
      <Head>
        <title>Arunnya Varma - Portfolio</title>
        <meta name="title" content="Arunnya Varma - Portfolio" />
        <meta property="og:title" content="Arunnya Varma - Portfolio" />
        <meta property="twitter:title" content="Arunnya Varma - Portfolio" />
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
      <section className="text-gray-400 my-24 body-font">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img
              data-aos="fade-in"
              data-aos-delay="1000"
              className="object-cover object-center rounded"
              alt="hero"
              src="images/banner.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1
              data-aos="fade-in"
              data-aos-delay="1500"
              className="inter title-font sm:text-3xl text-2xl font-medium text-white"
            >
              Welcome! <br /> I am{" "}
              <span className="text-gray-400">
                <ReactTypingEffect
                  text={[
                    "Arunnya",
                    "a Node.js Developer",
                    "a Video Editor",
                    "a React Developer",
                    "a React Native Developer",
                    "a MongoDB Developer",
                    "a Bathroom Singer",
                    "a Chill Dude",
                  ]}
                  typingDelay={0}
                  eraseDelay={400}
                  eraseSpeed={100}
                  speed={200}
                />
              </span>
            </h1>
            <p
              className="my-4 leading-relaxed poppins"
              data-aos="fade-in"
              data-aos-delay="2000"
            >
              Here you will find my latest projects, and/or video edits,
              basically all kinds of work that I do also with information about
              all the applications and technologies I excel at!
            </p>
            <div className="text-sm" data-aos="fade-in" data-aos-delay="2500">
              <Link href="#projects">
                <button className="mt-2 mr-2 inter text-white bg-gray-700 border-0 transition-all hover:shadow-xl py-2 px-6 rounded focus:outline-none hover:bg-gray-800 rounded text-lg">
                  Projects
                </button>
              </Link>
              <Link href="/about">
                <button className="mt-2 mr-2 inter text-white bg-blue-700 border-0 transition-all hover:shadow-xl py-2 px-6 rounded focus:outline-none hover:bg-blue-800 rounded text-lg">
                  Experience
                </button>
              </Link>
              <Link href="/achievements">
                <button className="mt-2 inter text-white bg-red-700 border-0 transition-all hover:shadow-xl py-2 px-6 rounded focus:outline-none hover:bg-red-800 rounded text-lg">
                  Achievements
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        data-aos="fade-in"
        data-aos-delay="3000"
        style={{ backgroundColor: "#0a2327" }}
        className="text-gray-400 body-font bg-gray-900"
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="inter sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                PROJECTS
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="poppins lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
              These are my public projects out of all my projects that I've done
              which are mostly private projects intended for just my use..
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {projects.map((project, i) => (
              <div key={i} className="xl:w-1/2 md:w-1/2 p-4">
                <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                  <h3 className="tracking-widest poppins text-indigo-400 mb-1 text-xs font-medium title-font">
                    {project.category.toUpperCase()}
                  </h3>
                  <h2 className="inter text-lg text-white font-medium title-font">
                    {project.title}
                  </h2>
                  <p className="leading-relaxed text-base my-2">
                    {project.description}
                  </p>
                  {project.readMore ? (
                    <div data-aos="fade-in">
                      <div>
                        {project.features?.map((feature, featureI) => (
                          <>
                            {featureI == 0 ? (
                              <h1 className="my-1 inter font-bold uppercase text-gray-300">
                                <span className="border-b-2 border-gray-300 border-dotted">
                                  features
                                </span>
                              </h1>
                            ) : (
                              <></>
                            )}
                            <li
                              key={featureI}
                              style={{ color: "#9CA3AF" }}
                              className="poppins"
                            >
                              {feature}
                            </li>
                          </>
                        ))}
                      </div>
                      <div className="my-2">
                        <h1 className="my-1 inter font-bold uppercase text-gray-300">
                          <span className="border-b-2 border-gray-300 border-dotted">
                            built with
                          </span>
                        </h1>
                        {project.builtWith.map((builtWith, builtWithI) => (
                          <li
                            key={builtWithI}
                            style={{ color: "#9CA3AF" }}
                            className="poppins"
                          >
                            {builtWith}
                          </li>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => readMore(i)}
                      title="Read More"
                      className="text-white"
                    >
                      <i className="hover:text-indigo-300 text-md bi bi-arrow-down-circle" />
                    </button>
                  )}
                  {project.link ? (
                    <button
                      onClick={() => router.push(project.link)}
                      className={
                        project.readMore ? "text-white" : "ml-2 text-white"
                      }
                      title="Go to Page"
                    >
                      <i className="hover:text-indigo-300 text-md bi bi-arrow-right-circle" />
                    </button>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

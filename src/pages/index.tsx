import * as React from "react";

import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";
import ReactTypingEffect from "react-typing-effect";
import { motion } from "framer-motion";

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
  }

  const projects: Project[] = [
    {
      i: "bi bi-newspaper",
      category: "News and Posts",
      date: "4th June 2022",
      title: "EasyPolitics",
      builtWith: ["Nuxt.js", "Firebase Firestore", "TailwindCSS", "Moment"],
      description:
        "This site is just like another news website like The Times of India website or The Hindu, you can be an editor, publish posts and use HTML/Markdown tags to represent and highlight parts and portions of paragraphs.",
      features: [
        "Write Posts",
        "Comment on Posts",
        "Save Posts in your See Later",
        "Views counted for each post",
      ],
      link: "https://www.easypolitics.ml",
    },
    {
      i: "bi bi-play",
      category: "Video Sharing",
      date: "22 February 2022",
      title: "Watchbang",
      builtWith: [
        "Nuxt.js",
        "MongoDB",
        "Firebase Storage",
        "Moment",
        "Express",
        "TailwindCSS",
      ],
      description:
        "This is a video-sharing website just like YouTube, though the design has really not been focused at, like at all, the goal was just to build the basic up-and-running site which serves it's basic purpose stably.",
      features: [
        "Find latest videos",
        "Watch Videos",
        "Save and Share Videos",
        "Views counted for each video",
        "Upload your own videos by creating a channel in the dashboard",
      ],
      link: "https://www.watchbang.tk/",
    },
    {
      i: "bi bi-stopwatch",
      category: "Grocery and Ecommerce",
      date: "12 Jul 2022",
      title: "Reminders and Notifications",
      builtWith: [
        "React",
        "MongoDB",
        "Moment",
        "Express",
        "and a lot of other minor dependencies...",
      ],
      description: "Quite self-explanatory name isn't it",
      features: [
        "Schedule alarms",
        "Notifications",
        "Alert Sounds",
        "Delete Alarms",
      ],
    },
    {
      i: "bi bi-cart",
      category: "Grocery and Ecommerce",
      date: "12 Jul 2022",
      title: "Arunnya's Delight (Mobile App)",
      builtWith: [
        "React Native",
        "Expo",
        "MongoDB",
        "Moment",
        "Express",
        "and a lot of other minor dependencies...",
      ],
      description:
        "This is a Expo-powered React Native app which is equivalent to apps like Grofers or CountryDelight, payment systems, cart, items, account settings and handles, order history, and at the end, becoming a seller and selling own good, are the features that are expected to be shipped with this app",
      features: [
        "Order according to schedule calendar",
        "Cart System",
        "Purchase System",
        "Order History",
        "Items",
        "Have a detailed set of data which you can request for all the purchases ever made during the lifetime of your account.",
      ],
    },
    {
      i: "bi bi-chat-square-text",
      link: "https://www.fireforums.ml/",
      category: "Messaging and Forum",
      date: "N.A.",
      title: "Fireforums (very old)",
      builtWith: [
        "Firebase Storage",
        "Firebase Authentication",
        "Quasar",
        "Moment",
        "and a lot of other minor dependencies...",
      ],
      description:
        "This website is similar to that of WhatsApp and Twitter combined, you could post, gather upvotes, and you can also add people to your Direct Messages by entering their exact registered email address and you can talk to them in realtime.",
      features: [
        "Talk by messaging people",
        "View Threads",
        "Post Threads",
        "Views counted for each thread",
        "Create your own thread(s) and gather upvotes and views",
        "Have a profile set up as well",
      ],
    },
    {
      i: "bi bi-flag",
      category: "Tournament",
      date: "1 February 2022",
      title: "GoIndia",
      builtWith: [
        "MongoDB",
        "Nuxt.js",
        "Discord.js",
        "TailwindCSS",
        "and a lot of other minor dependencies...",
      ],
      description:
        "A website and a discord server with a discord bot was created for this Valorant tournament, registrations were possible through the website and the bot kept the discord server #teams channel up-to-date and tracked all the registered teams and also sent schedules and notifications about matches.",
    },
  ];
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
      <section
        className="text-gray-400 mt-24 mb-32 body-font"
      >
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
              Welcome! <br /> I am <span className="text-gray-400">
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
        className="text-gray-400 body-font overflow-hidden"
      >
        <h1
          id="projects"
          data-aos="fade-in"
          data-aos-delay="3500"
          className="py-12 text-center inter text-4xl uppercase text-white"
        >
          PROJECTS
        </h1>
        <div className="container px-5 pb-12 mx-auto">
          <div className="flex flex-wrap -m-12">
            {projects.map((project, i) => (
              <div
                data-aos="fade-in"
                data-aos-delay={200 + i * 100}
                key={i}
                className="p-12 md:w-1/2 flex flex-col items-start"
              >
                <span className="inline-block py-1 uppercase px-2 rounded bg-gray-900 text-gray-400 text-opacity-75 text-xs font-medium tracking-widest">
                  {project.category}
                </span>
                <h2 className="inter sm:text-3xl text-2xl title-font font-medium text-white my-4">
                  <i className={project.i + " mr-1"}></i> {project.title}
                </h2>
                <p className="poppins leading-relaxed mb-4">
                  <h1 className="uppercase text-xl font-bold inter">
                    DESCRIPTION
                  </h1>
                  <p className="mb-2">{project.description}</p>
                  {project.builtWith.map((pre, i) => (
                    <>
                      {i == 0 ? (
                        <h1 className="uppercase text-xl font-bold inter mb-1">
                          BUILT WITH
                        </h1>
                      ) : null}
                      <li>{pre}</li>
                    </>
                  ))}
                  {project.features?.map((pre, i) => (
                    <>
                      {i == 0 ? (
                        <h1 className="uppercase text-xl font-bold inter mb-1">
                          FEATURES
                        </h1>
                      ) : null}
                      <li>{pre}</li>
                    </>
                  ))}
                </p>
                {project.link ? (
                  <div className="flex items-center flex-wrap w-full">
                    <a
                      href={project.link}
                      className="text-indigo-400 inline-flex items-center"
                    >
                      Check out
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
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

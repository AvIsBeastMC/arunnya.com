import React, { useState } from "react";

import Footer from "../components/Footer";
import Head from "next/head";
import { NextPage } from "next";
import firebase from '../../firebase'
import { useRouter } from "next/router";

const Videos:NextPage = () => {
  interface VideoInterface {
    title: string;
    url: string;
    main?: boolean;
    thumbnailUrl?: string;
  }
  const router = useRouter()

  React.useEffect(() => {
    const analytics = firebase.analytics()
    analytics.logEvent('page_view')
  }, [router.pathname])

  const [videos, setVideos] = useState<VideoInterface[]>([
    {
      title: "Positions V2 🌟🌟",
      url: "https://firebasestorage.googleapis.com/v0/b/portfolio-b19b7.appspot.com/o/positionsofhomiez.mp4?alt=media&token=9fbfd65b-5ae6-4f51-858d-aee90e6aade5",
      thumbnailUrl: "/thumbnails/positions.jpg",
      main: true
    },
    {
      title: "Middle of the Night ✨",
      url: "/videos/middleofnight.mp4",
      main: true,
      thumbnailUrl: "/thumbnails/motn.jpg"
    },
    {
      title: "Patience 🔥",
      url: "/videos/patience.mp4",
    },
    {
      title: "Positions ❤",
      url: "/videos/positions.mp4",
    },
    {
      title: "Sad4whatt 😭",
      url: "/videos/sad4whatt.mp4",
    },
    {
      title: "Moment 🎥",
      url: "/videos/moment.mp4",
      thumbnailUrl: "/thumbnails/moment.jpg"
    }
  ]);

  return (
    <>
      <Head>
        <title>Montages - Arunnya Varma</title>
        <meta name="title" content="Montages - Arunnya Varma" />
        <meta property="og:title" content="Montages - Arunnya Varma" />
        <meta property="twitter:title" content="Montages - Arunnya Varma" />
        <meta
          name="description"
          content="This is where you will find my showcase of video edits and montages. Enjoy!"
        />
        <meta
          property="og:description"
          content="This is where you will find my showcase of video edits and montages. Enjoy!"
        />
        <meta
          property="twitter:description"
          content="This is where you will find my showcase of video edits and montages. Enjoy!"
        />
      </Head>
      <h1 className="text-3xl mt-4 text-center border-b-2 border-gray-700 pb-8 my-6">
        <span className="baron md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Montages Showcase
        </span>
      </h1>
      <section data-aos="fade-down" data-aos-delay="200" className="text-gray-600 body-font">
        <div className="container px-5 mx-auto mb-12">
          <div className="flex flex-wrap -m-4">
            {videos.map((video, i) => {
              return (
                <div
                  key={i}
                  data-aos="fade-down"
                  className={
                    video.main ? "p-4 md:w-1/2 w-full" : "p-4 md:w-1/4 w-full"
                  }
                >
                  <div className="h-full bg-gray-800 bg-opacity-40 p-4 rounded">
                    <video 
                      poster={video.thumbnailUrl ? video.thumbnailUrl : null}
                      title={video.title}
                      src={video.url}
                      controls
                      className="w-full"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Videos;

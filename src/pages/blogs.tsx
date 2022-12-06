import PostInterface, { FirebasePostInterface } from "../interfaces/Post";
import React, { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Head from "next/head";
import { Header } from "../components/Header";
import Link from "next/link";
import { NextPage } from "next";
import firebase from "../../firebase";
import moment from "moment";
import { useRouter } from "next/router";

export default function Blogs () {
  const router = useRouter();
  const [loaded, setLoaded] = useState<boolean>(false);
  const db = firebase.firestore();
  const [posts, setPosts] = useState<FirebasePostInterface[]>([]);

  useEffect(() => {
    db.collection("posts")
      .get()
      .then((data) => {
        const posts: FirebasePostInterface[] = [];
        data.forEach((doc) => {
          posts.push({ id: doc.id, ...(doc.data() as FirebasePostInterface) });
        });
        setPosts(posts);
        setLoaded(true);
      })
      .catch((error) => {
        alert(error);
        return router.push("/");
      });
  }, []);

  if (!loaded) {
    return (
      <>
        <Head>
          <title>Blogs - Arunnya Varma</title>
          <meta
            name="description"
            content="This is where you will find all my blog posts that I rarely do lol"
          />
          <meta
            property="og:description"
            content="This is where you will find all my blog posts that I rarely do lol"
          />
          <meta
            property="twitter:description"
            content="This is where you will find all my blog posts that I rarely do lol"
          />
        </Head>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>Blogs - Arunnya Varma</title>
          <meta
            name="description"
            content="This is where you will find all my blog posts that I rarely do lol"
          />
          <meta
            property="og:description"
            content="This is where you will find all my blog posts that I rarely do lol"
          />
          <meta
            property="twitter:description"
            content="This is where you will find all my blog posts that I rarely do lol"
          />
        </Head>
        <section data-aos="fade-down" className="text-gray-400 body-font">
          <h1 className="text-3xl mt-4 text-center border-b-2 border-gray-700 pb-8 my-6">
            <span className="baron md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              BLOGS
            </span>
          </h1>
          <section className="text-gray-400 body-font">
            <div className="container px-5 mx-auto">
              <div className="flex flex-wrap -mx-4 -my-8">
                <>
                  {posts.map((post) => (
                    <div key={post.id} className="py-8 px-4 lg:w-1/3">
                      <div className="h-full flex items-start">
                        <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                          <span className="text-gray-400 pb-2 mb-2 border-b-2 border-gray-700">
                            {moment(post.date).format("MMM")}
                          </span>
                          <span className="font-medium text-lg leading-none text-gray-300 title-font">
                            {moment(post.date).format("DD")}
                          </span>
                        </div>
                        <div className="flex-grow pl-6">
                          <h2 className="tracking-widest uppercase text-xs title-font font-medium text-indigo-400 mb-1">
                            <b className="inter">Category</b>: {post.category}
                          </h2>
                          <h1 className="title-font text-xl font-medium text-white">
                            {post.title}
                          </h1>
                          <p className="leading-relaxed my-2">
                            <b className="inter">Description</b>:{" "}
                            {post.description}
                          </p>
                          <Link href={"/post/" + post.id}>
                            <a className="text-indigo-400 inline-flex items-center hover:text-white">
                              Go <i className="ml-1 bi bi-arrow-right"></i>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              </div>
              {!posts.length ? (
                <h1 className="mt-12 sm:text-md text-center border-gray-700 pb-8">
                  <span className="poppins md:text-xl">
                    There are no blog posts at the moment... Sorry!
                  </span>
                </h1>
              ) : (
                <></>
              )}
            </div>
          </section>
        </section>
      </>
    );
  }
};
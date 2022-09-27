import PostInterface, { FirebasePostInterface } from "../interfaces/Post";
import React, { useEffect, useRef, useState } from "react";
import { Router, useRouter } from "next/router";

import AdminInterface from "../interfaces/Admin";
import { NextPage } from "next";
import firebase from "../../firebase";
import moment from "moment";
import stringReplaceAll from "string-replace-all";

const Admin: NextPage = () => {
  const router = useRouter()
  const db = firebase.firestore();
  // Auth bs
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [adminData, setAdminData] = useState<AdminInterface>(null);
  // Dashboard bs
  const [adding, setAdding] = useState<boolean>(false);
  const [postsIn, setPostsIn] = useState<boolean>(false);
  const [posts, setPosts] = useState<FirebasePostInterface[]>([]);
  const [newPostMode, setNewPostMode] = useState<boolean>(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    firebase.analytics().logEvent('page_view')
  }, [])

  const getAllPosts = () => {
    db.collection("posts")
      .get()
      .then((docs) => {
        let postsE: FirebasePostInterface[] = [];
        docs.docs.forEach((post) => {
          postsE.push({
            id: post.id,
            ...(post.data() as FirebasePostInterface),
          });
        });
        setPosts(postsE);
        setPostsIn(true);
      });
  };

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    db.collection("accounts")
      .doc(emailRef.current.value)
      .get()
      .then((account) => {
        if (
          account.exists &&
          account.data().password == passwordRef.current.value
        ) {
          setAdminData({
            id: account.id,
            ...(account.data() as AdminInterface),
          });
          getAllPosts();
          setLoggedIn(true);
        } else {
          alert("Incorrect password or no such account exists.");
        }
      });
  };

  const removePost = (id: string) => {
    db.collection("posts")
      .doc(id)
      .delete()
      .then(() => {
        alert("Successfully removed!");
        getAllPosts();
      });
  };

  const limit = (string: string, limit: number) => {  
    return string.substring(0, limit)
  }

  const addPost = (e: React.FormEvent) => {
    e.preventDefault();
    setAdding(true);
    const content = stringReplaceAll(contentRef.current.value, "\n", "<br />");
    const newPost: PostInterface = {
      title: titleRef.current.value,
      content,
      description: descriptionRef.current.value,
      category: categoryRef.current.value,
      date: Date(),
    };
    db.collection("posts")
      .add(newPost)
      .then(() => {
        alert("Success!");
        setAdding(false);
        setNewPostMode(false);
        getAllPosts();
      });
  };

  if (!loggedIn) {
    return (
      <>
        <section
          data-aos="fade-down"
          className="text-gray-400 body-font"
        >
          <h1 className="text-3xl mt-4 text-center border-b-2 border-gray-700 pb-8 my-6">
            <span className="baron md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              ADMIN (secret)
            </span>
          </h1>
          <form onSubmit={login}>
            <section className="text-gray-400 body-font relative">
              <div className="container mx-auto">
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                  <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label
                          htmlFor="name"
                          className="leading-7 text-sm text-gray-400"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          ref={emailRef}
                          autoComplete="email"
                          required
                          className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label
                          htmlFor="name"
                          className="leading-7 text-sm text-gray-400"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          ref={passwordRef}
                          required
                          className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    <div className="my-6 w-full">
                      <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </form>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section
          data-aos="fade-down"
          className="text-gray-400 body-font"
        >
          <h1 className="text-3xl mt-4 text-center border-b-2 border-gray-700 pb-8 my-6">
            <span className="baron md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              WELCOME {adminData.name}!
            </span>
          </h1>
          {/* Show normal if !newpostmode */}
          {!newPostMode ? (
            <>
              {!postsIn ? (
                <h1
                  data-aos="fade-down"
                  className="text-white text-center font-bold text-2xl poppins"
                >
                  Loading...
                </h1>
              ) : (
                <>
                  {posts.length !== 0 ? (
                    <section className="text-gray-400 body-font">
                      <div className="container px-5 mx-auto">
                        <div className="flex flex-wrap -mx-4 -my-8">
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
                                  <h2 className="tracking-widest text-xs title-font font-medium text-indigo-400 mb-1">
                                    {post.category}
                                  </h2>
                                  <h1 className="title-font text-xl font-medium text-white">
                                    {post.title}
                                  </h1>
                                  <p className="leading-relaxed my-2">
                                    {post.description}
                                  </p>
                                  <p className="text-white leading-relaxed mb-5">
                                    {limit(post.content, 10)}...
                                  </p>
                                  <button
                                    onClick={() => removePost(post.id)}
                                    className="flex text-white bg-gray-600 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                  >
                                    <i className="bi bi-x-circle"></i>
                                  </button>
                                  <button
                                    onClick={() => router.push(`/post/${post.id}`)}
                                    className="mt-2 flex text-white bg-gray-600 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                  >
                                    <i className="bi bi-arrow-90deg-right"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>
                  ) : (
                    <h1 className="text-white text-center font-bold text-2xl poppins">
                      There are no posts currently.
                    </h1>
                  )}
                  <button
                    onClick={() => setNewPostMode(true)}
                    className="flex mx-auto mt-4 text-white bg-gray-600 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    <i className="bi bi-plus-circle-dotted mr-2"></i> New Post
                  </button>
                </>
              )}
            </>
          ) : (
            <form onSubmit={addPost}>
              <section className="text-gray-400 body-font relative">
                <div className="container mx-auto">
                  <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label
                            htmlFor="name"
                            className="leading-7 text-sm text-gray-400"
                          >
                            Title
                          </label>
                          <input
                            ref={titleRef}
                            required
                            type="text"
                            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label
                            htmlFor="name"
                            className="leading-7 text-sm text-gray-400"
                          >
                            Description
                          </label>
                          <input
                            ref={descriptionRef}
                            required
                            type="text"
                            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label
                            htmlFor="name"
                            className="leading-7 text-sm text-gray-400"
                          >
                            Category
                          </label>
                          <input
                            ref={categoryRef}
                            required
                            type="text"
                            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label
                            htmlFor="name"
                            className="leading-7 text-sm text-gray-400"
                          >
                            Content
                          </label>
                          <textarea
                            required
                            ref={contentRef}
                            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        {!adding ? (
                          <>
                            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                              <i className="bi bi-plus-circle-dotted" />
                            </button>
                            <button
                              onClick={() => setNewPostMode(false)}
                              className="mt-4 flex mx-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                            >
                              <i className="bi bi-arrow-90deg-left mr-2" /> Go
                              Back
                            </button>
                          </>
                        ) : (
                          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            <i className="bi bi-cloud-upload" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </form>
          )}
        </section>
      </>
    );
  }
};

export default Admin;

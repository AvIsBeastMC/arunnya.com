import React, { useEffect, useState } from "react";

import { FirebasePostInterface } from "../../interfaces/Post";
import Head from "next/head";
import { NextPage } from "next";
import firebase from "../../../firebase";
import { useRouter } from "next/router";

const Post: NextPage = () => {
  const router = useRouter();
  let { id } = router.query;
  const [data, setData] = useState<FirebasePostInterface>(null);
  const db = firebase.firestore();

  useEffect(() => {
    if (!router.isReady && typeof id !== "string") return;
    if (typeof id == "object") id = id.toString();

    const postsRef = db.collection("posts").doc(id);

    postsRef.get().then((doc) => {
      if (doc.exists) {
        setData(doc.data() as FirebasePostInterface);
        firebase.analytics().logEvent("page_view");
      } else {
        alert("Error: No such blog post exists!");
        return router.push("/blogs");
      }
    });
  }, [router.isReady]);

  if (data) {
    return (
      <>
        <Head>
          <title>{data.title} - Arunnya Varma</title>
          <meta property="og:title" content={data.title + " - Arunnya Varma"} />
          <meta
            property="twitter:title"
            content={data.title + " - Arunnya Varma"}
          />
          <meta name="title" content={data.title + " - Arunnya Varma"} />
        </Head>
        <section
          data-aos="fade-down"
          className="text-gray-400 body-font"
        >
          <h1 className="text-3xl mt-4 text-center border-b-2 border-gray-700 pb-8 my-6">
            <span className="inter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              {data.title}
            </span>
          </h1>
          <p
            style={{ wordWrap: "break-word" }}
            className="leading-relaxed text-gray-400 mx-auto px-24 mt-4"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </section>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>Blog Post - Arunnya Varma</title>
          <meta property="og:title" content="Contact - Arunnya Varma" />
          <meta property="twitter:title" content="Contact - Arunnya Varma" />
          <meta name="title" content="Contact - Arunnya Varma" />
        </Head>
      </>
    );
  }
};

export default Post;
import React from "react";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  if (router.pathname.includes("/contact")) return <></>;
  return (
    <footer
      data-aos="fade-in"
      data-aos-delay="200"
      className="text-gray-400 border-gray-700 body-font"
      style={{ backdropFilter: "saturate(180%) blur(18px)" }}
    >
      <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <img
            alt="discord"
            width={300}
            className="rounded-md"
            src="https://camo.githubusercontent.com/8e726e8014736d7a398f82ce243e03c86b58ac96816f9efaa19580bad1787b74/68747470733a2f2f646973636f72642e6339392e6e6c2f7769646765742f7468656d652d322f3433343936383235393836333930343235362e706e67"
          />
        </a>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-600 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} Arunnya Varma —
          <a
            href="https://instagram.com/varmaarunnya"
            className="text-gray-500 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @varmaarunnya
          </a>
          <br />
          <i>Six long years of Web Development Experience!</i>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            target="_blank"
            href="https://youtube.com/arunnyavarma"
            className="text-gray-400"
          >
            <i className="text-md hover:text-blue-400 bi bi-youtube" />
          </a>
          <a
            href="https://twitter.com/its_arunnya"
            className="ml-3 text-gray-400"
          >
            <i className="text-md hover:text-blue-400 bi bi-twitter" />
          </a>
          <a
            href="https://instagram.com/varmaarunnya"
            className="ml-3 text-gray-400"
          >
            <i className="text-md hover:text-blue-400 bi bi-instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/arunnya-varma/"
            className="ml-3 text-gray-400"
          >
            <i className="text-md hover:text-blue-400 bi bi-linkedin" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

import Head from "next/head";
import Link from "next/link";
import { NavLink } from "./NavLink";
import React from "react";

export const Header: React.FC = () => {
  interface LinkInterface {
    title: string;
    href: string;
  }

  const links: LinkInterface[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Skills & Hobbies",
      href: "/about",
    },
    {
      title: "Achievements",
      href: "/achievements",
    },
    {
      title: "Montages",
      href: "/videos",
    },
    {
      title: "Blogs",
      href: "/blogs",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav
        data-aos="fade-down"
        style={{ backdropFilter: "saturate(180%) blur(18px)" }}
        className="flex flex-wrap items-center sticky transition-all top-0 z-50 justify-between px-4 py-5"
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a className="text-white hover:opacity-75 transition-all">
                <i className="bi bi-alt rounded-full text-2xl mr-3" />
                <span className="ml-1 text-xl poppins">Arunnya</span>
              </a>
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <i className="bi bi-arrow-up-square-fill text-gray-400"></i>
              ) : (
                <i className="bi bi-arrow-down-square-fill text-gray-400"></i>
              )}
            </button>
          </div>
          <div
            className={
              "transition-all lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="poppins flex flex-col mt-0 lg:flex-row list-none lg:ml-auto">
              {links.map((link) => {
                return (
                  <NavLink
                    setNavbarOpen={setNavbarOpen}
                    href={link.href}
                    title={link.title}
                  />
                );
              })}
              <NavLink
                setNavbarOpen={setNavbarOpen}
                href="https://github.com/AvIsBeastMC"
                title={"GitHub"}
              />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
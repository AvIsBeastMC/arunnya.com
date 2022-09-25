import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

interface NavProps {
  title: string;
  href: string;
  setNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavLink = (props: NavProps) => {
  const router = useRouter();
  const className = 'cursor-pointer px-3 py-2 flex items-center text-xs  poppins leading-snug text-white hover:opacity-75'

  return (
    <Link href={props.href}>
      <li className="nav-item" onClick={() => props.setNavbarOpen(false)}>
        <a className={router.pathname !== props.href ? className : `${className} text-blue-200`}>
          <span className="ml-2">{props.title}</span>
        </a>
      </li>
    </Link>
  );
};
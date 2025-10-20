"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import chaewon from "@/assets/images/tumblr_70bcd2817e8bdec461f4c56bf5073690_9f40426a_1280.jpg";

interface ListLinkProps {
  href: string;
  children: React.ReactNode;
}

const ListLink = (props: ListLinkProps) => (
  <li className="uppercase font-bold px-10 my-3 text-lg text-[#f3f3f3] transform transition-transform duration-400 hover:-translate-y-1 cursor-pointer">
     <a className="nav-underline" href={props.href}>{props.children}</a>
  </li>
);

const Links = ({ visible }: { visible: boolean }) => (
  <ul
    className={`flex transition-opacity duration-500 items-center justify-center ${
      visible ? "opacity-100" : "opacity-0"
    } mx-10`}
  >
    <ListLink href="#home"><Image
              src={chaewon}
              alt="Logo"
              className="object-cover rounded-full shadow-lg h-8 w-8"
            /></ListLink>
    <ListLink href="#about">About</ListLink>
    <ListLink href="#skills">Skills</ListLink>
    <ListLink href="#projects">Projects</ListLink>
    <ListLink href="#contact">Contact</ListLink>
  </ul>
);

export default function Navbar() {
  const [visible] = useState(true);

  return (
    <div className="z-50 flex items-center justify-center fixed w-full bg-secondary">    
          <Links visible={visible} />
      
    </div>
  );
}

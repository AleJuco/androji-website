"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import chaewon from "@/assets/images/tumblr_70bcd2817e8bdec461f4c56bf5073690_9f40426a_1280.jpg";

interface ListLinkProps {
  href: string;
  children: React.ReactNode;
}

const ListLink = (props: ListLinkProps) => (
  <li className="fade-in uppercase font-bold text-dgrey mx-7 my-2 transform transition-transform duration-400 hover:-translate-y-1 cursor-pointer">
     <a className="nav-underline" href={props.href}>{props.children}</a> 
  </li>
);

const Links = ({ visible }: { visible: boolean }) => (
  <ul
    className={`flex items-center justify-between container mx-auto py-4 px-4 transition-opacity duration-500  ${
      visible ? "opacity-100" : "opacity-0"
    } mx-10`}>

    <ListLink href="#top">
      <div className="flex items-center justify-center gap-2"><Image
               src={chaewon}
              alt="Logo"
              className="object-cover rounded-full shadow-lg h-8 w-8"/>
              <span className="ml-2 font-bold text-lg">Alejandro Imperial</span>
      </div>
    </ListLink>
    <div className="flex flex-row text-2x1">
      <ListLink href="#about">About</ListLink>
      <ListLink href="#projects">Projects</ListLink>
      <ListLink href="#skills">Skills</ListLink>
      
      <ListLink href="#contact">Contact</ListLink>
    </div>
    
  </ul>
);

export default function Navbar() {
  const [visible] = useState(true);

  return (
    <div className="z-50 flex fixed w-full bg-bg1 border-b-2 border-b-lgrey">    
          <Links visible={visible} />
      
    </div>
  );
}

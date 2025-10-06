"use client";

import { useEffect, useState } from "react";

interface ListLinkProps {
  href: string;
  children: React.ReactNode;
}

const ListLink = (props: ListLinkProps) => (
  <li
    className="uppercase font-bold ml-8 my-10 text-lg text-[#353535]
               hover:text-black transform transition-transform duration-400
               hover:-translate-y-1 cursor-pointer"
  >
    <a href={props.href}>
      {props.children}
    </a>
  </li>
);

const Links = ({ visible }: { visible: boolean }) => (
  <ul
    className={`flex transition-opacity duration-500 ${
      visible ? "opacity-100" : "opacity-0"
    }`}
  >
    <ListLink href="#about">About Me</ListLink>
    <ListLink href="#projects">Projects</ListLink>
    <ListLink href="#contact">Contact Me</ListLink>
  </ul>
);

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="fixed w-full z-50 bg-secondary">
      <div className="flex items-center justify-between px-6 py-2">
        <div className="w-24 float-left ml-2.5 pl-2 shrink-0 mb-0.5"></div>
        <div className="flex gap-9">
          <Links visible={visible} />
        </div>
      </div>
    </div>
  );
}

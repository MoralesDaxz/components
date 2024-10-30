"use client";
import Link from "next/link";
import React, { FC, useState } from "react";
type Props = {
  children: React.ReactNode;
};
const SideBar: FC<Props> = ({ children }) => {
  const [active, isActive] = useState(false);
  const defaultSide =
    "w-[70px] min-h-screen bg-[#383737] transition-all duration-500 ease-out";
  const openSide = `${defaultSide} w-[300px] max-w-[350px]`;
  const closeSide = `${defaultSide}`;

  return (
    <section className="w-full min-h-[350px] bg-[#383737] text-white flex justify-between">
      <section
        className={active ? openSide : closeSide}
        onMouseEnter={() => isActive(true)}
        onMouseLeave={() => isActive(false)}
      >
        <section className="flex flex-col pt-10">
          <Link
            href={"/contact"}
            className="w-fit hover:pl-2 transition-all duration-300"
          >
            Contacto
          </Link>
          <Link
            href={"/"}
            className="w-fit hover:pl-2 transition-all duration-300"
          >
            Inicio
          </Link>
        </section>
      </section>
      <section className="w-full min-h-full bg-[black] rounded-s-2xl">
        {children}
      </section>
    </section>
  );
};

export default SideBar;

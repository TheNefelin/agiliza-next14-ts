"use client"

import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { agbalumo } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MyMenu from "@/components/MyMenu";

const MyNavBar = () => {
  return (
    <Navbar
      shouldHideOnScroll
      className="shadow-lg"
    >
      <NavbarBrand>
        <Image
          className="w-auto h-8"
          src={"./logo.svg"}
          alt="Logo"
          height={50}
          width={50}
        ></Image>
        <Link href={"/"} className="px-4">
          <p className={`${agbalumo.className} font-bold text-2xl text-inherit text-violet-800`}>Proceso Agiliza</p>
          <p className={`${agbalumo.className} text-inherit text-gray-500`}>Te ayudamos a crecer</p>
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <MyMenu></MyMenu>
      </NavbarContent>
    </Navbar>
  );
}

export default MyNavBar
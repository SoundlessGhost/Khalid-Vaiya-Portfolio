"use client";

import React from "react";
import Link from "next/link";

import { Resources } from "./Page Components/resources";
import { LoginForm } from "./Page Components/login-form";
import { Solutions } from "@/components/Page Components/solutions";
import { WebScraping } from "@/components/Page Components/web-scraping";

export function Navbar() {
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-sm`}
    >
      <div className="flex items-center justify-between px-[64px] my-4">
        <div className="flex items-center space-x-4 justify-center">
          <Link href={"/"} className={` text-[24px] font-bold `}>
            Fastscraping
          </Link>

          <div className="hidden md:flex mt-1 items-center">
            <WebScraping />
            <Solutions />
            <Resources />
          </div>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}

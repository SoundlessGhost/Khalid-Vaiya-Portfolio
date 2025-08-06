"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { Resources } from "./resources";
import { LoginForm } from "./login-form";
import { Pricing } from "@/components/pricing";
import { WebScraping } from "@/components/web-scraping";
import { Solutions } from "@/components/solutions";

export function Navbar() {
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition duration-300 bg-black text-white`}
    >
      <div className="flex items-center justify-between px-[64px] my-4">
        <div className="flex items-center space-x-4 justify-center">
          <Link href={"/"} className={` text-[24px] font-bold `}>
            Fastscraping
          </Link>

          <div className="hidden md:flex mt-1 items-center">
            <WebScraping />
            <Solutions />
            <Pricing />
            <Resources />
          </div>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}

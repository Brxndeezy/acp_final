import { useRouter } from "next/router";
import { Component, useEffect, useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const router = useRouter();

  return (
    <div class="max-w-full h-screen bg-gray-900 px-32">
      <div class="flex flex-col">
        <div class="py-4 bg-gray-900">
          <h1 class="text-center md:text-5xl text-3xl text-white">
            <Link href="/home">Acute Catering & Projects</Link>
          </h1>
        </div>
        <ul class="justify-center items-center border-2 border-gray-900 w-full p-8 space-y-12">
          <li class=" bg-white text-gray-900 py-6 hover:bg- hover:text-white hover:bg-blue-700 w-full hover:border-white border-gray-900 rounded-xl cursor-pointer">
            <div class="text-xl font-bold text-center">
              <Link href="/home">Home</Link>
            </div>
          </li>
          <li class="bg-white text-gray-900 py-6  hover:text-white hover:bg-blue-700  w-full border-2 border-gray-900 rounded-xl cursor-pointer">
            <div class="text-xl font-bold text-center">
              <Link href="/expenses">Manage Expenses</Link>
            </div>
          </li>

          <li class="bg-white text-gray-900 py-6 hover:bg-blue-700  hover:text-white w-full  border-2 border-gray-900 rounded-xl cursor-pointer">
            <div class="text-xl font-bold text-center">
              <Link href="/projects">Manage Projects</Link>
            </div>
          </li>

          <li class="bg-white text-gray-900 py-6 hover:bg-blue-700  hover:text-white w-full border-2 border-gray-900 rounded-xl cursor-pointer">
            <div class="text-xl font-bold text-center">
              <Link href="/timesheet">Manage Timesheet</Link>
            </div>
          </li>
          <li class="bg-white text-gray-900 py-6 hover:bg-blue-700  hover:text-white w-full border-2 border-gray-900 rounded-xl cursor-pointer">
            <div class="text-xl font-bold text-center">
              <Link href="../login">Sign Out</Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

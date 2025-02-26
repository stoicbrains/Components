"use client"
import React from "react";
import employees from "./assets/Data";
import Pagination from "./Component/Pagination";

const Page = () => {
  return (
    <div className="bg-gray-900 text-justify font-serif text-xs text-purple-600 p-4 h-screen w-screen">
      <h1 className="font-bold text-5xl mx-auto text-center">Pagination and controls Component </h1>
      <Pagination/>
    </div>
  );
};

export default Page;

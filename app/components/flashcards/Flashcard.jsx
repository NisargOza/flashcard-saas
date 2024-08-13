"use client";
import React from "react";

export default function Flashcard({ front, back }) {
  return (
    <div className="group h-full w-full [perspective:1000px]">
      <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-blue-300 p-4 text-center shadow-xl [backface-visibility:hidden]">
          <p className="text-2xl font-bold">{front}</p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-green-300 p-4 text-center shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p className="text-2xl font-bold">{back}</p>
        </div>
      </div>
    </div>
  );
}
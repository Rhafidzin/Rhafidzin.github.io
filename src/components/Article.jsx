import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import java from "../assets/java.svg";
import react from "../assets/react.svg";
import js from "../assets/js.png";
import tailwind from "../assets/tailwind.png";
import php from "../assets/php.png";
import postgresql from "../assets/postgresql.svg";
import vite from "../assets/vite.svg";
import mysql from "../assets/mysql.svg";
import springboot from "../assets/spring_boot.svg";
import next from "../assets/next.png";

export default function Article() {
  return (
    <>
      <div className="px-32 flex flex-col py-12">
        <h2 className="text-4xl font-medium pb-12 text-center">Tech Stack</h2>
        <div className="flex items-center justify-between w-1/2 lg:w-full">
          <img
            src={html}
            alt=""
            className="max-h-32 w-28 hover:-translate-y-1 "
          />
          <img
            src={css}
            alt=""
            className="max-h-32 w-28 hover:-translate-y-1"
          />
          <img src={js} alt="" className="max-h-32 w-28 hover:-translate-y-1" />
          <img
            src={tailwind}
            alt=""
            className="max-h-20 w-28 hover:-translate-y-1"
          />
          <img src={react} alt="" className="h-20 hover:-translate-y-1" />
          <img
            src={vite}
            alt=""
            className="max-h-32 w-28 hover:-translate-y-1"
          />
          <img
            src={next}
            alt=""
            className="max-h-32 w-28 hover:-translate-y-1 mx-4"
          />
          <img
            src={java}
            alt=""
            className="max-h-32 w-28 hover:-translate-y-1"
          />
          <img
            src={php}
            alt=""
            className="max-h-32 w-28 hover:-translate-y-1"
          />
          <img
            src={postgresql}
            alt=""
            className="max-h-32 w-28 hover:-translate-y-1"
          />
          <img
            src={mysql}
            alt=""
            className="max-h-32 w-28 hover:-translate-y-1"
          />
          <img
            src={springboot}
            alt=""
            className="max-h-32 w-28 hover:-translate-y-1"
          />
        </div>
      </div>
    </>
  );
}

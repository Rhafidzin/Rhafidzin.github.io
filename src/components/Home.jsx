import React from "react";

import photo from "../assets/photo.png";

export default function Home() {
  return (
    <div className="px-32  grid grid-cols-2 gap-8 ">
      <main className="grid gap-4 py-24">
        <strong className="text-2xl ">Hello!</strong>
        <h1 className="text-3xl font-bold text-cyan-300">
          I am Rahman Hafidzin
        </h1>
        <p className="text-xl">
          I am a bachelor of Electrical Engineering with information
          telecommunication technology concentration. Highly interested in
          programming.
        </p>
        <div className="flex gap-4 items-center">
          <button
            className="bg-cyan-300 rounded-full w-28 h-14 "
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1gr1UtRz-YfhKSJWV5lXMsi5A-WI0aGlG/view?usp=sharing"
              )
            }
          >
            <span className=" text-black text-lg font-bold">View CV</span>
          </button>
          <a
            href="https://www.linkedin.com/in/rahman-hafidzin-942a09215/"
            target="_blank"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
              alt="linkedin_logo"
              className="size-12"
            />
          </a>
          <a href="https://github.com/Rhafidzin/" target="_blank">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg=="
              alt="github_logo"
              className="size-12 "
            />
          </a>
        </div>
      </main>
      <div className="flex flex-col justify-center items-center">
        <div className="relative z-10 right-20">
          <span className="absolute bg-yellow-300 size-52 rounded-full top-24 left-[-80px] blur-md mix-blend-multiply"></span>
          <span className="absolute bg-sky-300 size-48 rounded-full  top-4 left-10 blur-md mix-blend-multiply"></span>
        </div>
        <img src={photo} alt="" className="z-20" />
      </div>
    </div>
  );
}

import React from "react";
import { portofolio } from "../data/data";

export default function Projects() {
  return (
    <div className="px-32 py-12">
      <h1 className="text-center text-4xl font-medium py-4">Portofolio</h1>
      <articles className="grid grid-cols-2 gap-4 ">
        {portofolio.map((p) => (
          <article>
            <a
              className="shadow-lg hover:cursor-pointer"
              href={p.link}
              // onClick={() => (window.location.href = p.link)}
            >
              <h2 className="text-center text-2xl font-medium my-2">
                {p.title}
              </h2>
              <img src={p.img} alt={p.title} className="h-[88%] object-cover" />
            </a>
          </article>
        ))}
      </articles>
    </div>
  );
}

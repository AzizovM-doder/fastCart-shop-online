import { Instagram, Linkedin, TwitterIcon } from "lucide-react";
import React from "react";

const Card3 = ({ data }) => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full">
      {data.map((e, i) => (
        <div
          key={i}
          className="group w-full rounded-3xl  shadow-sm overflow-hidden transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="relative overflow-hidden bg-gray-100">
            <img
              src={e.img}
              alt={e.name}
              className="w-full h-85 object-top transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0  from-black/30 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition" />
          </div>

          <div className="p-6 flex flex-col gap-3">
            <h1 className="font-extrabold text-xl tracking-tight">
              {e.name}
            </h1>
            <p className="text-sm text-gray-600">{e.job}</p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={e.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-xl border bg-gray-50 flex items-center justify-center text-gray-700 hover:bg-black hover:text-white transition"
              >
                <TwitterIcon size={16} />
              </a>

              <a
                href={e.insta}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-xl border bg-gray-50 flex items-center justify-center text-gray-700 hover:bg-black hover:text-white transition"
              >
                <Instagram size={16} />
              </a>

              <a
                href={e.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-xl border bg-gray-50 flex items-center justify-center text-gray-700 hover:bg-black hover:text-white transition"
              >
                <Linkedin size={16} />
              </a>
            </div>

            <div className="mt-4 h-1 w-full bg-gray-100" />
            <p className="text-xs text-gray-500">Elite Market Team</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card3;

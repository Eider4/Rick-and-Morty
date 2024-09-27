import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../sections/header/Header";

export const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-56"
          onClick={() => navigate("/pages/1")}
          src="https://cdn11.bigcommerce.com/s-pssykari/images/stencil/1640x1080/products/3856/84439/rick-morty-dabpadz__38603.1567811827.png?c=2&imbypass=on"
          alt="rick and morty"
        />
        <div className="mt-5 text-gray-300 text-center max-w-md">
          <p className="text-lg text-white mb-5">
            <span className="text-green-400">Rick and Morty</span> is an
            animated series created by
            <span className="text-blue-400"> Justin Roiland</span> and
            <span className="text-blue-400"> Dan Harmon</span>, which follows
            the adventures of the
            <span className="text-yellow-400"> eccentric scientist</span>
            <span className="text-green-400"> Rick Sanchez</span> and his
            grandson
            <span className="text-green-400"> Morty Smith.</span> The series
            combines elements of
            <span className="text-purple-400"> science fiction</span>,
            <span className="text-red-400"> dark humor</span>, and
            <span className="text-red-400"> satire</span>, exploring complex
            themes such as
            <span className="text-orange-400"> morality</span>,
            <span className="text-orange-400"> family</span>, and the nature of
            the
            <span className="text-pink-400"> universe.</span> Through their
            <span className="text-pink-400"> interdimensional travels</span>,
            Rick and Morty encounter
            <span className="text-green-500"> strange creatures</span>,
            <span className="text-green-500"> alien societies</span>, and absurd
            situations, all while dealing with the consequences of their
            actions. Since its debut in
            <span className="text-yellow-400"> 2013</span>,
            <span className="text-green-400"> Rick and Morty</span> has become a
            cultural phenomenon, acclaimed for its originality and thematic
            depth.
          </p>
        </div>
        <iframe
          width="90%"
          height="315"
          src="https://www.youtube.com/embed/E8cXKMR9a1Q?si=v4azyAnBn9LhrYLE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

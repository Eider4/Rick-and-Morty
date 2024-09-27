import React from "react";
import { Link } from "react-router-dom";
import InputCharacter from "../../components/input-character/InputCharacter";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-900 to-indigo-600 p-6 shadow-xl gap-2">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto items-center justify-between gap-2">
        <div className="flex text-zinc-200 text-3xl mb-4 md:mb-0 gap-2">
          <Link
            to="/"
            className="hover:text-cyan-300 transition duration-300 Hatch"
          >
            Rick and Morty
          </Link>
        </div>
        <nav className="flex flex-wrap space-x-0 md:space-x-8 mb-4 md:mb-0 gap-2">
          <Link
            to="/"
            className="text-white hover:text-cyan-300 transition duration-300 text-lg font-semibold transform hover:scale-105 block md:inline-block"
          >
            Init
          </Link>
          <Link
            to="/pages/1"
            className="text-white hover:text-cyan-300 transition duration-300 text-lg font-semibold transform hover:scale-105 block md:inline-block"
          >
            Characters
          </Link>

          <Link
            to="/favorites"
            className="text-white hover:text-cyan-300 transition duration-300 text-lg font-semibold transform hover:scale-105 block md:inline-block"
          >
            Favorites
          </Link>
        </nav>
        <div className="mt-5 md:mt-0">
          <InputCharacter />
        </div>
      </div>
    </header>
  );
};

export default Header;

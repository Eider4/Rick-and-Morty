import React from "react";
import { Link } from "react-router-dom";
import InputCharacter from "../../components/input-character/InputCharacter";
import { Inicio_icon } from "../../assets/icons/Icons";

const Header = () => {
  return (
    <header className="relative bg-gradient-to-r from-[#005C3B] to-[#3BFF3B] p-6 shadow-xl">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto items-center justify-between">
        <div className="flex text-white text-4xl mb-4 md:mb-0 gap-5">
          <Link
            to="/"
            className="hover:text-yellow-300 transition duration-300 font-bold"
          >
            Rick and Morty
          </Link>
        </div>
        <nav className="flex flex-wrap space-x-0 md:space-x-8 mb-4 md:mb-0 gap-5">
          <Link
            to="/"
            className="text-white hover:text-yellow-300 transition duration-300 text-lg font-semibold transform hover:scale-105 block md:inline-block"
          >
            Init
          </Link>
          <Link
            to="/pages/1"
            className="text-white hover:text-yellow-300 transition duration-300 text-lg font-semibold transform hover:scale-105 block md:inline-block"
          >
            Characters
          </Link>
          <Link
            to="/favorites"
            className="text-white hover:text-yellow-300 transition duration-300 text-lg font-semibold transform hover:scale-105 block md:inline-block"
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

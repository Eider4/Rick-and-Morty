import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputCharacter from "../../components/input-character/InputCharacter";
import Subcategories from "../sub-categories/SubCategories";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [categories, setCategories] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      onMouseLeave={() => setCategories(false)}
      className="relative shadow-none"
    >
      <div
        className="flex flex-col md:flex-row max-w-6xl mx-auto items-center justify-between bg-gradient-to-r from-[#005C3B] to-[#3BFF3B]" // Color del header original
      >
        <div className="flex text-white text-4xl mb-4 md:mb-0 gap-5">
          <Link
            to="/"
            className="hover:text-yellow-300 transition duration-300 font-bold"
          >
            Rick and Morty
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}{" "}
          </button>
        </div>

        <nav className="hidden md:flex space-x-8 mb-4 md:mb-0 gap-5 items-center">
          <Link
            to="/"
            className="text-white hover:text-yellow-300 transition duration-300 text-lg font-semibold transform hover:scale-105"
          >
            Init
          </Link>
          <Link
            to="/pages/1"
            className="text-white hover:text-yellow-300 transition duration-300 text-lg font-semibold transform hover:scale-105"
          >
            Characters
          </Link>
          <Link
            to="/favorites"
            className="text-white hover:text-yellow-300 transition duration-300 text-lg font-semibold transform hover:scale-105"
          >
            Favorites
          </Link>
          <p
            onClick={() => setCategories(true)}
            className="text-white cursor-pointer hover:text-yellow-300 transition duration-300 text-lg font-semibold transform hover:scale-105"
          >
            Categories
          </p>
        </nav>

        <div className="mt-5 md:mt-0">
          <InputCharacter />
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 right-0 mx-auto w-11/12 max-w-md p-6 rounded-b-2xl shadow-2xl bg-[#11151d] transform transition-transform duration-500 ease-in-out z-50
          ${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          } md:hidden`}
        style={{
          borderBottom: `4px solid #00FF00`,
        }}
      >
        <button
          onClick={toggleMenu}
          className="text-white text-3xl focus:outline-none absolute top-4 right-4"
        >
          <FaTimes /> {/* Ícono de cierre */}
        </button>
        <nav className="flex flex-col space-y-6 mt-10">
          <Link
            to="/"
            className="text-white hover:text-[#FFD700] transition duration-300 text-lg font-semibold"
            onClick={toggleMenu}
          >
            Init
          </Link>
          <Link
            to="/pages/1"
            className="text-white hover:text-[#FFD700] transition duration-300 text-lg font-semibold"
            onClick={toggleMenu}
          >
            Characters
          </Link>
          <Link
            to="/favorites"
            className="text-white hover:text-[#FFD700] transition duration-300 text-lg font-semibold"
            onClick={toggleMenu}
          >
            Favorites
          </Link>
          <p
            onClick={() => {
              setCategories(true);
              toggleMenu();
            }}
            className="text-white cursor-pointer hover:text-[#FFD700] transition duration-300 text-lg font-semibold"
          >
            Categories
          </p>
        </nav>
      </div>

      {/* Sección de subcategorías */}
      <div>
        {/* <div
          style={{ transform: "translate(-50% ,-50%" }}
          className="fixed top-[50%] left-[50%] bg-[#0005] w-full h-full"
        ></div> */}
        <div
          className={`transform transition-all duration-500 ease-in-out ${
            categories ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <Subcategories setActive={setCategories} />
        </div>
      </div>
    </header>
  );
};

export default Header;

import { useState } from "react";
import { SiTask } from "react-icons/si";
import { RiTeamFill } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { colors } from "../../colors/Colors";
import { MdOutlineMenu } from "react-icons/md";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import { CgDarkMode } from "react-icons/cg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("claro"); // Estado para el tema

  const toggleDropdown = () => setIsOpen(!isOpen);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "claro" ? "oscuro" : "claro"));
  };

  return (
    <div
      className="relative"
      style={{ backgroundColor: colors[theme].background }}
    >
      <button
        type="button"
        className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6"
        style={{ color: colors[theme].text }}
        aria-expanded={isOpen}
        onClick={toggleDropdown}
      >
        <span className="p-3 flex flex-row">
          {!isOpen && <MdOutlineMenu size={50} />}
          {!isOpen ? <GoChevronDown size={50} /> : <GoChevronUp size={50} />}
        </span>
      </button>

      {/* Botón para cambiar tema */}
      <button
        type="button"
        onClick={toggleTheme}
        className="mt-2 p-2 text-sm font-semibold"
        style={{ color: colors[theme].text }}
      >
        Cambiar a {theme === "claro" ? "oscuro" : "claro"}
      </button>

      {isOpen && (
        <div className="absolute left-1/2 z-10 mt-1 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div
            className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5"
            style={{ backgroundColor: colors[theme].background }}
          >
            <div className="p-4">
              {[
                {
                  title: "Tus tareas",
                  description: "Get a better understanding of your traffic",
                  icon: SiTask,
                },
                {
                  title: "Tus equipos",
                  description: "Speak directly to your customers",
                  icon: RiTeamFill,
                },
                {
                  title: "Tu perfil",
                  description: "Your customers' data will be safe and secure",
                  icon: FaRegUserCircle,
                },
                {
                  title: "Configuración",
                  description: "Connect with third-party tools",
                  icon: IoSettings,
                },
                {
                  title: "Tema",
                  description: theme,
                  icon: CgDarkMode,
                  click: toggleTheme,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`group relative flex gap-x-6 rounded-lg p-4 ${
                    theme == "claro" ? "bg_claro" : "bg_oscuro"
                  }`}
                  onClick={item.click}
                >
                  <div
                    className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg"
                    style={{ backgroundColor: colors[theme].gray }}
                  >
                    <item.icon
                      className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h2
                      className="font-bold text-lg"
                      style={{ color: colors[theme].cyan }}
                    >
                      {item.title}
                      <span className="absolute inset-0"></span>
                    </h2>
                    <p className="mt-1" style={{ color: colors[theme].text }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <hr />
            <div
              style={{ color: colors[theme].background }}
              className="grid grid-cols-2 divide-x divide-gray-900/5 "
            >
              <a
                href="#"
                className="flex items-center justify-center gap-x-2.5 p-3 font-semibold hover:bg-gray-100"
                style={{ color: colors[theme].cyan }}
              >
                Watch demo
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-x-2.5 p-3 font-semibold hover:bg-gray-100"
                style={{ color: colors[theme].cyan }}
              >
                Contact sales
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

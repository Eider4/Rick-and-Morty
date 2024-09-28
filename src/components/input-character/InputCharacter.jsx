import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectSort from "../select-sort/SelectSort";
import { Lupa_icon } from "../../assets/icons/Icons";
import CardCharacterInput from "../card-character-input/CardCharacterInput";
import useStoreSearchCharacters from "../../store/manageSearchCharacters";

const InputCharacter = () => {
  const [input, setInput] = useState("");
  const [characters, setCharacters] = useState([]);
  const [active, setActive] = useState(false);
  const charactersSearchNew = useStoreSearchCharacters(
    (state) => state.charactersSearchNew
  );
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const query = `
      {
        characters(filter: { name: "${input}" }) {
          results {
            id
            name
            status
            image
          }
        }
      }
    `;

    const response = await fetch("https://rickandmortyapi.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const { data } = await response.json();
    charactersSearchNew(data.characters.results);
    navigate("/search");
  };

  useEffect(() => {
    if (!input || input === "") setActive(false);
  }, [input]);

  return (
    <>
      {active && (
        <div
          onClick={() => setActive(!active)}
          className="fixed inset-0 bg-[#00000099]  z-40"
        ></div>
      )}
      <div className="text-white relative z-50">
        <form onSubmit={handleSubmit} className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search character"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ borderRight: "none", borderRadius: "1em 0em 0em 1em " }}
            className=" border-gray-600 p-3 w-full max-w-xs bg-gray-800 text-cyan-400 focus:outline-none  transition duration-200"
          />
          <button
            style={{ borderRight: "none", borderRadius: "0em 1em 1em 0em " }}
            className="bg-gray-800  p-2 hover:bg-cyan-400"
            type="submit"
          >
            <Lupa_icon />
          </button>
        </form>

        {/* {active && characters.length > 0 && (
          
        )} */}
      </div>
    </>
  );
};

export default InputCharacter;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectSort from "../select-sort/SelectSort";

const InputCharacter = () => {
  const [input, setInput] = useState("");
  const [characters, setCharacters] = useState([]);
  const [active, setActive] = useState(false);

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
    setCharacters(data.characters.results);
    setActive(true);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!input || input === "") setActive(false);
  }, [input]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Alive":
        return "bg-green-500";
      case "Dead":
        return "bg-red-500";
      default:
        return "bg-yellow-500";
    }
  };

  return (
    <>
      {active && (
        <div
          onClick={() => setActive(!active)}
          className="fixed inset-0 bg-black  z-10"
        ></div>
      )}
      <div className="text-white relative z-20">
        <form onSubmit={handleSubmit} className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search character"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border-2 border-gray-600 p-3 rounded-md w-full max-w-xs bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-200"
          />
        </form>

        {active && characters.length > 0 && (
          <div className="fixed top-20 left-0 w-full p-4 z-20 h-96">
            <SelectSort characters={characters} setCharacters={setCharacters} />
            <p onClick={() => setActive(!active)}>X</p>
            <div
              className="flex justify-around max-w-[100%] flex-wrap gap-4 overflow-y-auto max-h-[80vh] p-4 bg-gray-900 rounded-md"
              style={{ zIndex: "2" }}
            >
              {characters.map((character) => (
                <div
                  key={character.id}
                  onClick={() => navigate(`/character/${character.id}`)}
                  className="flex flex-col items-center w-48 p-4 border rounded-md shadow-lg bg-gray-800 hover:bg-gray-700 cursor-pointer transition-all duration-300 transform hover:scale-105"
                >
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-24 h-24 object-cover rounded-full mb-2"
                  />
                  <div className="flex items-center justify-center">
                    <h2 className="text-lg font-semibold mb-1 text-center">
                      {character.name}
                    </h2>
                  </div>
                  <p className="text-sm text-gray-400">
                    <span
                      className={`inline-block w-3 h-3 rounded-full mr-2 ${getStatusColor(
                        character.status
                      )}`}
                    />
                    {character.status}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default InputCharacter;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import IsFavorite from "../../components/is-favorite/IsFavorite";
import { getStatusColor } from "../../utils/getStatusColor";

const CharacterDetail = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchCharacter = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCharacter(data);
    } catch (error) {
      console.error("Error fetching character data:", error);
    }
  };

  useEffect(() => {
    fetchCharacter(`https://rickandmortyapi.com/api/character/${id}`);
  }, [id]);

  if (!character) {
    return (
      <h1 className="text-center mt-10 text-green-500">Character Not Found</h1>
    );
  }

  const date = new Date(character.created).toLocaleDateString();
  const time = new Date(character.created).toLocaleTimeString();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 p-4 md:p-8 text-white">
      {/* Sidebar for character image and name */}
      <div className="md:w-1/3 flex flex-col items-center p-4 bg-gray-800 rounded-2xl shadow-lg mb-6 md:mb-0 md:mr-8 border-4 border-green-500">
        <img
          className="w-64 h-64 object-cover rounded-full border-4 border-green-400 mb-4 shadow-xl transform transition-transform hover:scale-110"
          src={character.image}
          alt={character.name}
        />
        <h1 className="text-4xl font-bold text-green-300 mb-2 text-center">
          {character.name}
        </h1>
        <p
          className={`inline-flex items-start p-2 rounded-full ${getStatusColor(
            character.status
          )} text-black font-bold mb-4`}
        >
          {character.status}
        </p>
        <IsFavorite character={character} />
        <button
          onClick={() => navigate(-1)}
          className="bg-green-600 text-black rounded-full px-4 py-2 mt-4 flex items-center justify-center text-lg font-bold hover:bg-opacity-80 transition transform hover:scale-105 border-2 border-green-400"
        >
          Go Back
        </button>
      </div>

      {/* Main section with character details and episodes */}
      <section className="md:w-2/3 bg-gray-800 p-6 rounded-2xl shadow-lg border-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-green-400">
          Information:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <p className="text-lg">
            <b>Species:</b> {character.species}
          </p>
          <p className="text-lg">
            <b>Gender:</b> {character.gender}
          </p>
          {character.type && (
            <p className="text-lg">
              <b>Type:</b> {character.type}
            </p>
          )}
          <p className="text-lg">
            <b>Location:</b> {character.location?.name}
          </p>
          <p className="text-lg">
            <b>Origin:</b> {character.origin?.name}
          </p>
          <p className="text-lg">
            <b>Created:</b> {date} at {time}
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4 border-b-2 border-green-400">
          Episodes:
        </h2>
        <div className="overflow-y-auto max-h-40 mb-6">
          <ul className="list-disc list-inside text-lg space-y-1">
            {character.episode.map((episodeUrl) => {
              let f = episodeUrl.split("/");
              return (
                <li
                  onClick={() => navigate(`/episodes/${f[f.length - 1]}`)}
                  className="cursor-pointer text-green-400 hover:text-green-300 underline"
                  key={f[f.length - 1]}
                >
                  Episode {f[f.length - 1] + 1}
                </li>
              );
            })}
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-4 border-b-2 border-green-400">
          Link:
        </h2>
        <p className="text-lg overflow-hidden">
          <a
            href={character.url}
            className="text-green-400 hover:text-green-300 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {character.url}
          </a>
        </p>
      </section>
    </div>
  );
};

export default CharacterDetail;

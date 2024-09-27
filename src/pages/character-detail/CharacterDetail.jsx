import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useStoreFavoriteCharacters from "../../store/manageFavoriteCharacters";
import { HeartFilled, HeartOutline } from "../../assets/icons/Icons";
import IsFavorite from "../../components/is-favorite/IsFavorite";

const CharacterDetail = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchCharacter = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setCharacter(data);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Alive":
        return "bg-green-600";
      case "Dead":
        return "bg-red-700";
      default:
        return "bg-yellow-500";
    }
  };

  useEffect(() => {
    fetchCharacter(`https://rickandmortyapi.com/api/character/${id}`);
  }, [id]);

  if (!character) {
    return <h1 className="text-center mt-10 text-white">No se encontró</h1>;
  }

  const date = new Date(character.created).toLocaleDateString();
  const time = new Date(character.created).toLocaleTimeString();

  return (
    <>
      <div className="overflow-y-auto  fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-90 z-50">
        <div className="relative bg-gradient-to-br from-indigo-900 via-purple-700 to-blue-800 p-6 rounded-3xl shadow-2xl max-w-3xl w-full text-white grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden border-4 border-purple-600">
          <button
            onClick={() => navigate(-1)}
            className="absolute top-2 right-2 bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold hover:bg-opacity-80 transition transform hover:scale-110"
          >
            X
          </button>

          <div className="flex flex-col items-center mb-4">
            <img
              className="w-64 h-64 object-cover rounded-full border-4 border-white mb-4 shadow-xl transform transition-transform hover:scale-110"
              src={character.image}
              alt={character.name}
            />
            <h1 className="text-4xl font-bold text-cyan-300 mb-1">
              {character.name}
            </h1>
            <p
              className={`inline-flex items-start p-2 rounded-full ${getStatusColor(
                character.status
              )} text-black font-bold`}
            >
              {character.status}
            </p>
          </div>

          <div className="col-span-1 md:col-span-2">
            <IsFavorite character={character} />
            <h2 className="text-2xl font-bold mb-2 border-b-2 border-cyan-400">
              Información:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden">
              <p className="text-lg">
                <b>Especie:</b> {character.species}
              </p>
              <p className="text-lg">
                <b>Género:</b> {character.gender}
              </p>
              {character.type && (
                <p className="text-lg">
                  <b>Tipo:</b> {character.type}
                </p>
              )}
              <p className="text-lg">
                <b>Ubicación:</b> {character.location?.name}
              </p>
              <p className="text-lg">
                <b>Origen:</b> {character.origin?.name}
              </p>
              <p className="text-lg">
                <b>Creación:</b> {date} a las {time}
              </p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-2 border-b-2 border-cyan-400">
              Episodios:
            </h2>
            <div className="overflow-y-auto max-h-36">
              <ul className="list-disc list-inside text-lg">
                {character.episode.map((episodeUrl, index) => (
                  <li key={index}>
                    <a
                      href={episodeUrl}
                      className="text-blue-200 hover:text-blue-400 underline"
                    >
                      Episodio {index + 1}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-2 border-b-2 border-cyan-400">
              Enlace:
            </h2>
            <p className="text-lg overflow-hidden">
              <a
                href={character.url}
                className="text-blue-200 hover:text-blue-400 underline"
              >
                {character.url}
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterDetail;

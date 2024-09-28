import React from "react";
import { useNavigate } from "react-router-dom";
import { getStatusColor } from "../../utils/getStatusColor";

export default function CardCharacterInput({ character }) {
  const navigate = useNavigate();

  return (
    <div
      key={character.id}
      onClick={() => navigate(`/character/${character.id}`)}
      className="flex flex-col items-center w-48 h-52 p-4 border-4 border-green-500 rounded-lg shadow-xl bg-gray-900 hover:bg-gray-800 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:border-[#38F83B]"
    >
      <img
        src={character.image}
        alt={character.name}
        className="w-24 h-24 object-cover rounded-full mb-2 border-2 border-green-600 shadow-md"
      />
      <div className="flex items-center justify-center">
        <h2 className="text-lg font-semibold mb-1 text-center text-green-300">
          {character.name}
        </h2>
      </div>
      <p className="text-sm text-green-400">
        <span
          className={`inline-block w-3 h-3 rounded-full mr-2 ${getStatusColor(
            character.status
          )}`}
        />
        {character.status}
      </p>
    </div>
  );
}

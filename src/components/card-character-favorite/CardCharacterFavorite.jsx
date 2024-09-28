import { useNavigate } from "react-router-dom";
import useStoreFavoriteCharacters from "../../store/manageSearchCharacters";
import { getStatusColor } from "../../utils/getStatusColor";
import IsFavorite from "../is-favorite/IsFavorite";

export const CardCharacterFavorite = ({ character }) => {
  const {
    id,
    name,
    status,
    species,
    type,
    gender,
    image,
    location,
    origin,
    created,
  } = character;

  const date = new Date(created).toLocaleDateString();
  const time = new Date(created).toLocaleTimeString();
  const navigate = useNavigate();

  return (
    <div className="relative cursor-pointer  p-4 bg-gray-900 text-white rounded-lg shadow-xl max-w-md mx-auto h-[32rem] border-4 border-green-500 hover:border-[#38F83B] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div
        onClick={() => navigate(`/character/${character.id}`)}
        className="z-10"
      >
        <div className="flex flex-col items-center mb-4">
          <img
            className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-green-600 shadow-lg hover:border-[#ffe135]"
            src={image}
            alt={name}
          />
          <h1 className="text-3xl font-bold text-[#38F83B] hover:text-[#ffe135]">
            {name}
          </h1>
          <p className="text-lg text-green-300 hover:text-[#ffe135]">
            {species} {type && `- ${type}`}
          </p>
          <p
            className={`px-4 py-2 rounded-full mt-2 text-sm font-semibold hover:text-[#f9f0ba] ${getStatusColor(
              status
            )}`}
          >
            {status}
          </p>
        </div>
        <div className="border-t border-green-500 pt-4 mt-4 ">
          <p>
            <b className="hover:text-[#ffe135]">ID:</b> {id}
          </p>
          <p>
            <b className="hover:text-[#ffe135]">Gender:</b> {gender}
          </p>
          <p>
            <b className="hover:text-[#ffe135]">Location:</b> {location.name}
          </p>
          <p>
            <b className="hover:text-[#ffe135]">Origin:</b> {origin.name}
          </p>
          <p>
            <b className="hover:text-[#ffe135]">Created:</b> {date} at {time}
          </p>
        </div>
      </div>
      <div className="absolute top-1/2 left-4 z-20">
        <IsFavorite character={character} />
      </div>
    </div>
  );
};

import useStoreFavoriteCharacters from "../../store/manageFavoriteCharacters";
import IsFavorite from "../is-favorite/IsFavorite";

// Función para cambiar el color según el estado del personaje
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

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg max-w-md mx-auto">
      <div className="flex flex-col items-center mb-4">
        <img
          className="w-32 h-32 object-cover rounded-full mb-4"
          src={image}
          alt={name}
        />
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-lg">
          {species} - {type}
        </p>
        <p
          className={`px-4 py-2 rounded-full mt-2 text-sm font-semibold ${getStatusColor(
            status
          )}`}
        >
          {status}
        </p>
      </div>
      <IsFavorite character={character} />
      <div className="border-t border-gray-700 pt-4">
        <p>
          <b>ID:</b> {id}
        </p>
        <p>
          <b>Género:</b> {gender}
        </p>
        <p>
          <b>Ubicación:</b> {location.name}
        </p>
        <p>
          <b>Origen:</b>{" "}
          <a href={origin.url} className="text-blue-400 underline">
            {origin.name}
          </a>
        </p>
        <p>
          <b>Creado:</b> {date} a las {time}
        </p>
      </div>
    </div>
  );
};

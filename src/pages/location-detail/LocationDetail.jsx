import { useParams } from "react-router-dom";
import { getFetch } from "../../utils/getFetch";
import { useEffect, useState } from "react";
import { CardEpisodeCharacters } from "../../components/card-episode-characters/CardEpisodeCharacters";

function LocationDetail() {
  const [location, setLocation] = useState(null);
  const { id: idParams } = useParams();

  const get = async () => {
    const p = await getFetch(
      `https://rickandmortyapi.com/api/location/${idParams}`
    );
    setLocation(p);
  };

  useEffect(() => {
    get();
  }, [idParams]);

  if (!location) {
    return <h1 className="text-center text-green-500">No hay location</h1>;
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-[#1C1C1C] shadow-lg rounded-lg border border-[#FFD700] text-[#D3D3D3]">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#FFD700] border-b-2 border-[#5BFF5B] pb-2">
        Location Details
      </h2>

      <p className="mb-2">
        <b className="text-[#FFD700]">ID:</b> {location.id}
      </p>
      <p className="mb-2">
        <b className="text-[#FFD700]">Name:</b> {location.name}
      </p>
      <p className="mb-2">
        <b className="text-[#FFD700]">Type:</b> {location.type}
      </p>
      <p className="mb-2">
        <b className="text-[#FFD700]">Dimension:</b> {location.dimension}
      </p>

      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2 text-[#5BFF5B]">
          Residents:
        </h3>
        <div className="max-h-96 overflow-y-auto border-[#7e7e7e] border rounded-lg">
          {location.residents.length > 0 ? (
            <div className="flex flex-wrap justify-around">
              {location.residents.map((resident, index) => (
                <div
                  key={index}
                  className="w-48 p-2 bg-[#2B2B2B] border border-[#5BFF5B] rounded-lg shadow-lg hover:shadow-2xl hover:bg-[#3D3D3D] transition duration-200 ease-in-out mb-2"
                >
                  <CardEpisodeCharacters characterUrl={resident} />
                </div>
              ))}
            </div>
          ) : (
            <p>No residents found</p>
          )}
        </div>
      </div>

      <p className="mt-4">
        <b className="text-[#FFD700]">URL:</b>{" "}
        <a
          href={location.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#5BFF5B] underline hover:text-[#FFD700]"
        >
          {location.url}
        </a>
      </p>
      <p>
        <b className="text-[#FFD700]">Created:</b>{" "}
        {new Date(location.created).toLocaleDateString()}
      </p>
    </div>
  );
}

export default LocationDetail;

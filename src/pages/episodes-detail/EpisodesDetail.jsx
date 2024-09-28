import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardEpisodeCharacters } from "../../components/card-episode-characters/CardEpisodeCharacters";
import { getFetch } from "../../utils/getFetch";
import { StateLoading } from "../../components/state-loading/StateLoading";
import { Inicio_icon } from "../../assets/icons/Icons";

export default function EpisodesDetail() {
  const [episode, setEpisode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const fetchEpisode = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getFetch(
        `https://rickandmortyapi.com/api/episode/${id}`
      );
      setEpisode(res);
    } catch (err) {
      setError("Error fetching episode details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEpisode();
  }, [id]);

  if (loading) {
    return <StateLoading />;
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-4 bg-red-600 rounded-md shadow-lg text-white text-center">
        <h1 className="text-3xl font-bold mb-4">Error</h1>
        <p>{error}</p>
        <button
          onClick={fetchEpisode}
          className="mt-4 bg-green-500 px-4 py-2 rounded-md text-black hover:bg-green-400"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-[#66903d] to-[#47a447] rounded-lg shadow-2xl text-white">
      <Inicio_icon />
      <h1 className="text-4xl font-bold mb-6 text-center text-lime-950 drop-shadow-md">
        Episode Detail
      </h1>
      <div className="mb-6 p-4 bg-[#111827] rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-3 text-emerald-400">
          Name: {episode.name}
        </h2>
        <div className="text-lg mb-1">
          <span className="font-semibold text-yellow-400">Air Date:</span>{" "}
          {episode.air_date}
        </div>
        <div className="text-lg mb-4">
          <span className="font-semibold text-yellow-400">Episode Code:</span>{" "}
          {episode.episode}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-lime-950">
          Characters Appearing:
        </h3>
        <div className="flex justify-around flex-wrap gap-4 overflow-y-auto max-h-[60vh] p-4 bg-[#005C3B] rounded-lg shadow-md">
          {episode.characters.map((characterUrl) => (
            <div
              key={characterUrl}
              className="w-48 p-2 bg-[#5ca35c] rounded-lg shadow-lg hover:shadow-2xl hover:bg-[#5BFF5B] transition duration-200 ease-in-out"
            >
              <CardEpisodeCharacters characterUrl={characterUrl} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { getFetch } from "../../utils/getFetch";
import { useNavigate, useParams } from "react-router-dom";
import SelectSort from "../../components/select-sort/SelectSort";
import Header from "../header/Header";
import IsFavorite from "../../components/is-favorite/IsFavorite";

const nums = [1, 1, 1, 1, 1];

function ShowCharacters() {
  const [fetchResults, setFetchResults] = useState(null);
  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { page } = useParams();
  const navigate = useNavigate();

  const get = async (
    url = "https://rickandmortyapi.com/api/character?page=1"
  ) => {
    setLoading(true);
    try {
      const res = await getFetch(url);
      setFetchResults(res);
      setCharacters(res.results);
      setError(false);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
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
    page
      ? get(`https://rickandmortyapi.com/api/character?page=${page}`)
      : get();
  }, [page]);

  if (loading) return <h1 className="text-center text-white">Loading...</h1>;
  if (error)
    return <h1 className="text-center text-red-500">Error loading data</h1>;
  if (!fetchResults) return <h1 className="text-center text-white">No Data</h1>;

  return (
    <div className="bg-gray-900">
      <Header />
      <div className=" flex justify-between px-2 gap-2  text-start text-white mb-2 mt-4">
        <p className="text-2xl">Page {page || 1}</p>
        <SelectSort characters={characters} setCharacters={setCharacters} />
      </div>

      <div className="flex flex-wrap gap-4 bg-gray-900 justify-around p-4">
        {characters.map((character) => (
          <div
            key={character.id}
            className="relative  text-white p-4 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:bg-gray-700 max-w-xs"
          >
            <div
              className=""
              key={character.id}
              onClick={() => navigate(`/character/${character.id}`)}
            >
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-lg font-semibold mb-2">
                Name: {character.name}
              </p>
              <p className="text-sm mb-1">
                Status:
                <span
                  className={`ml-2 inline-block w-3 h-3 rounded-full mr-2 ${getStatusColor(
                    character.status
                  )}`}
                />
                {character.status}
              </p>
              <p className="text-sm">Species: {character.species}</p>
            </div>
            <span className="absolute top-4  left-4 cursor-pointer transition-transform transform hover:scale-105 hover:text-red-500">
              <IsFavorite character={character} />
            </span>
          </div>
        ))}
      </div>
      <nav className="mt-6 flex justify-center">
        <ul className="inline-flex -space-x-px text-base">
          <li>
            <p
              onClick={() => {
                let f = fetchResults.info.prev
                  ? fetchResults.info.prev.split("=")
                  : [1];
                navigate(`/pages/${f[f.length - 1]}`);
              }}
              className="flex items-center justify-center px-4 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
            >
              Previous
            </p>
          </li>
          <li className="flex">
            {nums.map((_, i) => (
              <p
                key={i}
                onClick={() => {
                  navigate(`/pages/${parseInt(page) + parseInt(i) + 1}`);
                }}
                className="flex items-center justify-center px-4 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
              >
                {parseInt(page) + parseInt(i) + 1}
              </p>
            ))}
          </li>
          <li>
            <p
              onClick={() => {
                let f = fetchResults.info.next
                  ? fetchResults.info.next.split("=")
                  : 42;
                navigate(`/pages/${f[f.length - 1]}`);
              }}
              className="flex items-center justify-center px-4 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
            >
              Next
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ShowCharacters;

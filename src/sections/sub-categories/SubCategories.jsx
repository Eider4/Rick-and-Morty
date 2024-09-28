import { useEffect, useState } from "react";
import { getAllProperties } from "../../utils/getAllProperties";
import getArray from "../../utils/getArray";
import useStoreCategory from "../../store/manageCategoriesCharacters";
import { useNavigate } from "react-router-dom";
import { fetchCharacters } from "../../utils/getAllCharacters";

const Subcategories = ({ setActive }) => {
  const [categories, setCategories] = useState({
    status: [],
    species: [],
    episodes: [],
    location: [],
    origin: [],
  });

  const [selectedCategory, setSelectedCategory] = useState(null);
  const categoryNew = useStoreCategory((state) => state.categoryNew);
  const navigate = useNavigate();

  const get = async () => {
    try {
      const status = await getAllProperties("status");
      const species = await getAllProperties("species");
      const episodes = getArray(52, " Episode: ");
      const location = await getAllProperties("location", "name");
      const origin = await getAllProperties("origin", "name");

      setCategories({
        status,
        location,
        species,
        origin,
        episodes,
      });
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <div className="flex justify-center p-4 bg-[#1b1b1b] min-h-screen">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-[#2b2b2b] rounded-lg shadow-md border-4 border-[#38d354]">
        <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r-4 border-[#e4c424] p-4">
          {Object.keys(categories).map((category) => (
            <div
              key={category}
              className={`mb-4 cursor-pointer ${
                selectedCategory === category
                  ? "bg-[#38d354] text-black border-l-4 border-[#e4c424]"
                  : "bg-[#005C3B] text-white hover:bg-[#3e7662]"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              <h1 className="text-xl font-semibold capitalize p-2">
                {category}
              </h1>
            </div>
          ))}
        </div>

        <div className="w-full md:w-2/3 p-4 text-white">
          {selectedCategory ? (
            <div>
              <h2 className="text-2xl font-bold capitalize mb-4 text-[#e4c424]">
                {selectedCategory}
              </h2>
              <div className="max-h-96 overflow-y-auto bg-gradient-to-r from-[#005C3B] to-[#3AFD3A] p-4 rounded-lg border border-[#38d354]">
                {categories[selectedCategory].map((item, index) => (
                  <p
                    key={index}
                    className="text-white p-2 border-b border-[#4e4e4e] cursor-pointer hover:text-[#38d354] hover:bg-[#1c1c1c]"
                    onClick={async () => {
                      if (selectedCategory === "episodes") {
                        let p = item.split(" ");
                        navigate(`/episodes/${p[p.length - 1]}`);
                        setActive(false);
                        return;
                      }
                      if (
                        selectedCategory === "location" ||
                        selectedCategory === "origin"
                      ) {
                        categoryNew({
                          category: selectedCategory,
                          propertie: item,
                          characters: await fetchCharacters(
                            selectedCategory,
                            "name",
                            item
                          ),
                        });
                        navigate("/categories");
                        setActive(false);
                        return;
                      }
                      categoryNew({
                        category: selectedCategory,
                        propertie: item,
                      });
                      navigate("/categories");
                      setActive(false);
                    }}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-gray-500">
              Selecciona una categoría para ver sus contenidos.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subcategories;

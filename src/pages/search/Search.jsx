import { useNavigate } from "react-router-dom";
import CardCharacterInput from "../../components/card-character-input/CardCharacterInput";
import SelectSort from "../../components/select-sort/SelectSort";
import useStoreSearchCharacters from "../../store/manageSearchCharacters";

export default function Search() {
  const charactersSearch = useStoreSearchCharacters(
    (state) => state.charactersSearch
  );
  const charactersSearchNew = useStoreSearchCharacters(
    (state) => state.charactersSearchNew
  );
  const navigate = useNavigate();

  return (
    <div className="w-full p-4">
      <SelectSort
        characters={charactersSearch}
        setCharacters={charactersSearchNew}
      />
      <p
        onClick={() => navigate(-1)}
        className="text-green-500 font-bold text-xl cursor-pointer hover:text-[#38F83B] transition duration-300"
      >
        X
      </p>
      <div
        className="flex justify-around max-w-[100%] flex-wrap gap-4 p-4 bg-gray-900 rounded-md shadow-lg border-2 border-green-500"
        style={{ zIndex: "2" }}
      >
        {charactersSearch.map((character) => (
          <div key={character.id}>
            <CardCharacterInput character={character} />
          </div>
        ))}
      </div>
    </div>
  );
}

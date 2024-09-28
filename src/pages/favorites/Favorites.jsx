import { CardCharacterFavorite } from "../../components/card-character-favorite/CardCharacterFavorite";
import Header from "../../sections/header/Header";
import useStoreFavoriteCharacters from "../../store/manageFavoriteCharacters copy";

const Favorites = () => {
  const favoriteCharacters = useStoreFavoriteCharacters(
    (state) => state.favoriteCharacters
  );
  console.log(favoriteCharacters);
  return (
    <>
      <Header />
      {favoriteCharacters && favoriteCharacters.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
          {favoriteCharacters.map((character) => (
            <CardCharacterFavorite key={character.id} character={character} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center">
          <p className="text-xl font-semibold text-gray-300 p-4">
            There are no added characters
          </p>
        </div>
      )}
    </>
  );
};

export default Favorites;

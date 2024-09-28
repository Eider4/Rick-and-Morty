import React, { useEffect, useState } from "react";
import useStoreFavoriteCharacters from "../../store/manageFavoriteCharacters";
import { HeartFilled, HeartOutline } from "../../assets/icons/Icons";

function IsFavorite({ character, size }) {
  const [favoriteActive, setFavoriteActive] = useState(false);

  const addFavorites = useStoreFavoriteCharacters(
    (state) => state.addFavorites
  );
  const deleteFavorites = useStoreFavoriteCharacters(
    (state) => state.deleteFavorites
  );
  const isCharacterFavorite = useStoreFavoriteCharacters(
    (state) => state.isCharacterFavorite
  );
  useEffect(() => {
    if (character) {
      const isFavorite = isCharacterFavorite(character);
      setFavoriteActive(isFavorite);
    }
  }, [character, isCharacterFavorite]);

  return (
    <>
      <div>
        {!favoriteActive ? (
          <div
            onClick={() => {
              addFavorites(character);
              setFavoriteActive(true);
            }}
            className="flex "
          >
            <HeartOutline size={size} />
          </div>
        ) : (
          <p
            onClick={() => {
              deleteFavorites(character);
              setFavoriteActive(false);
            }}
          >
            <HeartFilled size={size} />
          </p>
        )}
      </div>
    </>
  );
}

export default IsFavorite;

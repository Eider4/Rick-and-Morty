import React, { useEffect, useState } from "react";
import { getFetch } from "../../utils/getFetch";
import CardCharacterInput from "../card-character-input/CardCharacterInput";

export const CardEpisodeCharacters = ({ characterUrl }) => {
  const [character, setCharacters] = useState(null);
  const handleCharacterUrl = async (characterUrl) => {
    const characterResults = await getFetch(characterUrl);
    setCharacters(characterResults);
  };
  useEffect(() => {
    handleCharacterUrl(characterUrl);
  }, []);

  if (character)
    return (
      <div>
        <CardCharacterInput character={character} />
      </div>
    );
};

import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStoreFavoriteCharacters = create(
  persist(
    (set, get) => ({
      favoriteCharacters: [],
      addFavorites: (newFavorite) =>
        set((state) => ({
          favoriteCharacters: [...state.favoriteCharacters, newFavorite],
        })),
      deleteFavorites: (characterToDelete) =>
        set((state) => ({
          favoriteCharacters: state.favoriteCharacters.filter(
            (character) => character.id !== characterToDelete.id
          ),
        })),
      isCharacterFavorite: (characterToVerify) =>
        get().favoriteCharacters.some(
          (character) => character.id === characterToVerify.id
        ),
    }),
    {
      name: "favorite-characters",
    }
  )
);

export default useStoreFavoriteCharacters;

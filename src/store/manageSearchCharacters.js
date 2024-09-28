import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStoreSearchCharacters = create(
  persist(
    (set, get) => ({
      charactersSearch: [],
      charactersSearchNew: (newChears) =>
        set(() => ({
          charactersSearch: newChears,
        })),
    }),
    {
      name: "search-characters",
    }
  )
);

export default useStoreSearchCharacters;

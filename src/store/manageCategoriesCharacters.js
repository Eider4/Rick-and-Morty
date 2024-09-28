import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStoreCategory = create(
  persist(
    (set) => ({
      category: { category: "", propertie: "", characters: [] },
      categoryNew: (newChears) =>
        set(() => ({
          category: newChears,
        })),
    }),
    {
      name: "category-characters",
    }
  )
);

export default useStoreCategory;

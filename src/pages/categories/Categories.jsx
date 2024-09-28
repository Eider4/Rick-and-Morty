import { useEffect, useState } from "react";
import useStoreCategory from "../../store/manageCategoriesCharacters";
import { getFetch } from "../../utils/getFetch";
import { CardCharacterFavorite } from "../../components/card-character-favorite/CardCharacterFavorite";
import Header from "../../sections/header/Header";

function Categories() {
  const category = useStoreCategory((state) => state.category);
  const categoryNew = useStoreCategory((state) => state.categoryNew);
  const get = async () => {
    const query = `
        {
          characters(filter: { ${category.category}: "${category.propertie}" }) {
            results {
             id
              name
              status
              image
            }
          }
        }
      `;
    const response = await fetch("https://rickandmortyapi.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const { data } = await response.json();
    categoryNew({ ...category, characters: data.characters.results });
  };
  useEffect(() => {
    if (category && !category.characters) {
      get();
    }
  }, [category]);
  console.log(category);

  if (category && category.characters)
    return (
      <>
        <Header />
        <div className="mt-10 flex flex-wrap justify-around gap-10">
          {category.characters.map((character) => {
            return (
              <div key={character.id}>
                <CharactersGet id={character.id} />
              </div>
            );
          })}
        </div>
      </>
    );
}

function CharactersGet({ id }) {
  const [character, setCharacter] = useState(null);
  const get = async () => {
    const res = await getFetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    setCharacter(res);
  };
  useEffect(() => {
    get();
  }, []);

  if (character)
    return (
      <>
        <CardCharacterFavorite character={character} />
      </>
    );
}
export default Categories;

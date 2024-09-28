export async function fetchCharacters(params1, params2, filter) {
  let allCharacters = [];
  let page = 1;
  let totalPages = 1;

  try {
    while (page <= totalPages) {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      const data = await response.json();

      if (data.results) {
        allCharacters = allCharacters.concat(data.results);
      }

      totalPages = data.info.pages;
      page++;
    }

    const filteredCharacters = allCharacters.filter(
      (character) => character[params1][params2] == filter
    );

    console.log(`Personajes que están en ${filter}:`, filteredCharacters);
    return filteredCharacters;
  } catch (error) {
    console.error("Error al obtener personajes:", error);
  }
}

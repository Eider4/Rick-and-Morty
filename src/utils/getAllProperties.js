export async function getAllProperties(params1, params2 = null) {
  const baseUrl = "https://rickandmortyapi.com/api/character";
  let location = new Set();
  let nextUrl = baseUrl;
  while (nextUrl) {
    try {
      const response = await fetch(nextUrl);
      const data = await response.json();
      const characters = data.results;
      characters.forEach((character) =>
        location.add(params2 ? character[params1][params2] : character[params1])
      );
      nextUrl = data.info.next;
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      nextUrl = null;
    }
  }
  return Array.from(location);
}

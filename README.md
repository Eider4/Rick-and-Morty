# Rick and Morty Web App

Este proyecto es una aplicación web que permite visualizar los personajes de la famosa serie **Rick and Morty**. La aplicación incluye diversas funcionalidades, como la búsqueda y filtrado de personajes, navegación entre episodios, localizaciones, y la posibilidad de agregar personajes a una lista de favoritos.

## Características

- **Visualización de Personajes**: Los personajes se muestran paginados, con 20 personajes por página. Puedes ordenar los personajes en orden alfabético (A-Z o Z-A) y navegar a través de las diferentes páginas utilizando el paginador.

- **Navegación**: La aplicación incluye un menú de navegación con las siguientes secciones:
  - **Inicio**: Página principal.
  - **Personajes**: Muestra todos los personajes con opciones de búsqueda y ordenamiento.
  - **Favoritos**: Sección donde se listan los personajes que has marcado como favoritos.
  - **Categorías**: Muestra un submenú con opciones para filtrar personajes por:
    - **Localización**
    - **Estado** (Vivo, Muerto, Desconocido)
    - **Origen**
    - **Especie**
    - **Capítulos**

- **Búsqueda**: En la parte superior de la página, se encuentra un campo de búsqueda para encontrar personajes por nombre. También permite ordenar los resultados en orden alfabético (A-Z o Z-A).

- **Favoritos**: Los personajes pueden ser agregados a una lista de favoritos, los cuales se muestran en una página dedicada.

- **Episodios y Localizaciones**: La aplicación también incluye páginas dedicadas a cada episodio y localización. Estas páginas muestran información detallada sobre un episodio o localización específica.

## APIs Utilizadas

Las siguientes APIs de Rick and Morty fueron utilizadas para obtener datos de personajes, localizaciones y episodios:

- **Personajes**: `https://rickandmortyapi.com/api/character?page=` (para obtener los personajes paginados)
- **Página específica de personajes**: `https://rickandmortyapi.com/api/character?page=1`
- **Localizaciones**: `https://rickandmortyapi.com/api/location/`
- **Episodios**: `https://rickandmortyapi.com/api/episode/`
- **Detalles de un solo personaje**: `https://rickandmortyapi.com/api/character/`
- **API GraphQL**: `https://rickandmortyapi.com/graphql`

## Tecnologías Utilizadas

La aplicación está desarrollada utilizando las siguientes tecnologías:

- **React**: Biblioteca principal para crear la interfaz de usuario.
- **React Router DOM**: Para la navegación entre las diferentes rutas (páginas).
- **Tailwind CSS**: Para el diseño y estilo de la aplicación.
- **Zustand**: Para el manejo del estado global de la aplicación.
- **React Icons**: Para incluir íconos en la interfaz.
- **React Loading**: Para mostrar indicadores de carga cuando los datos están siendo cargados.
- **Vite**: Para el empaquetado y el entorno de desarrollo rápido.
- **ESLint**: Herramienta para asegurar la calidad del código.

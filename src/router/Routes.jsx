import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../pages/App";
import CharacterDetail from "../pages/character-detail/CharacterDetail";
import Favorites from "../pages/favorites/Favorites";
import { MainPage } from "../pages/main-page/MainPage.jsx";
import EpisodesDetail from "../pages/episodes-detail/EpisodesDetail.jsx";
import Search from "../pages/search/Search.jsx";
import Categories from "../pages/categories/Categories.jsx";
import LocationDetail from "../pages/location-detail/LocationDetail.jsx";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route index path="/pages/:page" element={<App />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
        <Route path="/episodes/:id" element={<EpisodesDetail />} />
        <Route path="/location/:id" element={<LocationDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../pages/App";
import CharacterDetail from "../pages/character-detail/CharacterDetail";
import { Main } from "../pages/main/main";
import Favorites from "../pages/favorites/Favorites";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route index path="/pages/:page" element={<App />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

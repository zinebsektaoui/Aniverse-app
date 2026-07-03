import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Anime from "./pages/Anime";
import Navbar from "./components/layouts/Navbar";
import AnimeDetail from "./components/anime/AnimeDetail";
import Favorite from "./pages/Favorite";
import Characters from "./pages/Characters";
import CharactersDetails from "./pages/CharactersDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/anime/:id/full" element={<AnimeDetail />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharactersDetails />} />
      </Routes>
    </>
  );
}

export default App;

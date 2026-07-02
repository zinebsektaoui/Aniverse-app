import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Anime from "./pages/Anime";
import Navbar from "./components/layouts/Navbar";
import AnimeDetail from "./components/anime/AnimeDetail"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/anime/:id/full" element={<AnimeDetail />} />
      </Routes>
    </>
  );
}

export default App;

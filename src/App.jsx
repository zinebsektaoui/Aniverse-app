import { Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Navbar from "./components/layouts/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

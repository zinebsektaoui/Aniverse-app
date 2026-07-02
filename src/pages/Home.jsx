import Footer from "../components/layouts/Footer";
import Hero from "../components/home/Hero";
import TrendingCard from "../components/home/TrendingCard";
import SeasonalCard from "../components/home/SeasonalCard";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchSeasonalAnime, fetchTrendingAnime } from "../redux/thunks/animeThunk";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTrendingAnime());
    dispatch(fetchSeasonalAnime())
  }, []);


  return (
    <main className="bg-[#0a0e1a] px-4 md:px-8 pt-6 md:pt-8">
      <Hero />
      <TrendingCard/>
      <SeasonalCard/>
      <Footer />
    </main>
  );
}

export default Home;
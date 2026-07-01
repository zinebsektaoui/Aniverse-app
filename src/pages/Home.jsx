import Footer from "../components/layouts/Footer";
import Hero from "../components/home/Hero";

function Home() {
  return (
    <main className="bg-[#0a0e1a] px-4 md:px-8 pt-6 md:pt-8">
      <Hero />
      <Footer />
    </main>
  );
}

export default Home;
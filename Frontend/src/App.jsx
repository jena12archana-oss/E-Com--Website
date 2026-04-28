import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ProductSection from "./components/ProductSection/ProductSection";
import PlantCarousel from "./components/PlantCarousel/PlantCarousel";
import ProductSection2 from "./components/ProductSection2/ProductSection2";
import BonsaiStyles from "./components/BonsaiStyles/BonsaiStyles";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <ProductSection />
      <PlantCarousel />
      <ProductSection2 />
      <BonsaiStyles/>
    </>
  );
}

export default App;

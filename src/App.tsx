import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import PriceSection from "./components/PriceSection";

const App = () => {
  return (
    <div className={"w-full flex flex-col"}>
      <Navbar />

      <Jumbotron />

      <PriceSection />

      <Footer />
    </div>
  );
}

export default App;

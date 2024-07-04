import "./App.css";
import Navbar from "./components/Navbar";
import { Footer } from "./components/footer";
import Review from "./reviews/review";
import Hero from "./components/hero";
import Phones from "./components/Phones";
import Fashion from "./components/fashion";

function App() {
  return (
    <div className="overflow-hidden w-full flex flex-col justify-center items-center">
      <Navbar />
      <Hero />
      <Phones />
      <Fashion />
      <Review />
      <Footer />
    </div>
  );
}

export default App;

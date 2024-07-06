import "./App.css";
import Navbar from "./components/Navbar";
import { Footer } from "./components/footer";
import Review from "./reviews/review";
import Hero from "./components/hero";
import Phones from "./components/Phones";
import Fashion from "./components/fashion";
import Homepage from "./components/homePage";

function App() {
  return (
    <div className="overflow-hidden w-full flex flex-col justify-center items-center">
      <Homepage />
    </div>
  );
}

export default App;

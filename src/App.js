import "./App.css";
import Navbar from "./component/Navbar";
import Navigationbar from "./component/Navigationbar";
import Movie from "./pages/Movie";
import Search from "./pages/Search";
import Trending from "./pages/Trending";
import Tv from "./pages/Tv";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Trending />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/series" element={<Tv />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Navigationbar/>
    </div>
  );
}

export default App;

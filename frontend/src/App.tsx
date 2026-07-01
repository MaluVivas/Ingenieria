import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/pages/Home/Landing";
import Signin from "./components/pages/Signin/Signin";
import Login from "./components/pages/Login/Login";
import AboutDisplay from "./components/pages/About/AboutDisplay";
import BlogDisplay from "./components/pages/Blog/BlogDisplay";
import SpeciesArticles from "./components/pages/Blog/SpeciesArticles";
import ArticleDisplay from "./components/pages/Blog/ArticleDisplay";
import Locations from "./components/pages/Locations/LocationsDisplay";
import LocationDetailPage from "./components/pages/Locations/LocationDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutDisplay />} />
        <Route path="/care" element={<BlogDisplay />} />

        <Route path="/places" element={<Locations />} />
        <Route path="/places/detail/:id" element={<LocationDetailPage />} />

        <Route path="/blog/:species" element={<SpeciesArticles />} />
        <Route path="/article/:slug" element={<ArticleDisplay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./assets/pages/AboutPage";
import ContactPage from "./assets/pages/ContactPage";
import GalleryPage from "./assets/pages/GalleryPage";
import HomePage from "./assets/pages/HomePage";
import Navigation from "./assets/shared/Navigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

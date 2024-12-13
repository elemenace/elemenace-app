import Home from "./assets/Components/Home";
import Products from "./assets/Components/Products";
import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/Components/Navbar";
import AboutUs from "./assets/Components/AboutUs";
import Blog from "./assets/Components/Blog";
import Contact from "./assets/Components/Contact";
import Footer from "./assets/Components/Footer";

function App() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/AboutUS" element={<AboutUs />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { Clothing } from "./pages/Clothing";
import { Equipment } from "./pages/Equipment";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "././pages/Contact";




function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          

        </Routes>
    </ShoppingCartProvider>
  );
}

export default App;


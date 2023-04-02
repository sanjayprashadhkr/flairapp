import React from "react";
import { Navbar } from "./components/Home/Navbar.tsx";
import { Footer } from "./components/Home/Footer.tsx";
import "./styles.css";
import "./largedevices.css";
import "./mediumdevices.css";
import "./smalldevices.css";
import { Home } from "./pages/Home.tsx";
import Callback from "./components/Callback.js";
import { Productinfo } from "./pages/Productinfo.tsx";
//import { ProductSearchPage } from "./pages/ProductSearchPage";
import { Routes, Route } from "react-router-dom";
//import { Cart } from "./pages/Cart";
import { useLocation } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/searchpage" element={<ProductSearchPage />} /> */}
        <Route path="/productinfo/:id" element={<Productinfo />} />
        {/* <Route path="/mycart" element={<Cart />} />*/}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

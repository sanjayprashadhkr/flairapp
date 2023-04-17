import React from "react";
import { Navbar } from "./components/Home/Navbar";
import { Footer } from "./components/Home/Footer";
import { SearchPage } from "./pages/SearchPage";
import "./styles.css";
import { Home } from "./pages/Home";
import { Productinfo } from "./pages/Productinfo";
//import { ProductSearchPage } from "./pages/ProductSearchPage";
import { Routes, Route } from "react-router-dom";
//import { Cart } from "./pages/Cart";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";

function App() {
  //Reset the page view to the top every time the user navigates to a new page
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchpage" element={<SearchPage />} />
        <Route path="/productinfo/:id" element={<Productinfo />} />
        {/* <Route path="/mycart" element={<Cart />} />*/}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

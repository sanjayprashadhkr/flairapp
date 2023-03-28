import React from "react";
import { Navbar } from "./components/Home/Navbar.tsx";
import { Footer } from "./components/Home/Footer.tsx";
// import { Navbar } from "./components/Home/Navbar";
//import { Card } from "./components/Home/Card";
// import { Footer } from "./components/Home/Footer";
import { Home } from "./pages/Home.tsx";
//import { Productdetails } from "./pages/Productdetails";
//import { ProductSearchPage } from "./pages/ProductSearchPage";
import { Routes, Route } from "react-router-dom";
//import { Cart } from "./pages/Cart";
// import { Loginform } from "./components/Loginform";
import { useLocation } from "react-router-dom";
// import { Signupform } from "./components/Signupform";
import "./App.css";
function App() {
  // const location = useLocation();
  //Hide navbar and footer if we are on the login form page
  // const hideOnLoginForm =
  //   location.pathname === "/loginform" || location.pathname === "/signupform";
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* {!hideOnLoginForm && <Navbar />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/searchpage" element={<ProductSearchPage />} /> */}
        {/* <Route path="/productdetails/:id" element={<Productdetails />} /> */}
        {/* <Route path="/mycart" element={<Cart />} />
        <Route path="/loginform" element={<Loginform />} />
        <Route path="/signupform" element={<Signupform />} /> */}
      </Routes>
      {/* {!hideOnLoginForm && <Footer />} */}
      <Footer />
    </div>
  );
}

export default App;

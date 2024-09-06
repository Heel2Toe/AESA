import Navbar from "./components/navbar/navbar";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Home from "./components/home";
import Contact from "./components/contact";
import Centers from "./components/centers/centers";
import StoreHome from "./components/aesastore/storehome";
import Products from "./components/aesastore/products";
import PromoStore from "./components/aesastore/promo-store";
import StoreFooter from "./components/aesastore/store-footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="relative h-full w-full">
      <Toaster position="top-right" />
      <Router>
        <Routes>

          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Centers />
                <Contact />
              </>
            }
          />

          <Route
            path="/store"
            element={
              <>
                <StoreHome />
                <Products />
                <PromoStore />
                <StoreFooter />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

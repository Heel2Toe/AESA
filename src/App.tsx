import { Toaster } from "react-hot-toast";
import Home from "./components/home";
import Contact from "./components/contact";
import Centers from "./components/centers/centers";
import StoreHome from "./components/aesastore/storehome";
import Products from "./components/aesastore/products";
import PromoStore from "./components/aesastore/promo-store";
import StoreFooter from "./components/aesastore/store-footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreNav from "./components/aesastore/store-nav";

const navbarProps = [
  {title : 'HOME', sectionnav: '#home'},
  {title : 'CENTERS', sectionnav: '#centers'},
  {title : 'CONTACT', sectionnav: '#contact'},
]

function App() {
  return (
    <div className="relative h-full w-auto">
      <Toaster position="top-right" />
      <Router>
        <Routes>

          <Route
            path="/"
            element={
              <>
                <StoreNav page="school" elements={navbarProps}/>
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

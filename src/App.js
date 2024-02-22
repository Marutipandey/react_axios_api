import React from "react";
import "./App.css";
import Header from "./containers/Header";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
                <Header />
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            
           element={<ProductListing />}
          />
          <Route
            path="/product/:productId"
            exact
            component={ProductDetail}
            element={<ProductDetail />}
          />
          <Route />
          404 not found
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/products" element={<ProductsPage />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

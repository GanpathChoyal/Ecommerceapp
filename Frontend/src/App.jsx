import { useEffect, useState } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductList from "../pages/ProductList";

function App() {
  

  return (
    <Router>
      <Routes>
      <Route path="/" element={<ProductList/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
    </Routes>
</Router>
  );
    
}

export default App;

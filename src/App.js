import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './Components/Products/Product';
import ProductDetails from './Components/Products/ProductDetails.js';
import CreateProduct from './Components/Products/CreateProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CreateProduct />} />
        <Route exact path="/products" element={<Product />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './Components/Products/Product';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;

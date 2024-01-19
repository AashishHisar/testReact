import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Auth/Login';

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product/details/:productId" element={<ProductDetails/>} />
          <Route path="/show-login-model" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

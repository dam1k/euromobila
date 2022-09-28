import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Products from './pages/Products';
import ProductPage from "./pages/ProductPage"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/categorie/:categoryName/:productId" element={<ProductPage/>}/>
        <Route path="/categorie/:categoryName" element={<Products/>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
  
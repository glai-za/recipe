import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import Ingredients from './components/Ingredients/Ingredients';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/ingredients" element={<Ingredients />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

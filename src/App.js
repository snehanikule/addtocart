import './App.css';
import Cart from './components/Cart';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route} from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Cart/>}/>
      <Route path='/ProductDetails' element={<ProductDetail/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

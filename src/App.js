
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import SProduct from './pages/SProduct';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/productlist' element={<ProductList />}/>
      <Route path='/products' element={<SProduct />}/>
    </Routes>
   </Router>
  );
}

export default App;

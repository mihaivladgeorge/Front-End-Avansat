import Home from './pages/Home';
import ProductList from './pages/ProductsList';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { useSelector } from "react-redux";


const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
  <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path='/cars/:category' element={<ProductList />} />
        <Route path='/cars' element={<ProductList />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={user ? <Navigate to="/"/> :<Login/> } />
        <Route path='/register' element={user ? <Navigate to="/"/> :<Register/> } />
      </Routes>
  </Router>
  );
};

export default App;

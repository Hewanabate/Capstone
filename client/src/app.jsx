
// import pages
import LoginForm from './components/Forms/LoginForm';
import Bracelets from './pages/Bracelets/Bracelets';
import Contact from './pages/Contact/Contact';
import Earrings from './pages/Earrings/Earrings';
import Necklaces from './pages/Necklaces/Necklaces';
import Rings from './pages/Rings/Rings';
import CartsCard from './components/Cards/Cart/CartsCard';
import ThankyouCard from './components/Cards/ThankyouCard/ThankyouCard';
import Cart from './pages/Cart/Cart';
import RegistrationForm from './components/Forms/RegistrationForm';
import Register from './pages/Forms/Register';

//import useCart provider Hook
import { CartProvider } from 'react-use-cart'


// importing route
import { Route, Routes } from 'react-router-dom';


export function App() {

 //Route
  return (
    <div className='App'>
      
      <CartProvider>
      <Routes>
        <Route exact path='/' element={<Contact />} />
        <Route path='/contact' element={<Contact />}/>
        <Route  path='/rings' element={<Rings />} />
        <Route  path='/earrings' element={<Earrings />} />
        <Route  path='/necklaces' element={<Necklaces />} />
        <Route  path='/bracelets' element={<Bracelets />} />
        <Route  path='/login' element={<LoginForm />} />
        <Route  path='/CartsCard' element={<CartsCard />} />
        <Route  path='/ThankyouCard' element={<ThankyouCard />} />
        <Route  path='/Cart' element={<Cart />} />
        <Route  path='/Register' element={<RegistrationForm />} />
      </Routes>
      </CartProvider>
    </div>
  );
}

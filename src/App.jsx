import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import Cart from './components/Cart/Cart';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      return [...prevCart, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
  setCart([]);
  };


  return (
    <Router future={{ 
      v7_startTransition: true,
      v7_relativeSplatPath: true 
    }}>
      <div className="app">
        <ToastContainer />
        <Navbar cartItems={cart} />
        
        <Routes>
          <Route path="/" element={<Home onAddToCart={addToCart} />} />
          <Route path="/productos" element={<Productos onAddToCart={addToCart} />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route 
            path="/cart" 
            element={
              <Cart 
                cart={cart} 
                onRemove={removeFromCart} 
                onUpdateQuantity={updateQuantity}
                onClearCart={clearCart}
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

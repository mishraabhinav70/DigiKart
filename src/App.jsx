import './App.css'
import Cart from './pages/cart/Cart'
import Home from './pages/home/Home'
import AllProducts from './components/AllProducts/AllProducts'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase/Firebase'
import SinglePage from './pages/SinglePage/SinglePage'
import toast from 'react-hot-toast'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App() {
  const [cart, setCart] = useState([])
  const [promoCode, setPromoCode] = useState('')
  const [discount, setDiscount] = useState(0)
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [userName, setUserName] = useState("");

  const addToCart = (product) => {
    const isProductExist = cart.find((item) => item.id === product.id)
    if (isProductExist) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
      setCart(updatedCart)
      toast.success("product added")
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
      toast.success("product added")
    }
  }

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id)
    setCart(updatedCart)
  }

  const handleInc = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
    setCart(updatedCart)
  }

  const handleDec = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
    )
    setCart(updatedCart)
  }

  const getSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getShipping = () => {
    const subtotal = getSubtotal();
    return subtotal > 0 && subtotal < 499 ? 50 : 0;
  };

  const getFinalTotal = () => {
    return getSubtotal() + getShipping() - discount;
  };



  const handleApplyPromo = () => {
    const subtotal = getSubtotal();

    if (promoCode === 'DISCOUNT10' && subtotal > 499) {
      setIsPromoApplied(true);
      setDiscount(subtotal * 0.1);
    } else {
      setIsPromoApplied(false);
      setDiscount(0);
      alert("Promo code is invalid or subtotal must be over ₹500.");
    }
  };

  useEffect(() => {
    if (isPromoApplied) {
      const subtotal = getSubtotal();
      if (subtotal > 500) {
        setDiscount(subtotal * 0.1);
      } else {
        // Revoke promo if subtotal drops below 500
        setDiscount(0);
        setIsPromoApplied(false);
        alert("Subtotal dropped below ₹500. Promo code removed.");
      }
    }
  }, [cart]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      }
      else {
        setUserName("")
      }
    });

  }, [])

  return (
    <div>
      <BrowserRouter>
        <Navbar cart={cart} userName={userName} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                handleDec={handleDec}
                handleInc={handleInc}
                handleRemove={handleRemove}
                getSubtotal={getSubtotal}
                getShipping={getShipping}
                getFinalTotal={getFinalTotal}
                promoCode={promoCode}
                setPromoCode={setPromoCode}
                handleApplyPromo={handleApplyPromo}
                discount={discount}
              />
            }
          />
          <Route path='/SinglePage/:id' element={<SinglePage addToCart={addToCart} />} />
          <Route path="/products" element={<AllProducts addToCart={addToCart} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact-us' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

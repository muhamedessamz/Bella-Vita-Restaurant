import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import OnlineOrder from './pages/OnlineOrder';
import Reservations from './pages/Reservations';
import About from './pages/About';
import Contact from './pages/Contact';
import PizzaBuilder from './pages/PizzaBuilder';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="menu"
            element={
              <ErrorBoundary>
                <Menu />
              </ErrorBoundary>
            }
          />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<OnlineOrder />} />
          <Route path="online-ordering" element={<OnlineOrder />} />
          <Route path="pizza-builder" element={<PizzaBuilder />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      </div>
    </CartProvider>
  );
}

export default App;

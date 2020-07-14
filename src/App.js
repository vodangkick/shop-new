import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';

import ProductDetail from './pages/ProductDetail';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/blog' component={Blog} />
        <Route path='/contact' component={Contact} />
        <Route path='/cart' component={Cart} />
        <Route path='/:slug' component={ProductDetail} />
        <Route path='/checkout' component={CheckOut} />
      </Switch>
    </>
  );
}

export default App;

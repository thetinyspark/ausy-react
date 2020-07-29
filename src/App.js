import React, { useState, useEffect } from 'react';
import Catalog from './catalog/Catalog';
import Cart from './cart/Cart';
import Header from './common/Header';
import Menu from './common/Menu';
import Footer from './common/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';



function App(props) {

    const [mycart, setMyCart] = useState([1,1,2,2,2,3,3,3,3]);

    const addToCart = (id) => {
      alert("Un produit a été ajouté au panier: " + id);
      const tab = [...mycart, id];
      setMyCart(  tab );
    };

    const removeFromCart = (id) => {
      alert("Un produit a été enlevé du panier: " + id);
      const tab = [...mycart];
      const pos = tab.indexOf(id);
      tab.splice( pos, 1); 
      setMyCart( tab );
    };

    return (
      <div className="App">
        <Header />
        <Router>
          <Menu />
          <Switch>
            <Route path="/catalog">
              <Catalog add={addToCart}/>
            </Route>
            <Route path="/cart">
              <Cart products={[...mycart]} onDelete={removeFromCart} />
            </Route>
            <Route path="/">
              <p>Bonjour et bienvenue sur ausy shop</p>
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    );

}

export default App;
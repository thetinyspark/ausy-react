import React from 'react';
import Catalog from './catalog/Catalog';
import Cart from './cart/Cart';
import Header from './common/Header';
import Menu from './common/Menu';
import Footer from './common/Footer';
import './App.css';



class App extends React.Component {

  render = () => {

    return (
      <div className="App">
        <Header />
        <Menu />
        <p>Contenu dynamique (corps de page variable selon l'url)</p>
        <Footer />
      </div>
    );
  };

}

export default App;
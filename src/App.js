import React from 'react';
import Clock from "./Clock";
import Catalog from './Catalog';
import Apod from './Apod';
import Welcome from './Welcome';
import './App.css';
import Cart from './Cart';



class App extends React.Component {

  render = () => {

    return (
      <div className="App">
        <Cart />
        <Catalog />
      </div>
    );
  };

}

export default App;
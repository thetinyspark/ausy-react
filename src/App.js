import React from 'react';
import Clock from "./Clock";
import './App.css';
import Catalog from './Catalog';
import Apod from './Apod';



class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      egypt: "ar-EG",
      france: "fr-FR",
      usa: "en-US"
    };

  }

  notify = (locale) => {
    console.log("Clock ", locale, "just passed another 10s interval." );
  };

  render = () => {

    return (
      <div className="App">
        <Apod />
        <Clock locale="fr-FR" />
        <Catalog />
      </div>
    );
  };

}

export default App;
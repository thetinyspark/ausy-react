import React from 'react';
import Welcome from "./Welcome";
import Clock from "./Clock";
import './App.css';



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
        <Clock locale={this.state.france} coucou={this.notify} />
        <Clock locale={this.state.usa}    coucou={this.notify}/>
        <Clock locale={this.state.egypt}  coucou={this.notify}/>
        <Welcome name="Nicolas" />
      </div>
    );
  };

}

export default App;
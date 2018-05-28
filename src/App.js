import React, { Component } from "react";
import Form from "./Form"
import {cities} from "./cities"
import {countries} from "./countries"

class App extends Component {
  render() {
    return (
      <div>
        <Form cities={cities} countries={countries}/>
      </div>
    );
  }
}

export default App;

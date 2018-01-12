import React, { Component } from 'react';
import './App.css';
import {Header} from "./components/header";
import NewItemInput from "./components/newItem";
import ListOfItems from "./components/listOfItems";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <NewItemInput />
          <ListOfItems />
        </div>
      </React.Fragment>
    );
  }
}

export default App;

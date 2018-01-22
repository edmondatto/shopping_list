import React, { Component } from 'react';
import './App.css';
import {Header} from "./components/header";
import NewItemInput from "./components/newItem";
import ListOfItems from "./components/listOfItems";
import {connect} from "react-redux";

class App extends Component {
  render() {
    const {data, dispatch} = this.props;

    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <NewItemInput dispatch={dispatch}/>
          <ListOfItems data={data} dispatch={dispatch}/>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
};

export default connect(mapStateToProps)(App);

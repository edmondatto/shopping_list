import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse bg-primary">
          <a className="navbar-brand" id="app-logo">Shopping List App</a>
        </nav>
        <div className="container">
          <form className="form-inline" id="new-item-input">
            <input type="text" className="form-control form-control-lg col-md-10 mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Enter new item here..."/>
            <button type="submit" className="btn btn-lg btn-primary">Add New Item</button>
          </form>
          <div id="item-list-header">
            <h2>Your current shopping list</h2>
          </div>
          <div className="card card-outline-primary mb-3">
            <div className="card-block">
              <div className="row">
                <div className="col-md-9">
                  <p className="item-body">
                    Carton of milk
                  </p>
                </div>
                <div className="col-md-3 text-right">
                  <button type="submit" className="btn btn-warning edit-button">Edit</button>
                  <button type="submit" className="btn btn-danger delete-button">Delete</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-outline-primary mb-3">
            <div className="card-block">
              <div className="row">
                <div className="col-md-9">
                  <p className="item-body">
                    Bag of Apples
                  </p>
                </div>
                <div className="col-md-3 text-right">
                  <button type="submit" className="btn btn-warning edit-button">Edit</button>
                  <button type="submit" className="btn btn-danger delete-button">Delete</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-outline-primary mb-3">
            <div className="card-block">
              <div className="row">
                <div className="col-md-9">
                  <p className="item-body">
                    2 Litres of Juice
                  </p>
                </div>
                <div className="col-md-3 text-right">
                  <button type="submit" className="btn btn-warning edit-button">Edit</button>
                  <button type="submit" className="btn btn-danger delete-button">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

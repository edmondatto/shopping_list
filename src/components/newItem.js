import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {addItem} from "../actions/items";

class NewItemInput extends Component{
  createItem = event => {
    event.preventDefault();
    const data = this.item.value;
    this.props.dispatch(addItem(data));
    event.target.reset();
  };

  render(){
    return(
      <form onSubmit={this.createItem} className="form-inline" id="new-item-input">
        <input
          type="text"
          className="form-control form-control-lg col-md-10 mb-2 mr-sm-2 mb-sm-0"
          id="inlineFormInput"
          placeholder="Enter new item here..."
          ref={(input) => this.item = input}
        />
        <button
          type="submit"
          className="btn btn-lg btn-primary">
          Add New Item
        </button>
      </form>
    );
  }
}

NewItemInput.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default NewItemInput;

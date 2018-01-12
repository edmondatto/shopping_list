import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NewItemInput extends Component{
  render(){
    return(
      <form className="form-inline" id="new-item-input">
          <input type="text" className="form-control form-control-lg col-md-10 mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Enter new item here..."/>
          <button type="submit" className="btn btn-lg btn-primary">Add New Item</button>
        </form>
    );
  }
}

export default NewItemInput;
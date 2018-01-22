import React, {Component} from 'react';
import ListItem from "./shoppingListItem";
import PropTypes from 'prop-types';
import {deleteItem} from "../actions/items";

class ListOfItems extends Component {
  render(){
    const {data, dispatch} = this.props;
    const itemComponents = data.items.map((item, index) => (
      <ListItem
        {...item}
        key={item.name}
        name={item.name}
        handleDelete={() => dispatch(deleteItem(index))}
        index={index}
        dispatch={dispatch}
      />
    ));

    return(
      <React.Fragment>
        <div id="item-list-header">
          <h2>Your current shopping list</h2>
        </div>
        {itemComponents}
      </React.Fragment>
    );
  }
}

ListOfItems.propTypes = {
  data: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default ListOfItems;

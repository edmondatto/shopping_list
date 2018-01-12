import React, {Component} from 'react';
import ListItem from "./shoppingListItem";

class ListOfItems extends Component {
  render(){
    return(
      <React.Fragment>
        <div id="item-list-header">
          <h2>Your current shopping list</h2>
        </div>
        <ListItem/>
      </React.Fragment>
    );
  }
}

export default ListOfItems;
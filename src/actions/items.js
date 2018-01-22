import * as ItemActionTypes from '../actiontypes/items';

export const addItem = data => {
  return {
    type: ItemActionTypes.ADD_ITEM,
    data
  }
};

export const deleteItem = index => {
  return {
    type: ItemActionTypes.DELETE_ITEM,
    index
  }
};

export const editItem = (index, editedItem) => {
  return {
    type: ItemActionTypes.EDIT_ITEM,
    index,
    editedItem
  }
};

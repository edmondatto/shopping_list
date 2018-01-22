import * as ItemActionTypes from '../actiontypes/items';

const initialState = {
  items: []
};

export default function ItemReducer (state = initialState, action) {
  switch (action.type) {
    case ItemActionTypes.ADD_ITEM:
      return {
        items: [
          ...state.items,
          {name: action.data}
        ]
      };

    case ItemActionTypes.DELETE_ITEM:
      return {
        items: [
          ...state.items.slice(0, action.index),
          ...state.items.slice(action.index + 1)
        ]
      };

    case ItemActionTypes.EDIT_ITEM:
      return {
        ...state,
        items: state.items.map((item, index) =>{
          if (index === action.index) {
            return {
              name: action.editedItem
            }
          }
          return item;
        }
        )
      };

    default:
      return state;
  }
}

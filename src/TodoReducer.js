import { object } from "prop-types";

const initialState = {
  itemList: [{ itemName: "", itemStatus: "" }]
};

const TodoReducer = (state = initialState, action) => {
  console.log(action.type + "" + action.payload);

  switch (action.type) {
    case "addItemInList": {
      state = {
        ...state,
        itemList: [
          ...state.itemList,
          { itemName: action.payload, itemStatus: false }
        ]
      };
      break;
    }
    case "MakeListComplete": {
      var data = {};
      data.itemList = [];
      state.itemList.forEach(element => {
        if (element.itemName == action.payload) {
          element.itemStatus = true;
        }
        data.itemList.push(element);
      });
      state = data;

      break;
    }
  }
  return state;
};

export default TodoReducer;

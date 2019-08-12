import React from "react";
import { addItemInList } from "./TodoAction";
import { connect } from "react-redux";
import "./styles.css";
import InputValue from "./InputValue";
import GridForItems from "./GridForItems";
class ToDoList extends React.Component {
  constructor() {
    super();
  }
  shouldComponentUpdate(prev, next) {
    return prev !== next;
  }
  render() {
    var that = this;
    return (
      <div>
        <InputValue />
        <GridForItems />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todoState: state.TodoReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addItem: value => {
      dispatch(addItemInList(value));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);

import React from "react";
import { addItemInList } from "./TodoAction";
import { connect } from "react-redux";
import "./styles.css";
class InputValue extends React.Component {
  constructor() {
    super();
    this.textInput = React.createRef();
  }
  shouldComponentUpdate(prev, next) {
    return prev !== next;
  }
  render() {
    var that = this;
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <button
          onClick={() => that.props.addItem(that.textInput.current.value)}
        >
          Add Item
        </button>
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
)(InputValue);

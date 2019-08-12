import React from "react";
import { addItemInList } from "./TodoAction";
import { makeListComplete } from "./TodoAction";
import { connect } from "react-redux";
import "./styles.css";
class GridItems extends React.Component {
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
        {that.props.todoState.itemList.length > 1 ? (
          <ul>
            {that.props.todoState.itemList.map(function(data, key) {
              if (data.itemName != "") {
                return (
                  <li key={key}>
                    <input
                      type="checkbox"
                      onClick={() => that.props.CompleteListItem(data.itemName)}
                    />
                    {data.itemName}
                  </li>
                );
              }
            })}
          </ul>
        ) : null}
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
    CompleteListItem: value => {
      dispatch(makeListComplete(value));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridItems);

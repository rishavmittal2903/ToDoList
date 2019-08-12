export function addItemInList(value) {
  return {
    type: "addItemInList",
    payload: value
  };
}
export function makeListComplete(value) {
  return {
    type: "MakeListComplete",
    payload: value
  };
}

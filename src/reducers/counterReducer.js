

const CounterReducer = (state = 0, action) => {
  if (action.type === "ADD_ONE") {
    return (state += 1);
  } else if (action.type === "ADD_TEN") {
    return (state += 10);
  } else if (action.type === "REMOVE_ONE") {
    return (state -= 1);
  } else if (action.type === "REMOVE_TEN") {
    return (state -= 10);
  } else if (action.type === "RESET") {
    return (state = 0);
  }
  return state;
};
export default CounterReducer;




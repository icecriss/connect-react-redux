// Crée un composant CounterContainer qui affichera la valeur du compteur et qui comportera les différents boutons permettant de dispatch les différentes actions.

import React from "react";
import { connect } from "react-redux";
import { addOneAction, addTenAction, removeOneAction, removeTenAction, resetAction } from "./actions/counter.js";



const mapStateToProps = state => ({
  counter: state
});

const mapDispatchToProps = dispatch => ({
  plusOne: () => dispatch(addOneAction),
  plusTen: () => dispatch(addTenAction),
  minusOne: () => dispatch(removeOneAction),
  minusTen: () => dispatch(removeTenAction),
  reset: () => dispatch(resetAction)
});

const CounterComponent = ({ counter, plusOne, plusTen, minusOne, minusTen, reset }) => (
  <div>
    <p>{counter}</p>
    <div class="btnContainer">
      <button onClick={plusOne} id="addOne">+1</button>
      <button onClick={plusTen} id="addTen">+10</button>
      <button onClick={minusOne} id="removeOne">-1</button>
      <button onClick={minusTen} id="removeTen">-10</button>
      <button onClick={reset} id="reset">Reset</button>
    </div>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);

import estoque from "../../../estoque.js";

const initialState = [...estoque];

function productsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default productsReducer;

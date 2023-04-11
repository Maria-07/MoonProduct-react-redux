import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

const initialState = {
  cart: [],
};

const productReducer = (state = initialState, action) => {
  const selectedProduct = state.cart.find(
    (product) => product.id === action.payload.id
  );

  console.log(selectedProduct);
  switch (action.type) {
    case ADD_TO_CART:
      if (selectedProduct) {
        const newCart = state.cart.filter((p) => p.id !== selectedProduct.id);
        // console.log("newCart", newCart);
        selectedProduct.quantity = selectedProduct.quantity + 1;
        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default productReducer;

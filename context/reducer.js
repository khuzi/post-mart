export const ADD_POST = "ADD_POST";
export const REMOVE_POST = "REMOVE_POST";

const addPostToCart = (post, state) => {
  const updatedCart = [...state.cart];

  const updatedItemIndex = updatedCart.findIndex((item) => item.id === post.id);

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...post, quantity: 1 });
  } else {
    const updatedItem = { ...updatedCart[updatedItemIndex] };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart };
};

const removePostFromCart = (postId, state) => {
  const updatedCart = [...state.cart];

  const updatedItemIndex = updatedCart.findIndex((item) => item.id === postId);
  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };
  updatedItem.quantity--;

  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart };
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      return addPostToCart(action.post, state);
    case REMOVE_POST:
      return removePostFromCart(action.postId, state);
    default:
      return state;
  }
};

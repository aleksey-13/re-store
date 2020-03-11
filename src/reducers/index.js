const initialState = {
  books: [],
  loading: true,
  hasError: null,
  cartItems: [],
  orderTotal: 290
};

const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }

  if (idx === -1) {
    return [...cartItems, item];
  }

  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (item = {}, book, quantity) => {
  const { id = book.id, title = book.title, count = 0, total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price
  };
};

const updateOrder = (state, bookId, quantity) => {
  const { books, cartItems } = state;
  const book = books.find(({ id }) => id === bookId);
  const itemIdx = cartItems.findIndex(item => item.id === bookId);
  const item = cartItems[itemIdx];
  const newItem = updateCartItem(item, book, quantity);

  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, itemIdx)
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return { ...state, loading: true, hasError: null };

    case "FETCH_BOOKS_SUCCESS":
      return { ...state, books: action.payload, loading: false };

    case "FETCH_BOOKS_FAILURE":
      return { ...state, hasError: action.payload, loading: false };

    case "BOOK_ADDED_TO_CART":
      return updateOrder(state, action.payload, 1);

    case "ALL_BOOKS_REMOVED_FROM_CART":
      const item = state.cartItems.find(({ id }) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);

    case "BOOK_REMOVED_FROM_CART":
      return updateOrder(state, action.payload, -1);

    default:
      return state;
  }
};

export default reducer;

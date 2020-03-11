const initialState = {
  books: [],
  loading: true,
  hasError: null,
  cartItems: [],
  orderTotal: 290
};

const updateCartItems = (cartItems, item, idx) => {
  if (idx === -1) {
    return [...cartItems, item];
  }

  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (item = {}, book) => {
  const { id = book.id, title = book.title, count = 0, total = 0 } = item;

  return {
    id,
    title,
    count: count + 1,
    total: total + book.price
  };
};

const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return { ...state, loading: true, hasError: null };

    case "FETCH_BOOKS_SUCCESS":
      return { ...state, books: action.payload, loading: false };

    case "FETCH_BOOKS_FAILURE":
      return { ...state, hasError: action.payload, loading: false };

    case "BOOK_ADDED_TO_CART": {
      const { books, cartItems } = state;
      const bookId = action.payload;
      const book = books.find(({ id }) => id === bookId);
      const itemIdx = cartItems.findIndex(item => item.id === bookId);
      const item = cartItems[itemIdx];
      const newItem = updateCartItem(item, book);

      return {
        ...state,
        cartItems: updateCartItems(cartItems, newItem, itemIdx)
      };
    }

    case "BOOK_DELETED_FROM_CART": {
      const { cartItems } = state;
      const bookId = action.payload;
      const itemIdx = cartItems.findIndex(item => item.id === bookId);

      return {
        ...state,
        cartItems: [
          ...cartItems.slice(0, itemIdx),
          ...cartItems.slice(itemIdx + 1)
        ]
      };
    }

    default:
      return state;
  }
};

export default reducer;

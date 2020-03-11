const initialState = {
  books: [],
  loading: true,
  hasError: null,
  cartItems: [],
  orderTotal: 290
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
      const bookId = action.payload;
      const book = state.books.find(({ id }) => id === bookId);
      let newItem = state.cartItems.filter(item => item.id === bookId)

      if (newItem.length !== 0) {
        newItem = newItem[0]
        newItem.count += 1;
        newItem.total += book.price
        console.log(newItem)
      } else {
        newItem = {
          id: book.id,
          name: book.title,
          count: 1,
          total: book.price
        };
      }

      return { ...state, cartItems: [...state.cartItems, newItem] };

    default:
      return state;
  }
};

export default reducer;

import React, { useEffect } from "react";
import { connect } from "react-redux";

import { withBookStoreService } from "../hoc";
import { fetchBook, bookAddedToCart } from "../../actions";
import { compose } from "../../utils";
import BookListItem from "../book-list-item";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import "./book-list.css";

const BookList = ({ books, onAddedToCart }) => (
  <ul className="book-list">
    {books.map(book => (
      <li key={book.id}>
        <BookListItem
          book={book}
          onAddedToCart={() => onAddedToCart(book.id)}
        />
      </li>
    ))}
  </ul>
);

const BookListContainer = props => {
  const { books, loading, hasError, fetchBook, onAddedToCart } = props;

  useEffect(() => fetchBook(), [fetchBook]);

  if (loading) {
    return <Spinner />;
  }

  if (hasError) {
    return <ErrorIndicator />;
  }

  return <BookList books={books} onAddedToCart={onAddedToCart} />;
};

const mapStateToProps = ({ books, loading, hasError }) => ({
  books,
  loading,
  hasError
});

const mapDispatchToProps = (dispatch, { bookStoreService }) => {
  return {
    fetchBook: fetchBook(bookStoreService, dispatch),
    onAddedToCart: id => dispatch(bookAddedToCart(id))
  };
};

export default compose(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);

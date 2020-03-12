import React from "react";
import { connect } from "react-redux";

import {
  bookAddedToCart,
  allBooksRemovedFromCart,
  bookRemovedFromCart
} from "../../actions";

import "./shopping-cart-table.css";

const ShoppingCartTable = props => {
  const { cartItems, orderTotal, onIncrease, onDecrease, onDetele } = props;

  const renderRow = (item, idx) => {
    const { title, id, total, count } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            className="btn btn-outline-danger btn-sm float-right"
            onClick={() => onDetele(id)}
          >
            <i className="fa fa-trash-o" />
          </button>
          <button
            className="btn btn-outline-success btn-sm float-right"
            onClick={() => onIncrease(id)}
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            className="btn btn-outline-warning btn-sm float-right"
            onClick={() => onDecrease(id)}
          >
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>{cartItems.map(renderRow)}</tbody>
      </table>

      <div className="total">Total: ${orderTotal}</div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => ({
  cartItems,
  orderTotal
});

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDetele: allBooksRemovedFromCart,
  onDecrease: bookRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);

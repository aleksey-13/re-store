import React from "react";

import BookListContainer from "../book-list";
import ShoppingCartTable from "../shopping-cart-table";

const HomePage = () => {
  return (
    <section>
      <BookListContainer />
      <ShoppingCartTable />
    </section>
  );
};

export default HomePage;

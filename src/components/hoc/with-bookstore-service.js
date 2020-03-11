import React from "react";

import { BookstoreServiceConsumer } from "../bookstore-service-context";

export const withBookStoreService = () => Wrapped => {
  return props => (
    <BookstoreServiceConsumer>
      {bookStoreService => (
        <Wrapped {...props} bookStoreService={bookStoreService} />
      )}
    </BookstoreServiceConsumer>
  );
};
